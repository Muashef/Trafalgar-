import React from 'react'
import Search from '../assets/svg/search.svg';
import Pharm from '../assets/svg/pharm.svg';
import Care from '../assets/svg/care.svg';
import Consult from '../assets/svg/consult.svg';
import Info from '../assets/svg/info.svg';
import Track from '../assets/svg/track.svg';

const Services = () => {
  return (
    <div className='w-full h-full px-14 py-20'>
        <div className='text-center'>
            <h1 className='text-4xl font-bold'>Our Services</h1>
            <div className='border-2 border-black w-16 mt-6 font-extrabold mx-auto'></div>
            <p className='text-[#7D7987] text-lg font-light mt-6'>We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment <br /> with our highly qualified doctors you can consult with us which type of service is suitable for your health</p>
        </div>
        <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-center mt-10 gap-6'>
            <div className='bg-white border border-white rounded-2xl shadow-lg p-6 w-[17rem] lg:w-[21.875rem]'>
                <img src={Search} alt="search-icon" />
                <h2 className='text-black font-bold text-2xl mt-4'>Search Doctor</h2>
                <p className='text-[#7D7987] font-light text-base mt-4'>Choose your doctor from thousands of <br />specialist, general, and trusted <br /> hospitals</p>
            </div>
            <div className='bg-white border border-white rounded-2xl shadow-lg p-6 w-[17rem] lg:w-[21.875rem]'>
                <img src={Pharm} alt="search-icon" />
                <h2 className='text-black font-bold text-2xl mt-4'>Online Pharmacy</h2>
                <p className='text-[#7D7987] font-light text-base mt-4'>Buy  your medicines with our <br /> mobile application with a simple <br />delivery system</p>
            </div>
            <div className='bg-white border border-white rounded-2xl shadow-lg p-6 w-[17rem] lg:w-[21.875rem]'>
                <img src={Consult} alt="search-icon" />
                <h2 className='text-black font-bold text-2xl mt-4'>Consultation</h2>
                <p className='text-[#7D7987] font-light text-base mt-4'>Free consultation with our trusted <br /> doctors and get the best <br /> recomendations</p>
            </div>
            <div className='bg-white border border-white rounded-2xl shadow-lg p-6 w-[17rem] lg:w-[21.875rem]'>
                <img src={Info} alt="search-icon" />
                <h2 className='text-black font-bold text-2xl mt-4'>Details Info</h2>
                <p className='text-[#7D7987] font-light text-base mt-4'>Free consultation with our trusted <br />doctors and get the best <br /> recomendations</p>
            </div>
            <div className='bg-white border border-white rounded-2xl shadow-lg p-6 w-[17rem] lg:w-[21.875rem]'>
                <img src={Care} alt="search-icon" />
                <h2 className='text-black font-bold text-2xl mt-4'>Emergency Care</h2>
                <p className='text-[#7D7987] font-light text-base mt-4'>You can get 24/7 urgent care for <br /> yourself or your children and your <br />  lovely family</p>
            </div>
            <div className='bg-white border border-white rounded-2xl shadow-lg p-6 w-[17rem] lg:w-[21.875rem]'>
                <img src={Track} alt="search-icon" />
                <h2 className='text-black font-bold text-2xl mt-4'>Tracking</h2>
                <p className='text-[#7D7987] font-light text-base mt-4'>Track and save your medical history and health data </p>
            </div>
        </div>
        <div className='flex items-center justify-center'>
            <button className='bg-white border border-[#458FF6] py-3 px-12 font-bold text-[#458FF6] rounded-full mt-8'>
                Learn More
            </button>
        </div>
    </div>
  )
}

export default Services