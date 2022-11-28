import React from 'react'

function Home() {
  return (
    <div className='h-full w-full py-8 mt-12 mb-10 sm:mt-14 lg:my-0 lg:py-0 flex items-center justify-center'>
        <div className='h-full flex flex-col justify-center gap-3 w-11/12 lg:h-screen lg:flex-row lg:w-full lg:box-border lg:gap-0'>
          <div className='w-full h-[280px] sm:h-[380px] lg:h-full lg:w-2/4 bg-intro-image bg-cover bg-no-repeat bg-center'>
            
          </div>
          <div className='h-full w-full lg:px-16 flex flex-col justify-center gap-3 lg:gap-3.5 pt-10 box-border'>
            <div>
              <h2 className='text-base md:text-lg font-medium text-custom-dark-blue'>OAU RESUME BUILDER</h2>
              <h1 className='text-[32px] md:text-4xl leading-10 font-bold text-custom-blue'>The easiest <span className='text-[#caa159]'>way to</span> create a <span className='text-[#caa159]'>perfect resume!</span></h1>
            </div>
            <p className='text-custom-brown text-base md:text-lg'>Use this professional resume builder that follows the exact
              ‘resume rules’ Obafemi Awolowo University looks for.
              It is easy to use and will be done within minutes -  
              Try now, it's free!
            </p>
            <div className='flex'>
              <p className='p-4 text-white font-medium text-lg md:text-xl rounded-md hover:bg-custom-blue bg-custom-dark-blue hover:text-slate-400 cursor-pointer'>Build Resume</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Home