import React from 'react'
import Disea from '../assets/svg/disea.svg';
import Herb from '../assets/svg/herb.svg';
import Nat from '../assets/svg/nat.svg';

const Article = () => {
  return (
    <div className='w-full h-full px-14 py-20'>
        <div className='text-center'>
            <h1 className='text-4xl font-bold'>Check out our latest article</h1>
            <div className='border-2 border-black w-16 mt-6 font-extrabold mx-auto'></div>
        </div>
        <div className='grid grid-cols lg:grid-cols-3 mt-20'>
            <div className='bg-white border shadow-lg w-[21.875rem] rounded-lg'>
                <div className=''>
                <img className='' src={Disea} alt="" />
                </div>
                
                <div className='p-8'>
                  <h1 className='text-xl text-black font-bold'>Disease detection, check up in the laboratory</h1>
                  <p className='text-[#7D7987] text-base font-light mt-3 mb-4'>In this case, the role of the health laboratory is very important to do a disease detection...</p>
                  <a className='text-[#4089ED] text-[1.0625rem] font-semibold' href="#">Read more</a>
                </div>
            </div>
            <div className='bg-white border shadow-lg w-[21.875rem] rounded-lg'>
                <div className=''>
                <img className='' src={Herb} alt="" />
                </div>
                
                <div className='p-8'>
                  <h1 className='text-xl text-black font-bold'>Herbal medicines that are safe for consumption</h1>
                  <p className='text-[#7D7987] text-base font-light mt-3 mb-4'>Herbal medicine is very widely used at this time because of its very good for your health...</p>
                  <a className='text-[#4089ED] text-[1.0625rem] font-semibold' href="#">Read more</a>
                </div>
            </div>
            <div className='bg-white border shadow-lg w-[21.875rem] rounded-xl'>
                <div className=''>
                <img className='' src={Nat} alt="" />
                </div>
                
                <div className='p-8'>
                  <h1 className='text-xl text-black font-bold'>Natural care for healthy facial skin</h1>
                  <p className='text-[#7D7987] text-base font-light mt-3 mb-4'>A healthy lifestyle should start from now and also for your skin health.There are some...</p>
                  <a className='text-[#4089ED] text-[1.0625rem] font-semibold' href="#">Read more</a>
                </div>
            </div>
        </div>
        <div className='flex items-center justify-center'>
            <button className='bg-white border border-[#458FF6] py-3 px-12 font-bold text-[#458FF6] rounded-full mt-8'>
                View all
            </button>
        </div>
    </div>
  )
}

export default Article