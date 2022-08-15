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
      <div className='flex'>
        <div
          className={`w-full h-full bg-cover bg-center transition-all duration-700 grow-[2]
                    ${background_image}`}
        >
          <div className='flex pt-4'>
            <div className='h-16 md:h-20 w-1 bg-blue-600 rounded-full ml-6 mr-2' />
            <div className='box-content w-56 font-semibold text-2xl text-white '>
              <button
                onClick={() => props.setActive(props.index)}
                className={props.active === props.index ? Style.on : Style.off}
                aria-expanded={props.active === props.index ? 'true' : 'false'}
                aria-controls={'select-' + indexCount(props.index)}
                aria-disabled={props.active === props.index ? 'true' : 'false'}
              >
                <span>{props.title}</span>
              </button>
            </div>
          </div>
          <div className=''>
            <div className='box-content w-96 text-white ml-10 mb-4'>
              <div
                id={'select-' + indexCount(props.index)}
                className={
                  props.active === props.index
                    ? Style.openPanel
                    : Style.closePanel
                }
              >
                <div className='mb-4'>{props.paragraph}</div>
                <div>{props.paragraph2}</div>
              </div>
            </div>
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
