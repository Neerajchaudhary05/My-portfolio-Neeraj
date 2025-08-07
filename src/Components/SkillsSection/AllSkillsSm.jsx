
import React from 'react'
import SingleSkill from './SingleSkill';
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { GiKey } from 'react-icons/gi';
import {motion} from 'framer-motion';
import { fadeIn } from '../../framerMotion/varients';


const skills = [
    { skill: 'HTML', icon: FaHtml5, },
    { skill: 'CSS', icon: FaCss3Alt },
    { skill: 'JavaScript', icon: IoLogoJavascript },
    { skill: 'TailwindCSS', icon: RiTailwindCssFill },
    { skill: 'ReactJS', icon: FaReact },
    { skill: 'NodeJS', icon: FaNodeJs },
    { skill: 'MySQL', icon: SiMysql },
    { skill: 'ExpressJS', icon: SiExpress },
]

export const AllSkillsSm = () => {
  return (
    <div className='grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12'>
        {skills.map((item,index)=>{
            return <motion.div
            variants={fadeIn('up',0.7)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{once: false,amount:0}}
                    
              key={index} className='flex flex-col items-center'> <item.icon className='text-7xl text-orange '/> 
            <p className='text-center mt-4 text-white'>{item.skill}</p>
            </motion.div>
        })}
    </div>
  )
}

export default AllSkillsSm