import { useEffect, useState } from 'react';
import '../Styles/WorkFlow.css';

const WorkFlowItems = (props) => {
  // return (
  // <div className=''>
  //   <div className='js-show-on-scroll flex  h-32'>
  //     <div className='flex flex-col-2 grow space-x-6'>
  //     <div className='w-1/4 h-full bg-red-600' />
  //     <div className='w-96 text-white flex justify-start items-center z-10 '>
  //       Hello This is some random dummny text. Why don't you go to Africa for
  //       lunch and paris for dinner? Strange huh
  //     </div>
  //     </div>
  //   </div>
  //   {/* absolute w-[40rem] top-1/3 left-1/4 text-white  z-10 */}

  // </div>
  // );

  let BackgroundImage = '';

  if (props.id === 0) {
    BackgroundImage = 'bg-WorkFlowClient bg-cover bg-center saturate-150 z-10 ';
  } else if (props.id === 1) {
    BackgroundImage = 'bg-WorkFlowWireFrame bg-cover bg-center saturate-200';
  } else if (props.id === 2) {
    BackgroundImage = 'bg-Design bg-cover bg-center saturate-200';
  } else if (props.id === 3) {
    BackgroundImage = 'bg-WorkFlowDevelopment bg-cover bg-center saturate-200';
  } else {
    BackgroundImage = 'bg-WorkFlowHandOff bg-cover bg-center saturate-200';
  }

  return (
    <div className='flex flex-col md:flex-row md:pb-4'>
       <p className='pr-4 pb-2 md:pb-0 text-xl text-gray-200 font-bold'>
          {props.num}
        </p>
      <div className='js-show-on-scroll flex md:h-40'>
        <div className='flex'>
          <div className='flex'>
          {/* flex justify-center items-center h-full text-white  */}
            <div
              id='workFlowIcon'
              className={` flex justify-center items-center h-full text-white transition-all duration-700 ease-out w-full box-content w-32 ${BackgroundImage}`}
            >
              {props.icon}
            </div>
          </div>
          <div className=' w-[46rem] pl-4 text-white flex justify-start items-center z-10 '>
            Hello This is some random dummny text. Why don't you go to Africa
            for lunch and paris for dinner? Strange huh
          </div>
        </div>
      </div>
      {/* absolute w-[40rem] top-1/3 left-1/4 text-white  z-10 */}
    </div>

    // <div className='flex flex-col md:flex-row md:pb-4'>
    //   <p className='pr-4 pb-2 md:pb-0 text-xl text-gray-200 font-bold'>
    //     {props.num}
    //   </p>
    //   <div className='js-show-on-scroll flex h-full'>
    //     <div className='flex flex-col-2 space-x-6'>
    //       <div className='grow'>
    //         <div
    //           className={` + ${BackgroundImage} `
    //           }
    //         >
    //           <div className='flex justify-center items-center h-full w-full text-white '>
    //             {props.icon}
    //           </div>
    //         </div>
    //       </div>
    //       <div className=' text-white'>
    //         <div className=' '>
    //           <p className=' '>
    //             {props.title}
    //           </p>
    //           <p className=' '>
    //             {props.description}
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default WorkFlowItems;

//   const scrollElements = document.querySelectorAll('.js-scroll');

//   scrollElements.forEach((el) => {
//     el.getElementsByClassName.opacity = 0;
//   });

//   const elementInView = (el, offset = 0) => {
//     const elementTop = el.getBoundingClientRect().top;
//     console.log(el.getBoundingClientRect().top)

//     return (
//       elementTop <=
//       ((window.innerHeight || document.documentElmenent.clientHeight)- offset)
//     );
//   };

//   const displayScrollElement = (element) => {
//     element.classList.add('scrolled');
//   };

//   const hideScrollElement = (element) => {
//     element.classList.remove('scrolled');
//   };

//   const handleScrollAnimation = () => {
//     scrollElements.forEach((el) => {
//       if (elementInView(el, 100)) {
//         displayScrollElement(el);
//       } else {
//         hideScrollElement(el);
//       }
//     });
//   };

//   //initialize throttleTimer as false
// let throttleTimer = false;

// const throttle = (callback, time) => {
//     //don't run the function while throttle timer is true
//     if (throttleTimer) return;

//     //first set throttle timer to true so the function doesn't run
//     throttleTimer = true;

//     setTimeout(() => {
//         //call the callback function in the setTimeout and set the throttle timer to false after the indicated time has passed
//         callback();
//         throttleTimer = false;
//     }, time);
// }

//   window.addEventListener('scroll', () => {
//    throttle(handleScrollAnimation, 250)
//   })

// OLD CODE

// let BackgroundImage = '';

//     if (props.id === 0) {
//       BackgroundImage =
//         'bg-WorkFlowClient bg-cover bg-center w-4/6 md:h-40 md:w-0 saturate-150';
//     } else if (props.id === 1) {
//       BackgroundImage =
//         'bg-WorkFlowWireFrame bg-cover bg-center w-4/6 md:h-40 md:w-0 saturate-200';
//     } else if (props.id === 2) {
//       BackgroundImage =
//         'bg-Design bg-cover bg-center w-4/6 md:h-40 md:w-0 saturate-200';
//     } else if (props.id === 3) {
//       BackgroundImage =
//         'bg-WorkFlowDevelopment bg-cover bg-center w-4/6 md:h-40 md:w-0 saturate-200';
//     } else {
//       BackgroundImage =
//         'bg-WorkFlowHandOff bg-cover bg-center w-4/6 md:h-40 md:w-0 saturate-200';
//     }

//     return (
//       <div className='flex flex-col md:flex-row md:pb-4'>
//         <p className='pr-4 pb-2 md:pb-0 text-xl text-gray-200 font-bold'>
//           {props.num}
//         </p>
//         <div className=''>
//           <div className='flex group border-2 md:border-0 md:hover:border-2 border-gray-800 bg-black md:bg-transparent hover:bg-black text-white py-2 px-2 rounded-md flex-auto hover:w-full flex-auto   hover:grow-[2]'>
//             <div
//               className={
//                 BackgroundImage +
//                 ' flex-auto group-hover:md:w-3/12  transition-all duration-700 hover:grow-[2]'
//               }
//             >
//               <div className='flex justify-center items-center h-full'>
//                 {props.icon}
//               </div>
//             </div>
//             <div className='flex '>
//               <div className='flex flex-col justify-center px-4 '>
//                 <p className='font-bold text-PrimaryBlue text-2xl py-1 '>
//                   {props.title}
//                 </p>
//                 <p className='text-sm md:text-base py-2 md:py-1 '>
//                   {props.description}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
