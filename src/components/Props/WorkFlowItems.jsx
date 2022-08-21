import { useEffect, useState } from 'react';
import '../Styles/WorkFlow.css';

const WorkFlowItems = (props) => {
 

  const scrollElements = document.querySelectorAll('.js-scroll width');

  scrollElements.forEach((el) => {
    el.getElementsByClassName.opacity = 0;
    el.getElementsByClassName.width = '0%';
  });

  const elementInView = (el, offset = 0) => {
    const elementTop = el.getBoundingClientRect().top;

    return (
      elementTop <=
      ((window.innerHeight || document.documentElmenent.clientHeight)- offset)
    );
  };

  const displayScrollElement = (element) => {
    element.classList.add('scrolled');
  };

  const hideScrollElement = (element) => {
    element.classList.remove('scrolled');
  };

  const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
      if (elementInView(el, 100)) {
        displayScrollElement(el);
      } else {
        hideScrollElement(el);
      }
    });
  };

  window.addEventListener('scroll', () => {
    handleScrollAnimation()
  })

  return (
    <div>
      <div className='bg-red-500 w-full h-32 flex js-scroll'>
        <div className='bg-black w-32 h-full border-2 width'></div>
        <div className='text-white flex justify-center items-center'>
          Hello This is some random dummny text. Why don't you go to Africa for
          lunch and paris for dinner? Strange huh
        </div>
      </div>
    </div>
  );



  //   let BackgroundImage = '';

  //   if (props.id === 0) {
  //     BackgroundImage =
  //       'bg-WorkFlowClient bg-cover bg-center w-4/6 md:h-40 md:w-0 saturate-150';
  //   } else if (props.id === 1) {
  //     BackgroundImage =
  //       'bg-WorkFlowWireFrame bg-cover bg-center w-4/6 md:h-40 md:w-0 saturate-200';
  //   } else if (props.id === 2) {
  //     BackgroundImage =
  //       'bg-Design bg-cover bg-center w-4/6 md:h-40 md:w-0 saturate-200';
  //   } else if (props.id === 3) {
  //     BackgroundImage =
  //       'bg-WorkFlowDevelopment bg-cover bg-center w-4/6 md:h-40 md:w-0 saturate-200';
  //   } else {
  //     BackgroundImage =
  //       'bg-WorkFlowHandOff bg-cover bg-center w-4/6 md:h-40 md:w-0 saturate-200';
  //   }

  //   return (
  //     <div className='flex flex-col md:flex-row md:pb-4'>
  //       <p className='pr-4 pb-2 md:pb-0 text-xl text-gray-200 font-bold'>
  //         {props.num}
  //       </p>
  //       <div className=''>
  //         <div className='flex group border-2 md:border-0 md:hover:border-2 border-gray-800 bg-black md:bg-transparent hover:bg-black text-white py-2 px-2 rounded-md flex-auto hover:w-full flex-auto   hover:grow-[2]'>
  //           <div
  //             className={
  //               BackgroundImage +
  //               ' flex-auto group-hover:md:w-3/12  transition-all duration-700 hover:grow-[2]'
  //             }
  //           >
  //             <div className='flex justify-center items-center h-full'>
  //               {props.icon}
  //             </div>
  //           </div>
  //           <div className='flex '>
  //             <div className='flex flex-col justify-center px-4 '>
  //               <p className='font-bold text-PrimaryBlue text-2xl py-1 '>
  //                 {props.title}
  //               </p>
  //               <p className='text-sm md:text-base py-2 md:py-1 '>
  //                 {props.description}
  //               </p>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   );
};

export default WorkFlowItems;

// const callback = function (entries) {
//   entries.forEach((entry) => {
//     console.log(entry);

//     if (entry.isIntersecting) {
//       entry.target.classList.add('animate-fade-side');
//     } else {
//       entry.target.classList.remove('animate-fade-side');
//     }
//   });
// };

// const observer = new IntersectionObserver(callback);

// const targets = document.querySelectorAll('.js-show-on-scroll');
// targets.forEach(function (target) {
//   target.classList.add('opacity-0');
//   observer.observe(target);
// });
