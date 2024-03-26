import React from 'react'
import LogoOne from '../assets/svg/logo_one.svg';

const Footer = () => {
  return (
    <div className='w-full h-full px-14 py-8 bg-prey mt-14'>
        <div className='grid grid-cols-1 lg:grid-cols-2 '>
            <div>
                <img src={LogoOne} alt="" />
                <p className='text-white text-lg font-light mt-3'>
                Trafalgar provides progressive, and affordable <br /> healthcare, accessible on mobile and online <br/> for everyone
                </p>
                <p className='text-white text-base font-light mt-8'>©Trafalgar PTY LTD 2020. All rights reserved</p>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3'>
                <div className=''>
                    <h1 className='text-white text-xl font-bold mb-3'>Company</h1>
                    <p className='text-white text-lg font-light mb-3'>About</p>
                    <p className='text-white text-lg font-light mb-3'>Testimonials</p>
                    <p className='text-white text-lg font-light mb-3'>Find a doctor</p>
                    <p className='text-white text-lg font-light mb-3'>Apps</p>
                </div>
                <div>
                <   h1 className='text-white text-xl font-bold mb-3'>Region</h1>
                    <p className='text-white text-lg font-light mb-3'>Indonesia</p>
                    <p className='text-white text-lg font-light mb-3'>Singapore</p>
                    <p className='text-white text-lg font-light mb-3'>Hongkong</p>
                    <p className='text-white text-lg font-light mb-3'>Canada</p>
                </div>
                <div>
                    <h1 className='text-white text-xl font-bold mb-3'>Help</h1>
                    <p className='text-white text-lg font-light mb-3'>Help Center</p>
                    <p className='text-white text-lg font-light mb-3'>Contact Support</p>
                    <p className='text-white text-lg font-light mb-3'>Instructions</p>
                    <p className='text-white text-lg font-light mb-3'>How it works</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Footer