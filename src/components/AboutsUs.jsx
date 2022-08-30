import React, { useState } from 'react';
import Data from './Data/ProcessData';
import ProcessImages from './Props/ProcessImages';
import AccordionWrapper from './AccordionWrapper';
import AccordionItem from './Props/AccordionItem';
import MobileAccordionItem from './Props/MobileAccordionItem';
import Container from '../sections/Container';
import SideNav from '../sections/SideNav';
import {Link } from 'react-scroll'

function AboutsUs() {
  const [image, setImage] = useState(0);

  const changeImage = (currentImage) => {
    setImage(currentImage);
  };

  return (
    <div id='AboutUs' className=''>
      <div className='block md:hidden '>
        <SideNav />
      </div>
      <div className='bg-black radiantBG pt-40 md:pt-40 w-full bodyContent '>
        <Container>
          <div className='sm:flex sm:justify-evenly items-center px-4'>
            <div className='box-content sm:w-[38rem]'>
              <div className='font-semibold text-white text-center sm:text-left text-3xl'>
                I&apos;m An Autodicated Web Developer
              </div>
              <div className='text-center sm:text-justify'>
                <p className='py-8 sm:py-4 text-white'>
                  I&apos;m Miguel a web designer and developer with an avid
                  passion for reactjs. Recently started a website designing and
                  developement business. Ultrase päkäsk i naledes, poluss. Posk
                  rämint. Euk vapoktig i pask trepögon. Rekydok bir när nisk.
                  Erärat dos. Hoheten pretisa.
                </p>
                <p className='text-white'>
                  Posk rämint. Euk vapoktig i pask trepögon. Rekydok bir när
                  nisk. Erärat dos. Hoheten pretisa.
                </p>
              </div>
              <div className='flex justify-evenly mt-10 text-white text-lg text-white font-base font-semibold'>
                <button className='hvr-rectangle-out h-11 w-28 '>
                <Link to='Contact' smooth={true} duration={1000} className='whitespace-nowrap cursor-pointer'>
                  Hire Me
                </Link>
                </button>
                <button className=' hvr-rectangle-in h-11 w-28 '>
                  <Link to='' smooth={true} duration={1000} className='whitespace-nowrap '>
                  Resume
                  </Link>
                </button>
              </div>
            </div>
            <div>
              <img
                className='mt-20 object-scale-down w-full sm:w-[26rem] '
                src={require('../Images/Memoji.png')}
              />
            </div>
          </div>
          <div id='ProcessOverview' className='flex justify-center mt-24 mb-24 sm:mt-40 sm:mb-48 font-semibold text-3xl text-PrimaryBlue sm:text-white '>
            Process Overview
          </div>
          <div className='hidden md:block'>
            <div className='flex justify-evenly items-center '>
              <div className='w-1/3'>
                <ProcessImages image={image} />
              </div>
              <AccordionWrapper changeImage={changeImage}>
                {Data.map((item, index) => (
                  <AccordionItem
                    key={index}
                    index={index}
                    src={item.src}
                    title={item.title}
                    description={item.description}
                  />
                ))}
              </AccordionWrapper>
            </div>
          </div>
          <div className='block md:hidden'>
            <AccordionWrapper changeImage={changeImage}>
              {Data.map((item, index) => (
                <MobileAccordionItem
                  key={index}
                  index={index}
                  src={item.src}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </AccordionWrapper>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default AboutsUs;
