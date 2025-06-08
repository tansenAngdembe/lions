import React from 'react'
import {useState, useEffect} from "react"
import { ArrowRight, Calendar } from 'lucide-react'
import { motion } from 'framer-motion'
// import { setDate } from 'date-fns';



const BlogCard = () => {
const [dateTime, setDateTime] = useState(new Date());

useEffect(() => {
  const I = setInterval(() => {
    setDateTime(new Date());
  }, 1000);

  return () => clearInterval(I);
}, []);
  return (
    <motion.div className='w-80 shadow shadow-gray-500'
    initial={{ x: -100, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    viewport={{ once: false }}
>
        <img src="/images/dgone.svg" alt="" />
        <div className='flex flex-col items-start justify-center pl-2'>
            <div className='flex items-center justify-center gap-2 pt-2 pb-2'>
            <span>
       <Calendar height={18} width={18} />
       </span>
       <span className='text-sm text-info'>{dateTime.toLocaleString()}</span>
            </div>
            <div className='text-info text-sm flex flex-col gap-2'>
            <h1>Distric 325 | Nepal onnounces third general convention</h1>
            <p>Distric 325 | Nepal onnounces third general convention</p>
            <a className='flex justify-start items-center gap-1 p-2' href="#">See all <ArrowRight /></a>
            </div>
        </div>
    </motion.div>
  )
}

export default BlogCard