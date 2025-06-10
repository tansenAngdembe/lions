import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Search, X, ChevronLeft, ChevronRight } from 'lucide-react'
import { BASE_DOC, BASE_URL } from '../../config';

const Clubs = () => {
  const [query, setQuery] = useState("");
  const [clubs, setClubs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(5);

  useEffect(() => {
    const fetchClubs = async () => {
      try {
        const response = await axios.post(`${BASE_URL}get-all-clubs`);
        setClubs(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching clubs:', error);
        setLoading(false);
      }
    };

    fetchClubs();
  }, []);

  const filteredClubs = clubs?.filter(club =>
    club.clubName.toLowerCase().includes(query.toLowerCase()) ||
    club.clubId.toLowerCase().includes(query.toLowerCase()) ||
    club.districtMultiple.toLowerCase().includes(query.toLowerCase())
  );

  // Pagination logic
  const indexOfLastClub = currentPage * entriesPerPage;
  const indexOfFirstClub = indexOfLastClub - entriesPerPage;
  const currentClubs = filteredClubs?.slice(indexOfFirstClub, indexOfLastClub);
  const totalPages = Math.ceil(filteredClubs?.length / entriesPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleEntriesChange = (e) => {
    setEntriesPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

 

  return (
    <div className='min-h-screen mt-33 flex flex-col bg-gray-50'>     
      <div className='flex-1 flex flex-col items-center justify-start pt-10 pb-10'>
        <div className="w-full max-w-6xl mb-2 px-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-4 rounded-xl shadow-sm">
            {/* Entries per page selector */}
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-gray-700 whitespace-nowrap">Show</span>
              <select
                value={entriesPerPage}
                onChange={handleEntriesChange}
                className="border border-gray-200 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50"
              >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={50}>50</option>
              </select>
              <span className="text-sm font-medium text-gray-700 whitespace-nowrap">entries</span>
            </div>

            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <Search size={20} />
              </div>
              <input
                type="text"
                placeholder="Search by club name, ID, or district..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full pl-10 pr-10 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50"
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X size={20} />
                </button>
              )}
            </div>
          </div>
        </div>

        <div className='flex flex-col justify-center items-center xl:p-10 gap-4 w-full max-w-6xl'>
          {filteredClubs?.length > 0 ? (
            <>
              {/* Table */}
              <div className="w-full overflow-x-auto bg-white rounded-xl shadow-sm">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Logo</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Club ID</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Club Name</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">District</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Extension Chairperson</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {currentClubs?.map((club) => (
                      <tr key={club.clubId} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <img 
                            src={`${BASE_DOC}/${club.logoUrl}`}
                            alt={`${club.clubName} logo`}
                            className="h-12 w-12 rounded-full object-cover"
                            onError={(e) => {
                              e.target.onerror = null;
                            }}
                          />
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{club.clubId}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{club.clubName}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{club.districtMultiple}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{club.extensionChairperson}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              {/* Updated Pagination */}
              <div className="flex items-center justify-between w-full bg-white p-4 rounded-xl shadow-sm mt-2">
                <div className="text-sm text-gray-700">
                  Showing <span className="font-medium">{indexOfFirstClub + 1}</span> to{' '}
                  <span className="font-medium">{Math.min(indexOfLastClub, filteredClubs.length)}</span> of{' '}
                  <span className="font-medium">{filteredClubs?.length}</span> entries
                </div>
                
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-3 py-1 rounded-md border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Previous
                  </button>
                  
                  <div className="flex items-center gap-1">
                    {[...Array(totalPages)].map((_, index) => {
                      const pageNumber = index + 1;
                      // Show first page, last page, current page, and pages around current page
                      if (
                        pageNumber === 1 ||
                        pageNumber === totalPages ||
                        (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
                      ) {
                        return (
                          <button
                            key={pageNumber}
                            onClick={() => handlePageChange(pageNumber)}
                            className={`px-3 py-1 rounded-md text-sm font-medium ${
                              currentPage === pageNumber
                                ? 'bg-blue-500 text-white'
                                : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                            }`}
                          >
                            {pageNumber}
                          </button>
                        );
                      } else if (
                        pageNumber === currentPage - 2 ||
                        pageNumber === currentPage + 2
                      ) {
                        return <span key={pageNumber} className="px-2">...</span>;
                      }
                      return null;
                    })}
                  </div>

                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-3 py-1 rounded-md border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Next
                  </button>
                </div>
              </div>
            </>
          ) : query ? (
            <div className="flex flex-col items-center justify-center p-8 bg-white rounded-xl shadow-sm w-full max-w-md">
              <Search size={48} className="text-gray-400 mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">No Clubs Found</h3>
              <p className="text-gray-500 text-center">
                No clubs found matching "{query}". Try searching with a different name or ID.
              </p>
            </div>
          ) : (
            <div className="w-full overflow-x-auto bg-white rounded-xl shadow-sm">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Logo</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Club ID</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Club Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">District</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Extension Chairperson</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {clubs?.map((club) => (
                    <tr key={club.clubId} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <img 
                          src={`${BASE_DOC}/${club.logoUrl}`}
                          alt={`${club.clubName} logo`}
                          className="h-12 w-12 rounded-full object-cover"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = 'https://via.placeholder.com/48';
                          }}
                        />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{club.clubId}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{club.clubName}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{club.districtMultiple}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{club.extensionChairperson}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Clubs;
