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
    BackgroundImage = 'bg-WorkFlowClient bg-cover bg-center saturate-150';
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
      <div className='js-show-on-scroll flex md:h-40 p-2'>
        <div className='flex'>
          <div className='flex'>
            <div
              id={'workFlowIcon-' + props.index}
              className={`flex justify-center items-center h-32 md:h-full text-white rounded-md ${BackgroundImage}`}
            >
              {props.icon}
            </div>
          </div>
          <div className='flex items-center w-80 md:w-[39rem] pl-4 '>
            <div className='flex flex-col'>
              <p className='text-blue-600 text-xl font-semibold pb-2'>
                {props.title}
              </p>
              <p className='box-content w-82 text-sm md:text-base text-white'>
                {props.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkFlowItems;
