import React from 'react'
import { ContactForm } from './ContactForm'

export const ContactMeLeft = () => {
  return (
    <div className='flex flex-col gap-4 w-full'>
        <div>
            <h2 className='text-orange text-3xl mb-4'>Get In Touch</h2>
            <p className='text-white'> Fell free for reach out me for any query 
                <br />
                you are just few clicks away 
            </p>
        </div>
        <ContactForm />
    </div>
  )
}
