import Container from '../sections/Container';
import FullLightSphere from '../Images/FullLightSphere.png';
import SolidSphere from '../Images/FullSolidSphere.png';
import Mailbox from '../Images/Mailbox.png';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <>
      <div id='Contact' className='relative overflow-hidden bg-black h-MobileContactBGImage h-full lg:h-full pt-12 pb-12 md:pt-0 md:pb-0 z-10 border border-DarkerGreen'>
        {/* <div>
          <div className='hidden lg:block z-0 '>
            <img
              className='absolute w-[12rem] left-[-6rem] bottom-[24rem] md:w-1/3 md:left-[-4rem] md:bottom-1/2 '
              src={FullLightSphere}
              alt=''
            />
            <img
              className='absolute lg:w-1/3 lg:right-[-4rem] lg:bottom-[-14rem]'
              src={SolidSphere}
              alt=''
            />
          </div>
        </div> */}

        <Container resolution>
          <div className='flex flex-col justify-center h-full lg:h-screen'>
            <h1 className='hidden md:block z-40 text-LightGreen font-semibold text-4xl md:text-5xl md:pl-[10%]'>
              Contact Me.
            </h1>
            <div className=''>
              <div className='flex justify-center'>
                <div className='z-50 bg-black md:border-2 border-DarkerGreen w-full py-8 md:py-0'>
                  <div className='flex flex-col md:flex-row justify-evenly items-center h-full '>
                    <div className='text-white flex-inital'>
                      <img
                        className='object-scale-down w-40 md:w-48 pb-6 md:pb-0 md:pt-8 sm:pl-0 sm:pt-0 sm:w-full'
                        src={Mailbox}
                        alt=''
                      />
                    </div>
                    <div className='text-white flex-inital'>
                      <div className='font-semibold text-2xl text-LightGreen pt-4 sm:pt-12'>
                        <div className='md:mt-4 md:mb-2'>Let's Talk. </div>
                        <div className='mb-8 md:mb-2'>Enter your project Details.</div>
                        <ContactForm />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Contact;