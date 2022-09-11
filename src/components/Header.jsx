import React from 'react';
import video from '../Videos/video.mp4';
import bannerImage from '../Images/bannerImage.png';

function Header() {
  return (
    <>
      <div className='hidden lg:block'>
        <div className='relative flex items-center justify-center h-screen overflow-hidden '>
          <h1 className='relative z-30 font-semibold text-5xl sm:text-7xl text-white tracking-superWide'>
            Welcome
          </h1>
          <img
            className='absolute z-10 w-auto min-w-full max-w-none'
            src={bannerImage}
            alt=''
          />
          {/* VIDEO OPTION */}
          {/* <video
            loop
            autoPlay
            className='absolute z-10 w-auto min-w-full max-w-none'
          >
            <source src={video} type='video/mp4' />
            Your browser does not support the video tag.
          </video> */}
          <div
            data-aos='fade-right'
            data-aos-duration="900"
            className='z-40 absolute left-0 md:left-5 md:bottom-0 lg:bottom-10 lg:left-16 text-white'
          >
            <p className='sm:text-lg'>Web Designer & Developer</p>
            <p className='box-content h-12 w-64 font-semibold md:text-2xl sm:text-3xl sm:pt-2 sm:pb-14'>
              I Build And Bring Websites To Life.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
