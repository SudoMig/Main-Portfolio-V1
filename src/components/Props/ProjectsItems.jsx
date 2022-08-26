import React from 'react';

const ProjectsItems = (props) => {
  return (
    <div className='flex flex-auto h-3/5 px-8'>
      <div className='bg-white bg-opacity-30   border rounded-lg w-full'>
        <div className='w-full'>
          <img
            className='hover:scale-125   hover:  border-2'
            src={props.src}
            alt=''
          />
          <div className='text-white'>{props.title}</div>
          <div>{props.content}</div>
          <button className='px-4 py-4 bg-blue-500'> hello</button>
        </div>
      </div>
    </div>
  );
};

export default ProjectsItems;
