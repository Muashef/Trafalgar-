import React from 'react'
import Load from '../assets/svg/load.svg';

const Download = () => {
  return (
    <div className='w-full h-full px-8 py:14 md:px-14 md:py-20'>
        <div className='w-full flex flex-col md:flex-row items-center justify-between'>
            <div className='md:pl-20'>
                <h1 className='text-3xl md:text-5xl text-black font-bold leading-snug'>Download our <br /> Mobile apps</h1>
                <div className='border border-black w-16 mt-4 font-extrabold'></div>
                <p className='text-[#7D7987] text-base md:text-[1.3125rem] mt-8'>
                Our dedicated patient engagement app and <br /> web portal allow you to access information <br /> instantaneously (no tedeous form, long calls, <br /> or administrative hassle) and securely
                </p>
                <button className='bg-white border border-[#458FF6] py-3 px-12 font-bold text-[#458FF6] rounded-full mt-8'>
                    Download
                </button>
            </div>

            <div className='mt-10 md:mt-0'>
                <img src={Load} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Download