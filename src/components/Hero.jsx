import React from 'react'
import Traf from '../assets/svg/traf_hero.svg';

const Hero = () => {
  return (
    <div className='w-full h-full px-14 py-8'>
        <div className='w-full flex items-center justify-between'>
            <div className=''>
                <h1 className='text-5xl text-black font-bold'>Virtual healthcare <br /> for you</h1>
                <p className='text-[#7D7987] text-[1.3125rem] mt-8'>
                    Trafalgar provides progressive, and affordable <br />
                    healthcare, accessible on mobile and online <br/> for everyone
                </p>
                <button className='bg-[#458FF6] py-4 px-8 font-bold text-white rounded-full mt-8'>
                    Consult today
                </button>
            </div>
            
            <div className=''>
                <img src={Traf} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Hero