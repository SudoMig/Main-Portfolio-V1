import React from 'react';

const ProjectsItems = (props) => {
  return (
    <div className='flex flex-auto h-3/5 px-10'>
      <div className='rounded-lg w-full'>
        <div className='w-full              transition-all duration-700 ease-in-out'>
          <img
        //   brightness-75 hover:grayscale-0 hover:brightness-100
            className='hover:shadow-lg hover:shadow-blue-500/30 hover:scale-125 rounded-lg border-t border-gray-800 transition-all duration-700 ease-in-out  '
            src={props.src}
            alt=''
          />
          <div className='py-14 px-4 rounded-b-md'>
            <div className='text-white text-lg font-semibold'>{props.title}</div>
            <div className='text-white'>{props.content}</div>
            <button className='h-10 w-24 bg-white rounded-md'>More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsItems;
