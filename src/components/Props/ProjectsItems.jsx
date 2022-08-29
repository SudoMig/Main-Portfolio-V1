import React from 'react';

const ProjectsItems = (props) => {
  return (
    <div className='flex h-3/5 px-10 pt-24'>
      <div className='rounded-lg w-full'>
        <div className='w-full transition-all duration-700 ease-in-out'>
          <img
        //   brightness-75 hover:grayscale-0 hover:brightness-100
            className='hover:shadow-lg hover:shadow-blue-500/30 hover:scale-125 rounded-lg border-t border-gray-800 transition-all duration-700 ease-in-out  '
            src={props.src}
            alt=''
          />
          <div className='py-14 px-4 rounded-b-md'>
            <div className='text-white text-xl font-semibold mb-2'>{props.title}</div>
            <div className='text-white'>{props.content}</div>
            <button className='bg-blue-700 text-slate-100 h-10 w-24 mt-4 font-semibold rounded-md cursor-default	 '>More Soon</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsItems;
