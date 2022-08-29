import { useState } from 'react';
import Container from '../sections/Container';
import ServiceItems from './Props/ServiceItems';
import ServicesData from './Data/ServicesData';
import MobileServiceItems from './Props/MobileServiceItems';

const Services = () => {
  const [active, setActive] = useState(0);

  return (
    <div id='Services' className='bg-black radiantServicesBG w-full'>
      <Container>
        <div className='text-white'>
          <div className='flex justify-center pt-24 md:pt-20 sm:pt-56 mb-4 md:mb-8 font-semibold text-3xl text-PrimaryBlue'>
            CreativeFloww Services
          </div>
          <div className='flex justify-center text-center'>
            <div className='box-content w-[35rem]'>
              I&apos;m the sole proprietor of Creativefloww. A design and
              develpoment company that build quality and afforable websites.
            </div>
          </div>
        </div>
      </Container>
      {/* Moblie */}
      <div className='block lg:hidden'>
        <div className='pt-24 md:pt-24 sm:pt-40'>
          {ServicesData.map((item, index) => (
            <MobileServiceItems
              key={index}
              index={index}
              title={item.title}
              paragraph={item.paragraph}
              paragraph2={item.paragraph2}
              active={active}
              setActive={setActive}
            />
          ))}
          ;
        </div>
      </div>
      {/* Desktop */}
      <div className='hidden lg:block'>
        <div className='pt-24 md:pt-24 sm:pt-40'>
          <ServiceItems />
        </div>
      </div>
    </div>
  );
};

export default Services;

// {ServicesData.map((item, index) => (
//   <ServiceItems
//     key={index}
//     index={index}
//     title={item.title}
//     paragraph={item.paragraph}
//     paragraph2={item.paragraph2}
//   />
// ))}
