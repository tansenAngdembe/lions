import React from 'react'
import { motion } from 'framer-motion'
import { BASE_DOC } from '../../config';

const ClubCard = ({ clubs }) => {
  return (
    <div className="flex flex-col gap-2 w-full max-w-4xl rounded-2xl">
      {clubs.map(({ id, clubName, clubId, charteredDate, member, districtMultiple, logoUrl }) => (
        <motion.div
          key={id}
          className='flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-white p-2 border border-gray-200 rounded-xl'
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ 
            duration: 0.6, 
            ease: "easeOut",
            delay: id * 0.1
          }}
        >
          <img 
            src={`${BASE_DOC}${logoUrl}` || "/images/logo.svg"} 
            alt="logo" 
            className="w-8 h-8 object-contain" 
          />
          <div className='flex-1 '>
            <h1 className='text-base font-medium text-gray-800 mb-1'>{clubName}</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm'>
              <div>
                <span className='block text-gray-600'>Clubs ID</span>
                <span>{clubId}</span>
              </div>
              <div>
                <span className='block text-gray-600'>Charter Date</span>
                <span>{new Date(charteredDate).toLocaleDateString()}</span>
              </div>
              <div>
                <span className='block text-gray-600'>Member</span>
                <span>{member}</span>
              </div>
              <div>
                <span className='block text-gray-600'>District Multiple</span>
                <span>Dues: {districtMultiple}</span>
              </div>
            </div>
          </div>
          <div className='text-blue-600 text-sm cursor-pointer hover:underline'>
            See all »
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ClubCard;
