import { useState } from 'react';
import { Link } from 'react-scroll';
import Data from './Data/ProcessData';
import ProcessImages from './Props/ProcessImages';
import AccordionWrapper from './AccordionWrapper';
import AccordionItem from './Props/AccordionItem';
import MobileAccordionItem from './Props/MobileAccordionItem';
import Container from '../sections/Container';
import SideNav from '../sections/SideNav';
import Resume from '../Files/Miguel_Louis_-_Junior_Web_Developer_Green_compressed.pdf';

function AboutsUs() {
  const [image, setImage] = useState(0);

  const changeImage = (currentImage) => {
    setImage(currentImage);
  };

  return (
    <div id='AboutUs'>
      <div className='block lg:hidden '>
        <SideNav />
      </div>
      <div className='bg-black radiantBG pt-40 md:pt-40 w-full bodyContent'>
        <Container>
          <div className='flex flex-col lg:flex-row lg:justify-evenly items-center px-4'>
            <div className='box-content md:w-[40rem]'>
              <div className='font-semibold text-LightGreen text-center md:text-left text-3xl'>
                Who am I ?
              </div>
              <div className='text-center md:text-left'>
                <p className='py-8 sm:py-4 text-blue-100 text-lg font-semibold'>
                  I&apos;m Miguel Louis, an autodicated website developer with
                  an avid passion for ReactJS and CSS frameworks. The outset of
                  my coding journey began with wanting a career that I enjoyed
                  and that brought challenges. I loved the idea of having my own
                  coding environment and the freedom to express creativity. Now,
                  I'm continuously seeking opportunities to broaden my
                  experience and improve my skill set.
                </p>
                <div className='text-LightGreen font-semibold text-center md:text-left text-xl mb-2'>
                  Why did I choose the self-taught path?
                </div>
                <p className='text-blue-100 text-lg font-semibold'>
                  Good question! I'm glad you asked. While school is an
                  excellent tool, I wanted to challenge and prove myself that I
                  could learn and accomplish my goals on my own. This path gave
                  me the flexibility to focus on the material of interest at my
                  own pace. Having a deep value for interpersonal growth, I knew
                  there would be considerable opportunity for self-improvement
                  through the various challenges ahead. But if you'd asked me to
                  do it again, I most certainly would not.
                </p>
              </div>
              <div className='flex justify-evenly mt-10 text-white text-lg text-white font-base font-semibold'>
                <button className='hvr-rectangle-out h-11 w-28 '>
                  <Link
                    to='Contact'
                    smooth={true}
                    duration={1000}
                    className='whitespace-nowrap cursor-pointer'
                  >
                    Hire Me
                  </Link>
                </button>
                <button className=' hvr-rectangle-in h-11 w-28 '>
                  <a
                    href={Resume}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='whitespace-nowrap '
                  >
                    Resume
                  </a>
                </button>
              </div>
            </div>
            <div>
              <img
                className='mt-8 md:mt-0 object-scale-down w-full w-72 md:w-[26rem]'
                src={require('../Images/Memoji.png')}
              />
            </div>
          </div>
          <div
            id='ProcessOverview'
            className='flex justify-center mt-12 mb-20 sm:mt-36 sm:mb-40 font-semibold text-3xl text-LightGreen sm:text-white '
          >
            Process Overview
          </div>
          <div className='hidden lg:block'>
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
          <div className='block lg:hidden'>
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
