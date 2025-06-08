import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { FileText, Download, Search, X } from 'lucide-react'
import { BASE_DOC, BASE_URL } from '../../config';

const Resources = () => {
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const response = await axios.post(`${BASE_URL}get-resources`);
        setResources(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching resources:', error);
        setLoading(false);
      }
    };

    fetchResources();
  }, []);

  const filteredResources = resources.filter(resource =>
    resource.name.toLowerCase().includes(query.toLowerCase()) ||
    resource.category.toLowerCase().includes(query.toLowerCase())
  );

  const downloadFile =async (filePath)=>{
    const fileUrl =  `${BASE_DOC}${filePath}`;
  console.log("Opening:", fileUrl); 
 window.open(fileUrl, "_blank");

  }

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  return (
    <div className='min-h-screen flex flex-col'>
      <div className='flex-1 flex flex-col items-center justify-start pt-48 pb-20'>
        <div className="w-full max-w-4xl mb-8 px-4">
          <div className="relative max-w-md mx-auto">
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <Search size={20} />
            </div>
            <input
              type="text"
              placeholder="Search resources..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-10 pr-10 py-2 border border-gray-200 rounded"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              >
                <X size={20} />
              </button>
            )}
          </div>
        </div>

        <div className='flex flex-col gap-4 w-full max-w-4xl px-4'>
          {filteredResources.length > 0 ? (
            filteredResources.map(({ id, name, filePath, category }) => (
              <div
                key={id}
                className='flex items-center justify-between bg-white p-4 border border-gray-200'
              >
                <div className='flex items-center gap-4'>
                  <FileText size={24} className="text-gray-400" />
                  <div>
                    <h3 className='text-base font-medium text-gray-800'>{name}</h3>
                    <span className='text-sm text-gray-500'>{category}</span>
                  </div>
                </div>
                  <button
                  key={id}
                  className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors"
                  onClick={()=>downloadFile(filePath)}
                >
                   <Download size={18} />
                    View
                </button>
              </div>
            ))
          ) : query ? (
            <div className="flex flex-col items-center justify-center p-8 bg-white border border-gray-200">
              <Search size={48} className="text-gray-400 mb-4" />
              <h3 className="text-xl font-medium text-gray-700 mb-2">No Resources Found</h3>
              <p className="text-gray-500 text-center">
                No resources found matching "{query}". Try searching with different terms.
              </p>
            </div>
          ) : (
            resources.map(({ id, name, filePath, category }) => (
              <div
                key={id}
                className='flex items-center justify-between bg-white p-4 border border-gray-200'
              >
                <div className='flex items-center gap-4'>
                  <FileText size={24} className="text-gray-400" />
                  <div>
                    <h3 className='text-base font-medium text-gray-800'>{name}</h3>
                    <span className='text-sm text-gray-500'>{category}</span>
                  </div>
                </div>

                <button
                  key={id}
                  className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors"
                  onClick={()=>downloadFile(filePath)}
                >
                   <Download size={18} />
                    View
                </button>
                
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Resources; 