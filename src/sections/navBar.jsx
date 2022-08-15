import React from 'react';
import SideNav from './SideNav';
import '../index.css';

function navBar(props) {
  return (
    <>
      <div>
        <div className='hidden md:block'>
          <nav className='z-50 absolute w-full border-b border-white '>
            <div className='container flex flex-wrap justify-between items-center mx-auto p-10 font-semibold md:text-base text-sm text-white'>
              {/* Logo */}
              <a href='/' className=''>
                Logo
              </a>
              <div className='space-x-6 md:space-x-14 lg:space-x-32'>
                {/* About */}
                <a
                  href='/'
                  className='Desktop-hvr-underline-from-left '
                >
                  About
                </a>
                {/* Process */}
                <a href='/' className='Desktop-hvr-underline-from-left'>
                  Process
                </a>
                {/* Services */}
                <a href='/' className='Desktop-hvr-underline-from-left'>
                  Services
                </a>
                {/* Hire Me */}
                <a href='/' className='Desktop-hvr-underline-from-left'>
                  Hire Me
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default navBar;
