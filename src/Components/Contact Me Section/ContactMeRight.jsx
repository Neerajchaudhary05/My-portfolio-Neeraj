import React from 'react'
import { ContactInfo } from './ContactInfo'
import { ContactSocial } from './ContactSocial'
import EmailImage from "/My-portfolio-Neeraj/public/images/email-image.png"

export const ContactMeRight = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-12'>
        <img src={EmailImage} alt=" Contact Me" className='max-w-[300px]'/>
        <ContactInfo />
        <ContactSocial />

    </div>

  )
}
