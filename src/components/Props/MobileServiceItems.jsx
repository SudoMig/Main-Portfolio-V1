import { useEffect, useState, useRef } from 'react';
import * as Style from '../Styles/AccordionStyle';
import PropTypes from 'prop-types';
import { RiArrowDownSLine } from 'react-icons/ri';
import { Rotate } from 'hamburger-react';

const MobileServiceItems = (props) => {
  let indexPlus;

  const indexCount = (index) => {
    indexPlus = index + 1;
    return indexPlus;
  };
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef(null);

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

  useEffect(() => {
    setIsOpen(true);
  }, [props.active]);

  useEffect(() => {}, [isOpen]);

  return (
    <div className='max-w-8xl mx-auto'>
      <div className='flex flex-col '>
        <div
          onClick={() => {
            props.setActive(props.index);
            setIsOpen(!isOpen);
          }}
          className={`relative bg-cover bg-center flex-initial w-full h-52 cursor-pointer md:cursor-auto	
              ${background_image}`}
        >
          <div className='flex pt-4'>
            <div className='h-16 md:h-20 w-1 bg-blue-600 rounded-full ml-6 mr-2' />
            <div className='font-semibold text-2xl text-white '>
              <button
                className={props.active === props.index ? Style.on : Style.off}
                aria-expanded={props.active === props.index ? 'true' : 'false'}
                aria-controls={'select-' + indexCount(props.index)}
                aria-disabled={props.active === props.index ? 'true' : 'false'}
              >
                <span className=''>{props.title}</span>
              </button>
            </div>
            <div className='absolute right-0 top-1/2'>
              <div className='font-semibold text-blue-100'>
                <RiArrowDownSLine
                  className={
                    props.active === props.index && isOpen
                      ? ' w-10 h-10 transition-all duration-700 ease-in-out'
                      : 'rotate-180 w-10 h-10 transition-all duration-700 ease-out'
                  }
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className={`w-full flex items-center px-8 text-justify text-base text-opacity-0 transition-all duration-700 ease-out overflow-hidden whitespace-normal	
            ${
              props.active === props.index && isOpen
                ? 'bg-blue-900 bg-opacity-30 pt-2 text-opacity-100 text-white ' + props.height
                : 'pointer-events-none h-0'
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
