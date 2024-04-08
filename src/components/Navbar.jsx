import React from 'react'
import Logo from '../assets/svg/logo.svg';

const links = [
    {
      id: 1,
      url: "/#home",
      text: "Home",
    },
    {
      id: 2,
      url: "/#find",
      text: "Find a Doctor",
    },
    {
      id: 3,
      url: "/#apps",
      text: "Apps",
    },
    {
        id: 4,
        url: "/#testimonials",
        text: "Testimonials",
      },
      {
        id: 5,
        url: "/#about",
        text: "About Us",
      },
  ];

const Navbar = () => {
  return (
    <div className='w-full h-full px-8 py-6 md:px-14 md:py-8'>
        <div className='flex items-center justify-between'>
            <a href="/">
                <img src={Logo} alt="" />
            </a>

            <div className="hidden lg:flex items-center gap-5 lg:gap-[3rem]">
                {links.map((links) => (
                    <a href={links.url} key={links.id} className="nav-item text-[#1F1534] text-[1.125rem]">
                    {links.text}
                    </a>
                ))}
          </div>
        </div>
    </div>
  )
}

export default Navbar