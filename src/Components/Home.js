import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' }, 0);
  }, []);
  return (
    <div className='h-full w-full py-8 mt-12 mb-10 sm:mt-14 md:my-0 md:py-0 flex items-center justify-center'>
        <div className='h-full flex flex-col justify-center gap-2 w-11/12 md:h-screen md:flex-row md:w-full md:box-border md:gap-0'>
          <div className='w-full h-[280px] sm:h-[380px] md:h-full md:w-8/12 lg:w-9/12 bg-intro-image bg-cover bg-no-repeat bg-center'>
            
          </div>
          <div className='h-full w-full md:px-6 lg:px-16 flex flex-col justify-center gap-3 lg:gap-3.5 md:pt-10 box-border'>
            <div>
              <h2 className='text-base lg:text-lg font-bold text-custom-dark-blue'>OAU CV BUILDER</h2>
              <h1 className='text-[32px] md:text-4xl lg:text-5xl leading-10 font-bold text-custom-blue'>The easiest <span className='text-[#caa159]'>way to</span> create a <span className='text-[#caa159]'>perfect Curriculum Vitae!</span></h1>
            </div>
            <p className='text-custom-brown text-base lg:text-lg'>Use this professional resume builder that follows the exact
              ‘Curriculum Vitae (CV) rules’ Obafemi Awolowo University looks for.
              It is easy to use and will be done within minutes -  
              Try now, it's free!
            </p>
            <div className='flex'>
              <p className='p-4 text-white font-medium text-base lg:text-lg rounded-md hover:bg-custom-blue bg-custom-dark-blue hover:text-slate-400 cursor-pointer'><Link to="/createcv">Build Resume</Link></p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Home