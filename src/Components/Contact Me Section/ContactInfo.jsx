import React from 'react'
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { SingleInfo } from './SingleInfo';

export const ContactInfo = () => {
  return (
    <div className='flex flex-col gap-4 text-white'>
        <SingleInfo text="nerajchaudhary948@gmail.com" Image={HiOutlineMail}/>
        <SingleInfo text="+91 8416949440" Image={FiPhone}/>
        <SingleInfo text="Ghaziabad, Uttar Pradesh, India" Image={IoLocationOutline}/>

    </div>
  )
}
