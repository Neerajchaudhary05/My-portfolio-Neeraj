import React from 'react'
import SubSkillImage from "/My-portfolio-Neeraj/public/images/subSkills.jpg"


export const SubSkills = () => {
  return (
    <div className='border-y-2 border-lightGrey relative '>
        <div className='absolute bg-gradient-to-r from-orange to-cyan opacity-50 w-full h-full '></div>
        <img src={SubSkillImage} alt="Sub Skills Image" />
    </div>
  )
}


