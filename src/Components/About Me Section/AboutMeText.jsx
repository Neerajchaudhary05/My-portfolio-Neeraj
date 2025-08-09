import React from 'react'

export const AboutMeText = () => {
  return (
    <div className='flex flex-col md:items-start sm:items-center md:text-left sm:text-center '>
        <h2 className='text-6xl text-cyan mb-10'>
           About Me 
        </h2>
        <p className='text-white'>
            Hello! I'm Neeraj, currently enrolled in the third year (fifth semester) of a 3-year Diploma in Engineering (specializing in Computer Science / Information Technology) at a polytechnic institute in Uttar Pradesh. The diploma programme is designed around hands-on, industry-oriented learning, covering modules like data structures, operating systems, networking, web technologies and end-semester project work. This structure makes diploma holders job-ready after year-three and also enables lateral entry into the second year of a B.Tech or direct IT roles.
            <button className='border border-orange rounded-full py-2 px-4 text-lg flex items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white hover:text-cyan hover:shadow-small '  onClick={() => window.open("https://drive.google.com/file/d/1ONpiHPPN2G7y4uo8T0i-OSekCyoWEuaR/view?usp=drivesdk ", "_blank")}>My CV</button>
        </p>
    </div>
  )
}

export default AboutMeText
