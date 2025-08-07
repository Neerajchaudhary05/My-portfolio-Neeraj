import React from 'react'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState } from 'react';

export const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState('');

    const handleName = (e) => {
        setName(e.target.value);
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);

    }
    const handleMessage = (e) => {
        setMessage(e.target.value);

    }

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_ycglebv', 'template_57w1ixk', form.current, {
                publicKey: 'W7-qMez-5ePaBMwLi',
            })
            .then(
                () => {
                    setName('');
                    setEmail('');
                    setMessage('');
                    setSuccess('Message Sent!')
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };


    return (
        <div>
            <p className='text-cyan '>{success}</p>
            <form className='flex flex-col gap-4 text-white ' ref={form} onSubmit={sendEmail}>
                <input name="from_name"
                    type="text"
                    placeholder='Your Name'
                    required
                    className='h-12 rounded-lg bg-lightBrown px-2' 
                    value={name} onChange={handleName}
                    />

                <input name="from_email"
                    type="email"
                    placeholder='Your Email'
                    required
                    className='h-12 rounded-lg bg-lightBrown px-2' 
                    value={email} onChange={handleEmail}
                    />

                <textarea name='message'
                    type="text"
                    placeholder="Massage"
                    rows="9" cols="50"
                    required
                    className=' rounded-lg bg-lightBrown p-2' 
                    value={message} onChange={handleMessage}
                    />

                <button
                    type='submit'
                    className=' w-full rounded-lg border-cyan text-white h-12 font-bold text-xl hover:bg-darkCyan bg-cyan transition-all duration-500'>
                    Send</button>
            </form>
        </div>
    )
}
