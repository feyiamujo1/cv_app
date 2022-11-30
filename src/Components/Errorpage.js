import React from 'react'
import { Link, useRouteError } from 'react-router-dom';

function Errorpage() {
    const error = useRouteError();
    console.error(error);
  return (
    <div className='h-screen w-11/12 mx-auto flex flex-col gap-5 justify-center items-center'>
        <div className='flex flex-col gap-2.5 justify-center items-center'>
            <h1 className='text-4xl font-bold text-red'>
                Oops!
            </h1>
            <p className='text-center text-sm'><i>Sorry, an unexpected error has occurred.</i></p>
            <p className='text-xl text-custom-brown'>
                Page {error.statusText || error.message}
            </p>
        </div>
        <button className='p-4 text-white font-medium text-base lg:text-lg rounded-md hover:bg-custom-blue bg-custom-dark-blue hover:text-slate-400 cursor-pointer'>
            <Link to="/">
                Home Page
            </Link>
        </button>
    </div>
  )
}

export default Errorpage