import React from 'react'
import { ExperienceInfo } from './ExperienceInfo'

export const ExperienceTopLeft = () => {
  return (
    <div className='flex flex-col gap-6 w-[300px]'>
      <p className='text-orange font-bold uppercase text-3xl font-special text-center'>Since 2023</p>
      <div className='flex justify-center items-center gap-4'>
        <ExperienceInfo number='3' text='Months' />
        <p className='font-bold text-6xl text-lightBrown'>-</p>
        <ExperienceInfo number='10' text='webSites' />
      </div>
      <p className='text-center text-white'>With 3 months of experience building dynamic and user-friendly web applications as intern in Unified Mentor Pvt. </p>

    </div>
  )
}
