import React from 'react'
import { ProjectText } from './ProjectText'
import { SingleProject } from './SingleProject'
import {motion} from 'framer-motion';
import { fadeIn } from '../../framerMotion/varients';

import Project1 from "/My-portfolio-Neeraj/public/images/website-img-1.jpg";
import Project2 from "/My-portfolio-Neeraj/public/images/website-img-2.webp";
import Project3 from "/My-portfolio-Neeraj/public/images/website-img-3.jpg";
import Project4 from "/My-portfolio-Neeraj/public/images/website-img-4.jpg";


const projects=[
    {
        name:'Estate Website',
        year:'Aug2025',
        align:'right',
        image:Project1,
        link:"https://github.com/Neerajchaudhary05/Estate-Website.git",

    },
    {
        name:'To-Do-List',
        year:'Jul2025',
        align:'left',
        image:Project2,
        link:"https://github.com/Neerajchaudhary05/ToDo-List.git",

    },
    {
        name:'Bank Management System',
        year:'Mar2025',
        align:'right',
        image:Project3,
        link:"https://github.com/Neerajchaudhary05/Bank-Management-System.git",

    },
    {
        name:'Koun Banega Crorepati',
        year:'Jan2025',
        align:'left',
        image:Project4,
        link:"https://github.com/Neerajchaudhary05/Koun-Banega-Crorepati.git",

    }
]

export const Projectmain = () => {
  return (
    <div id='projects' className='max-w-[1200px] mx-auto px-4'>
        <motion.div
        variants={fadeIn('up',0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{once: false,amount:0}}
                
        >

        <ProjectText />
        </motion.div>
        <div className='flex flex-col gap-20 max-w-[900px] mx-auto mt-12'>
        {
            projects.map((item,index)=>{
                return <SingleProject key={index} name={item.name} year={item.year}  align={item.align} image={item.image} link={item.link} />
            })
        }
        </div>
    </div>
  )
}
