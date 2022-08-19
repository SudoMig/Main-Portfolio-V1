import React, { useState } from 'react';
import Data from './Data/ProcessData';
import ProcessImages from './Props/ProcessImages';
import AccordionWrapper from './AccordionWrapper';
import AccordionItem from './Props/AccordionItem';
import MobileAccordionItem from './Props/MobileAccordionItem';
import Container from '../sections/Container';
import './Styles/Accordion.css';
import SideNav from '../sections/SideNav';

function AboutsUs() {
  const [image, setImage] = useState(0);

  const changeImage = (currentImage) => {
    setImage(currentImage);
  };

  return (
    <div className=''>
      <div className='block md:hidden '>
        <SideNav />
      </div>
      <div className='bg-black radiantBG pt-40 md:pt-40 w-full bodyContent '>
        <Container>
          <div className='sm:flex sm:justify-evenly items-center px-4'>
            <div className='box-content sm:w-96'>
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
              <div className='flex justify-evenly mt-10 text-white text-lg text-white font-base'>
                <button className='btn px-6'>
                  <p className='whitespace-nowrap'>Resume</p>
                </button>
                <button className='btn-one px-6'>
                  <p className='whitespace-nowrap '>Hire Me!</p>
                </button>
              </div>
            </div>
            <div>
              <img
                className='mt-20 object-scale-down w-full sm:w-[28rem]'
                src={require('../Images/profilePicture.png')}
              />
            </div>
          </div>
          <div className='flex justify-center mt-24 mb-24 sm:mt-40 sm:mb-48 font-semibold text-3xl text-PrimaryBlue sm:text-white '>
            Process Overview
          </div>
          <div className='hidden md:block'>
            <div className='flex justify-evenly items-center '>
              <div className='w-[30rem]'>
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
