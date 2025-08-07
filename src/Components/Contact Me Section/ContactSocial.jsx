import React from 'react'
import { SingleContactSocial } from './SingleContactSocial'
import { FiGithub, FiInstagram } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";



export const ContactSocial = () => {
  return (
    <div className='flex gap-4 '>
        <SingleContactSocial Link='https://www.linkedin.com/in/neeraj-chaudhary-41384025b/' Icon={FaLinkedinIn} />
        <SingleContactSocial Link='https://leetcode.com/u/neerajch/' Icon={SiLeetcode}/>
        <SingleContactSocial Link='https://github.com/Neerajchaudhary05' Icon={FiGithub}/>
        <SingleContactSocial Link='https://www.instagram.com/er_chaudhary_208?utm_source=qr&igsh=MWZxMnR4Z3BiNjA2cQ== ' Icon={FiInstagram}/>

    </div>
  )
}
