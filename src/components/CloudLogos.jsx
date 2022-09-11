import { ReactComponent as ReactLogo } from '../Images/clouds/react.svg';
import { ReactComponent as CSS3Logo } from '../Images/clouds/css3.svg';
import { ReactComponent as JSLogo } from '../Images/clouds/javascript.svg';
import { ReactComponent as FigmaLogo } from '../Images/clouds/figma.svg';
import { ReactComponent as NetlifyLogo } from '../Images/clouds/netlify.svg';
import { ReactComponent as TailwindLogo } from '../Images/clouds/tailwindcss.svg';
import Container from '../sections/Container';

const CloudLogos = () => {
  return (
    <div className='bg-black pt-28 pb-28 md:pt-28 md:pb-36 lg:pt-4   '>
      <Container>
        <h1
          className='text-xl text-center text-white font-semibold capitalize pb-4 md:pb-6 sm:pb-12'
         
        >
          Technologies used to design and build websites
        </h1>
        <div className='grid grid-cols-3 md:grid-cols-6 lg:grid-cols-6 pt-10 md:pt-16'>
          <a
            href='https://reactjs.org/'
            className='group flex justify-center md:col-span-2 lg:col-span-1 py-6'
            target='_blank'
            rel='noreferrer'
           
          >
            <ReactLogo
              className='h-12 md:h-14 sm:h-16 fill-gray-400 group-hover:fill-[#00d8ff] group-hover:-translate-y-3 transition ease-out duration-300'
              alt='React'
            />
          </a>

          <a
            href='https://developer.mozilla.org/en-US/docs/Web/CSS'
            className='group flex justify-center md:col-span-2 lg:col-span-1 py-6'
            target='_blank'
            rel='noreferrer'
            
          >
            <CSS3Logo
              className='h-12 md:h-14 sm:h-16 fill-gray-400 group-hover:fill-[#21759b] group-hover:-translate-y-3 transition ease-out duration-300'
              alt='CSS'
            />
          </a>

          <a
            href='https://www.javascript.com/'
            className='group flex justify-center md:col-span-2 lg:col-span-1 py-6'
            target='_blank'
            rel='noreferrer'
            
          >
            <JSLogo
              className='h-12 md:h-14 sm:h-16 fill-gray-400 group-hover:fill-[#F7DF1E] group-hover:-translate-y-3 transition ease-out duration-300'
              alt='JavaScript'
            />
          </a>

          <a
            href='https://www.figma.com/'
            className='group flex justify-center md:col-span-2 lg:col-span-1 py-6'
            target='_blank'
            rel='noreferrer'
            
          >
            <FigmaLogo
              className='h-12 md:h-14 sm:h-16 fill-gray-400 group-hover:fill-[#FF7262] group-hover:-translate-y-3 transition ease-out duration-300'
              alt='Figma'
            />
          </a>

          <a
            href='https://www.netlify.com/'
            className='group flex justify-center md:col-span-2 lg:col-span-1 py-6'
            target='_blank'
            rel='noreferrer'
            
          >
            <NetlifyLogo
              className='h-12 md:h-14 sm:h-16 fill-gray-400 group-hover:fill-[#20c6b7] group-hover:-translate-y-3 transition ease-out duration-300'
              alt='Netlify'
            />
          </a>

          <a
            href='https://tailwindcss.com/'
            className='group col-span-1 flex justify-center md:col-span-2 lg:col-span-1 py-6'
            target='_blank'
            rel='noreferrer'
           
          >
            <TailwindLogo
              className='h-12 md:h-14 sm:h-16 fill-gray-400 group-hover:fill-[#06B6D4] group-hover:-translate-y-3 transition ease-out duration-300'
              alt='Tailwind'
            />
          </a>
        </div>
      </Container>
    </div>
  );
};

export default CloudLogos;
