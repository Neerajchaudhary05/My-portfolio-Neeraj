import React from 'react'
import { SingleExperience } from './SingleExperience'
import { FaArrowRight } from "react-icons/fa";
import { motion } from 'framer-motion';
import { fadeIn } from '../../framerMotion/varients';



const experiences = [
  {
    job: 'One Day Workshop',
    company: 'Apple Tree Infotech',
    date: '16-10-2023',
    about: ["Concept of Programming", "How to code efficiently", "Importance of programming",

    ],
  },
  {
    job: 'Internship',
    company: 'Unified Mentor Pvt.',
    date: '01-08-2025-present',
    about: ["Work on Real life projects", "How Backend and Frontend works", "Artificial Inteligence Integration",

    ],
  },

]

export const AllExperiences = () => {
  return (
    <div className='flex md:flex-row sm:flex-col items-center justify-between'>
      {experiences.map((experience, index) => {
        return (<> <SingleExperience key={index} experience={experience} />
          {index < 1 ?
            (<motion.div
            variants={fadeIn('right',0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{once: false,amount:0}}
                    
            >
              <FaArrowRight className='text-6xl text-orange md:block sm:hidden' />

            </motion.div>
            ) : ("")}
        </>
        );
      })}
    </div>
  )
}
