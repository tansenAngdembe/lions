import React, { useState, useEffect } from 'react'
import ClubCard from '../Cards/ClubCard'
import axios from 'axios'
import { Search, X, ChevronLeft, ChevronRight } from 'lucide-react'

const Clubs = () => {
  const [query, setQuery] = useState("");
  const [clubs, setClubs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(5);

  useEffect(() => {
    const fetchClubs = async () => {
      try {
        const response = await axios.post('http://localhost:8080/api/v1/public/get-all-clubs');
        setClubs(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching clubs:', error);
        setLoading(false);
      }
    };

    fetchClubs();
  }, []);

  const filteredClubs = clubs.filter(club =>
    club.clubName.toLowerCase().includes(query.toLowerCase()) ||
    club.clubId.toLowerCase().includes(query.toLowerCase())
  );

  // Pagination logic
  const indexOfLastClub = currentPage * entriesPerPage;
  const indexOfFirstClub = indexOfLastClub - entriesPerPage;
  const currentClubs = filteredClubs.slice(indexOfFirstClub, indexOfLastClub);
  const totalPages = Math.ceil(filteredClubs.length / entriesPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleEntriesChange = (e) => {
    setEntriesPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  return (
    <div className='min-h-screen flex flex-col bg-gray-50'>
      <div className='flex-1 flex flex-col items-center justify-start pt-40 pb-10'>
        <div className="w-full max-w-4xl mb-2 px-4">
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
                placeholder="Search by club name or ID..."
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

        <div className='flex flex-col justify-center items-center xl:p-10 gap-4 w-full'>
          {filteredClubs.length > 0 ? (
            <>
              <ClubCard clubs={currentClubs} />
              
              {/* Pagination */}
              <div className="flex items-center gap-2 mt-2 bg-white p-4 rounded-xl shadow-sm">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="p-2 rounded-lg border border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
                >
                  <ChevronLeft size={20} className="text-gray-600" />
                </button>
                
                {[...Array(totalPages)].map((_, index) => (
                  <button
                    key={index + 1}
                    onClick={() => handlePageChange(index + 1)}
                    className={`px-4 py-2 rounded-lg transition-all ${
                      currentPage === index + 1
                        ? 'bg-blue-500 text-white shadow-sm'
                        : 'border border-gray-200 hover:bg-gray-50 text-gray-700'
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}

                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="p-2 rounded-lg border border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
                >
                  <ChevronRight size={20} className="text-gray-600" />
                </button>
              </div>

              {/* Page info */}
              <div className="text-sm text-gray-600 mt-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                Showing <span className="font-medium">{indexOfFirstClub + 1}</span> to{' '}
                <span className="font-medium">{Math.min(indexOfLastClub, filteredClubs.length)}</span> of{' '}
                <span className="font-medium">{filteredClubs.length}</span> entries
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
            <ClubCard clubs={clubs} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Clubs;
