import React from 'react'

function Displaysteps() {
  return (
    <div className='w-full flex items-center'>
        <div className='relative flex flex-col items-center text-custom-blue'>
            <div className='rounded-full transition duration-500 ease-in-out border-2 border-custom-brown h-12 w-12 flex items-center justify-center
            py-3'>
                {/* Display number */} 1
            </div>
            <div className='absolute top-0 text-center mt-16 w-32 text-xs font-medium uppercase'>
                {/* Display description */} Description
            </div>
            <div className='flex-auto border-t-2 transition duration-500 ease-in-out w-full'>
                {/* Display the line */}
            </div>
        </div>
    </div>
  )
}

export default Displaysteps