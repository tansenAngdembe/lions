import React from 'react'
import Herop from './Herop'
import IntroCard from '../Cards/IntroCard'
import Card from '../Cards/Card'
import Blog from "./Blog"
import Test from "../Calender/Test"



const Home = () => {
  return (
   <section className='flex flex-col items-center justify-center gap-4'>
     <Herop />
     <IntroCard />
     <Card />
     <Test />
     <Blog />
    
   </section>
  )
}

export default Home