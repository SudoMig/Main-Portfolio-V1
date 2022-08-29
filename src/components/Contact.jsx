import Container from '../sections/Container';
import LightSphere from '../Images/LightSphere.png';
import FullLightSphere from '../Images/FullLightSphere.png';
import SolidSphere from '../Images/FullSolidSphere.png';
import HalfSolidSphere from '../Images/HalfSolidSphere.png';
import Mailbox from '../Images/Mailbox.png';
import ContactForm from '../ContactForm';

const Contact = () => {
  return (
    <>
      <div className='relative overflow-hidden bg-black h-MobileContactBGImage lg:h-full'>
        <div className=''>
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
        </div>

        {/* Mobile */}

        <Container resolution>
          <div className='flex flex-col justify-center h-screen'>
            <h1 className='hidden md:block z-50 text-blue-600 font-semibold text-4xl md:text-5xl pl-6 md:pl-12'>
              Contact Me.
            </h1>
            <div className=''>
              <div className='flex justify-center'>
                <div className='z-50 bg-black md:border-2 border-blue-600 w-full py-8 md:py-0'>
                  <div className='flex flex-col md:flex-row justify-evenly items-center h-full '>
                    <div className='text-white flex-inital'>
                      <img
                        className='object-scale-down w-40 md:w-48 pb-6 md:pb-0 md:pt-8 sm:pl-0 sm:pt-0 sm:w-full'
                        src={Mailbox}
                        alt=''
                      />
                    </div>
                    <div className='text-white flex-inital'>
                      <div className='font-semibold text-base sm:text-2xl text-white pt-4 sm:pt-12'>
                        <div className='md:mt-4 md:mb-2'>Let's Talk. </div>
                        <div className='mb-1 md:mb-0'>Enter your project Details.</div>
                        <ContactForm />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>

        {/* Website */}
        {/* <div className='hidden md:block'>
          <Container narrow5xl>
            <div className='flex flex-col justify-center h-screen'>
              <h1 className='z-50 text-blue-600 font-semibold md:text-5xl pl-24'>
                Contact Me.
              </h1>
              <div className=''>
                <div className='flex justify-center'>
                  <div className='z-50 bg-black border-2 border-blue-600 w-full h-[30rem]'>
                    <div className='flex md:justify-evenly items-center h-full '>
                      <div className='text-white flex-inital'>
                        <img
                          className='object-scale-down w-32 pt-8 sm:pl-0 sm:pt-0 sm:w-full'
                          src={Mailbox}
                          alt=''
                        />
                      </div>
                      <div className='text-white flex-inital'>
                        <div className='font-semibold md:text-lg sm:text-2xl text-white pt-4 sm:pt-12'>
                          <div className='md:mt-4 md:mb-2'>Let's Talk. </div>
                          <div className=''>Enter your project Details.</div>
                          <ContactForm/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div> */}
      </div>
    </>
  );
};

export default Contact;

// <div className='bg-black h-MobileContactBGImage sm:h-ContactBGImage'>
// <div className='relative overflow-hidden'>
//   <Container >
//     <div className=''>
//       <div className='z-0'>
//         <img
//           className='absolute w-[20rem] sm:w-[40rem] bottom-[18rem] left-[-2rem]'
//           src={LightSphere}
//           alt=''
//         />
//         <img
//           className='absolute sm:w-[45rem] sm:right-[-6rem] sm:top-[24rem] right-[-14rem] top-[31rem]'
//           src={SolidSphere}
//           alt=''
//         />
//       </div>
//     </div>
//     <div className='relative'>
//       <div className='absolute left-[32rem] top-[15.2rem] font-semibold text-4xl text-PrimaryBlue'>
//         Contact Me.
//       </div>
//     </div>
//     {/* //Contact Me Box */}
//     <div className='flex items-center justify-center min-h-screen'>
//       <div className='flex items-center w-full sm:w-3/6 z-50'>
//         <div
//           className='flex justify-center bg-black border-2 border-blue-500 w-full h-[28.5rem] sm:h-[28rem] text-white'
//         >
//           <div className='sm:grid grid-cols-2 gap-1'>
//             <div className='grid place-content-center '>
//               <img
//                 className='object-scale-down w-32 pt-8 sm:pl-0 sm:pt-0 sm:w-full'
//                 src={Mailbox}
//                 alt=''
//               />
//             </div>
//             <div>
//               <div className='font-semibold text-lg sm:text-2xl text-white pt-4 sm:pt-12'>
//                 <div className='mt-4 mb-2'>Let's Talk. </div>
//                 <div className=''>Enter your project Details.</div>
//               </div>
//               {/* Contact Form */}
//               <form
//                 action='https://public.herotofu.com/v1/94655b00-cb2d-11ec-a557-034a17e2da28'
//                 method='POST'
//                 className='grid grid-cols-1 gap-y-6 pt-10 pb-24 text-sm sm:text-base'
//               >
//                 <div className='flex space-x-2 py-2'>
//                   <div>
//                     <label htmlFor='full-name' className='sr-only'>
//                       Name
//                     </label>
//                     <input
//                       type='text'
//                       name='full-name'
//                       id='full-name'
//                       autoComplete='name'
//                       className='border-b-2 border-white bg-black outline-none focus:border-b-2 focus:border-blue-600 transition-all duration-200'
//                       placeholder='Name'
//                     />
//                   </div>
//                   <div>
//                     <label htmlFor='email' className='sr-only'>
//                       Email
//                     </label>
//                     <input
//                       id='email'
//                       name='email'
//                       type='email'
//                       autoComplete='email'
//                       className='border-b-2 border-white bg-black outline-none focus:border-b-2 focus:border-blue-600 transition-all duration-200'
//                       placeholder='Email'
//                     />
//                   </div>
//                 </div>
//                 <div>
//                   <label htmlFor='message' className='sr-only'>
//                     Message
//                   </label>
//                   <textarea
//                     id='message'
//                     name='message'
//                     rows={1}
//                     className='border-b-2 border-white w-full bg-black outline-none focus:border-b-2 focus:border-blue-600 transition-all duration-200'
//                     placeholder='Message'
//                     defaultValue={''}
//                   />
//                 </div>
//                 <div>
//                   <button
//                     type='submit'
//                     className='w-full bg-blue-600 font-semibold rounded-sm px-12 py-2 hover:bg-PrimaryBlue'
//                   >
//                     Submit
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </Container>
// </div>
// </div>
