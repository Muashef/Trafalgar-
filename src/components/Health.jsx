import React from 'react'
import Hlth from '../assets/svg/health.svg';

const Health = () => {
  return (
    <div className='w-full h-full px-14 py-12'>
        <div className='w-full flex items-center justify-between'>
            <div className=''>
                <img src={Hlth} alt="" />
            </div>
            <div className=''>
                <h1 className='text-5xl text-black font-bold leading-snug'>Leading healthcare <br /> providers</h1>
                <div className='border-2 border-black w-16 mt-4 font-extrabold'></div>
                <p className='text-[#7D7987] text-[1.3125rem] mt-8'>
                    Trafalgar provides progressive, and affordable <br />
                    healthcare, accessible on mobile and online <br/> for everyone
                </p>
                <button className='bg-white border border-[#458FF6] py-3 px-12 font-bold text-[#458FF6] rounded-full mt-8'>
                    Learn More
                </button>
            </div>

        </div>
    </div>
  )
}

export default Health