import React from 'react'

export const SingleContactSocial = ({Icon ,Link}) => {
  return (
    <div className='text-2xl h-12 w-12 border rounded-2xl border-orange text-orange p-3 flex items-center justify-center'>
        <a href={Link} className='cursor-pointer '><Icon /></a>
    </div>
  )
}
