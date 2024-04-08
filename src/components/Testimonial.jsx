import React from 'react'
import Pic from '../assets/svg/pic.svg';

const Testimonial = () => {
  return (
    <div className='w-full h-full px-14 py-20'>
        <div className='bg-prey rounded-2xl py-14'>
            <div className='text-center'>
                <h1 className='text-base md:text-4xl text-white font-bold'>What our customer are saying</h1>
                <div className='border-2 border-white w-16 mt-6 font-extrabold mx-auto'></div>
            </div>
            <div className='flex flex-col md:flex-row items-center gap-24 mt-14 md:px-48'>
                <div className='flex items-center gap-3'>
                    <img className='rounded-full' src={Pic} alt="" />
                    <div>
                        <h1 className='text-sm md:text-xl font-bold text-white'>Edward Newgate</h1>
                        <p className='text-sm md:text-lg text-white font-light'>Founder Circle</p>
                    </div>
                </div>

                <div>
                    <p className='text-white text-sm md:text-[1.1875rem] font-normal'>
                        “Our dedicated patient engagement app and <br /> web portal allow you to access information<br /> instantaneously (no tedeous form, long calls, <br /> or administrative hassle) and securely”
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonial