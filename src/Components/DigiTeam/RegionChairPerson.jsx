import React from 'react'
import ProfileCard from '../Cards/ProfileCard.jsx'
import { useTranslation } from 'react-i18next'
const RegionChairPerson = () => {
  const {t} = useTranslation()
  return (
    <section className='min-h-screen w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 pt-32 sm:pt-40 mt-10'>
      <div className='max-w-7xl mx-auto'>
        <h1 className='text-2xl sm:text-3xl md:text-4xl text-heading font-bold text-center mb-6 sm:mb-8'>
       {t("header.teams.cabinet-officials.region").toUpperCase()}
        </h1>
          <ProfileCard />
      </div>
    </section>
  )
}

export default RegionChairPerson