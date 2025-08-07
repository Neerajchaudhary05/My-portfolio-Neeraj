import React from 'react'
import { LuArrowDownRight } from "react-icons/lu"

export const navbarBtn = () => {
  return (
    <button className='px-4 py-2 rounded-full text-xl font-bold text-white border-cyan-400 border flex items-center gap-1 bg-gradient-to-r from-cyan not-first:to-orange hover:border-orange-400 hover:scale-110 transition-all duration-500 hover:shadow-small'
    >Hire Me
    <div className='sm:hidden md:block '>
      <LuArrowDownRight />
    </div>
    </button>
  );
};

export default navbarBtn