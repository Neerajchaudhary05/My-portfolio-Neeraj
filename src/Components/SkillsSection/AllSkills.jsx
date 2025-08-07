
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
import { motion } from 'framer-motion';
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

export const AllSkills = () => {
    return (
        <div>
            <div className='flex items-center justify-center  relative gap-4  max-w-[1200px] x-auto'>
                {skills.map((item, index) => {
                    return (
                        <motion.div
                        key={index}
                        variants={fadeIn('up',`0.${index}`)}
                                initial="hidden"
                                whileInView="show"
                                viewport={{once: false,amount:0}}
                                
                        >
                            <SingleSkill  text={item.skill} imgSvg={<item.icon />} />
                        </motion.div>
                    )
                })}
            </div>
        </div>
    )
}

export default AllSkills