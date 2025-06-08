import React from 'react';
import { motion } from 'framer-motion';
const Card = () => {
  return (
    <div className="flex sm:p-10 bg-white flex-col gap-10 items-center overflow-hidden">
      
     
      <motion.div className="w-full max-w-6xl p-4  flex flex-col md:flex-row items-center gap-6 shadow shadow-gray-400 rounded-md" 
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false }}>
       
        <div className="w-full md:w-[45%] xl:[clip-path:polygon(0_0,100%_0,85%_100%,0%_100%)]">
          <img src="/images/dgone.svg" alt="District Governor" className="w-full h-auto object-cover" />
        </div>

      
        <div className="w-full md:w-[55%] flex flex-col gap-4">
          <div>
            <h1 className="text-2xl font-bold text-heading">
              Inspiring Service, Creating Impact
            </h1>
            <div className="w-12 h-1 bg-yellow-500 mt-1 mb-2 rounded-full"></div>
          </div>

          <p className="text-sm text-info leading-relaxed">
            Lions International District 325 K District Governor [Name] is guiding Lions with purpose and dedication.
            Discover the vision and leadership that are shaping the future of service in our communities. Learn more
            about DG [Name]'s mission and unwavering commitment to empowering lives.
          </p>

          <a href="#" className="inline-block bg-button text-white text-sm font-semibold w-max py-2 px-4 rounded-md shadow-sm hover:brightness-110 transition">
            Learn More
          </a>
        </div>
      </motion.div>

   
      <motion.div  className="w-full max-w-6xl p-4  flex flex-col md:flex-row-reverse items-center gap-6 shadow shadow-gray-400 rounded-md"
      initial={{ x: 300, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false }}>
       
        <div className="w-full md:w-[45%] xl:[clip-path:polygon(0_0,100%_0,100%_100%,44%_100%)]">
          <img src="/images/dgone.svg" alt="District Governor" className="w-full h-auto object-cover" />
        </div>

      
        <div className="w-full md:w-[55%] flex flex-col gap-4">
          <div>
            <h1 className="text-2xl font-bold text-heading">
              Inspiring Service, Creating Impact
            </h1>
            <div className="w-12 h-1 bg-yellow-500 mt-1 mb-2 rounded-full"></div>
          </div>

          <p className="text-sm text-info leading-relaxed">
            Lions International District 325 K District Governor [Name] is guiding Lions with purpose and dedication.
            Discover the vision and leadership that are shaping the future of service in our communities. Learn more
            about DG [Name]'s mission and unwavering commitment to empowering lives.
          </p>

          <a href="#" className="inline-block bg-button text-white text-sm font-semibold w-max py-2 px-4 rounded-md shadow-sm hover:brightness-110 transition">
            Learn More
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
