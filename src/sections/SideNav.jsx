import React, { useEffect, useState } from 'react';
import { Divide as Hamburger } from 'hamburger-react'
import '../index.css';

const SideNav = () => {
  const NavItems = [
    { name: 'About', href: '' },
    { name: 'Services' },
    { name: 'Process' },
    { name: 'Hire Me' },
  ];

  const NavBarOpen =
    'z-10 absolute right-0 bg-black w-1/2 h-full transition-all translate-x-0 duration-1000 ease-in-out ';

  const NavBarClose = 'z-10 absolute right-0 transition-all duration-1000 translate-x-80 ease-out'
  
  
  const [isOpen, setIsOpen] = useState(false);
  const NavBarState = () => setIsOpen(!isOpen);

  const bodyContent = document.getElementsByClassName('bodyContent');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      bodyContent[0].style.filter = 'blur(5px)';
    } else {
      document.body.style.overflow = 'auto';
      bodyContent[0].style.filter = 'blur(0px)';
    }
  }, [isOpen]);

  return (
    <div>
      <div>
        <div className=''>
          <button className='z-50 absolute right-10 top-10 text-white '>
            <Hamburger toggled={isOpen} toggle={NavBarState}  className='w-10 h-10' />
          </button>
        </div>
        <div
          className={
            isOpen
              ? NavBarOpen
              : NavBarClose
          }
        >
          <div className='flex flex-col items-center text-center h-screen text-white'>
            <div className='pt-24'>
              {NavItems.map((item) => {
                return (
                  <p className='pt-6 pb-2 font-semibold text-xl hvr-underline-from-left' key={item.name}>
                    {item.name}{' '}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNav;