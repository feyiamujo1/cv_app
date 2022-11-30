import React from 'react'
import Logo from '../../src/assets/images/logo-oau.png'

function Navbar() {
  return (
    <nav className='absolute w-full py-2 top-0 bg-white flex items-center shadow-nav-shadow z-10'>
        <div className='w-11/12 mx-auto'>
          <img className='h-12 cursor-pointer hover:opacity-75' src={Logo} alt='Logo'/>
        </div>
    </nav>
  )
}

export default Navbar