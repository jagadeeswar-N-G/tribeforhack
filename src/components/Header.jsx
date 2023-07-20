import React from 'react'
import logo from '../assets/_.png'

function Header() {
  return (
    <div>
        <header className='bg-violet-500 shadow-md  z-50  w-full'>
            <div className='flex items-center justify-center p-5'>
               <img src={logo} alt="Tribe for hack" className='h-[25px]'/>
            </div>
        </header>
    </div>
  )
}

export default Header