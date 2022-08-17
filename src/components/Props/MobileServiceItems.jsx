import { useEffect, useState } from 'react';
import * as Style from '../Styles/AccordionStyle';
import PropTypes from 'prop-types';

const MobileServiceItems = (props) => {
  let indexPlus;

  const indexCount = (index) => {
    indexPlus = index + 1;
    return indexPlus;
  };

  let background_image = '';
  if (props.index === 0) {
    background_image = 'bg-WebsiteDesign';
  } else if (props.index === 1) {
    background_image = 'bg-WebsiteDevelopment';
  } else if (props.index === 2) {
    background_image = 'bg-PersonalizedRequests';
  } else {
    background_image = 'bg-Others';
  }

  return (
    <div className='max-w-8xl mx-auto'>
      <div className='flex flex-col '>
        <div
          className={`bg-cover bg-center flex-initial w-full h-52 
              ${background_image}`}
        >
          <div className='flex pt-4'>
            <div className='h-16 md:h-20 w-1 bg-blue-600 rounded-full ml-6 mr-2' />
            <div className='font-semibold text-2xl text-white '>
              <button
                onClick={() => props.setActive(props.index)}
                className={props.active === props.index ? Style.on : Style.off}
                aria-expanded={props.active === props.index ? 'true' : 'false'}
                aria-controls={'select-' + indexCount(props.index)}
                aria-disabled={props.active === props.index ? 'true' : 'false'}
              >
                <span className=''>{props.title}</span>
              </button>
            </div>
          </div>
          <div className='flex justify-end '>
            <div className='pr-12 font-semibold text-white'> ^</div>
          </div>
        </div>
        <div
          className={`box-content w-[28rem] h-0 text-justify text-opacity-0 transform duration-700 ease-out overflow-hidden
            ${
              props.active === props.index
                ? 'bg-blue-900 bg-opacity-30 pt-4 pb-40 px-6 text-opacity-100 text-white'
                : ' h-0 pointer-events-none'
            }
          `}
        >
          <div>
            <div className='pb-2'>{props.paragraph}</div>
            <div>{props.paragraph2}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

MobileServiceItems.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

export default MobileServiceItems;

// hover:flex-auto

{
  /* <div className='max-w-full mx-auto'>
      <div
        className='flex justify-between px-8 py-2 bg-yellow-100'
        onClick={() => setIsOpen(!isOpen)}
      >
        <h1>Title</h1>
        <div className=''>{isOpen ? '-' : '+'}</div>
      </div>
     {isOpen && <div className='text-white'>
        <p>Paragraph</p>
      </div>}
    </div> */
}

{
  /* <div className=''>
<div className=''>
  <div className='bg-purple-500 bg-cover bg-center w-full h-32 border-2'>
    <div
      className='flex mt-4 text-white font-semibold'
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className='h-16 md:h-20 w-1 bg-blue-600 rounded-full ml-6 mr-2 ' />
      <div className=''>{props.title}</div>
    </div>
  </div>
  {isOpen && <div className=''>{props.paragraph}</div>}
</div>
</div> */
}
