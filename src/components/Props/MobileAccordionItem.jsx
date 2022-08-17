import React, { useContext } from 'react';
import Container from '../../sections/Container';
import PropTypes from 'prop-types';
import { AccordionContext } from '../AccordionWrapper';
import * as Style from '../Styles/AccordionStyle';
import '../Styles/Accordion.css';
import ProcessImages from './ProcessImages';

const MobileAccordionItem = (props) => {
  let indexPlus;

  const indexCount = (index) => {
    indexPlus = index + 1;
    return indexPlus;
  };

  const { active, setActive } = useContext(AccordionContext);

  const eventHandler = (e, index) => {
    e.preventDefault();
    setActive(index);
  };

  // BAR
  // create a state for the bar to make empty bar and full bar
  // Make a function that calls the current state and sets Style.Active or Style.Inactive
  //  Make Inactive plain white
  //  Make Active transition and translate from left to right ( Use absolute, transition-x or width)

  return (
    <div className=''>
      <div>
        <div>
          <Container>
            {/*  Process Overview Content  */}
            <div className='box-content w-full h-full pb-4 '>
              <div className='font-bold text-xl text-white '>
                <button
                  onClick={(e) => eventHandler(e, props.index)}
                  className={
                    active === props.index ? Style.activate : Style.inactive
                  }
                  aria-expanded={active === props.index ? 'true' : 'false'}
                  aria-controls={'select-' + indexCount(props.index)}
                  aria-disabled={active === props.index ? 'true' : 'false'}
                >
                  <span>{props.title}</span>
                </button>
              </div>
              <div className='text-white font-medium pt-2'>
                <div
                  id={'select-' + indexCount(props.index)}
                  className={
                    active === props.index ? Style.panelOpen : Style.panelClose
                  }
                >
                  {props.description}
                </div>
                <div className='relative mb-6'>
                  <div className='absolute bg-blue-100 w-full h-1 rounded-lg z-0'>
                    <div className={` absolute w-0
                    ${
                      active === props.index
                        ? 'absolute bg-blue-600 !w-full h-1 rounded-lg transform duration-700 ease-out z-10'
                        : null
                    }`}></div>
                  </div>
                </div>
              </div>
              <div className='flex items-center'>
                <img
                  className={
                    active === props.index ? Style.activeImg : Style.inactiveImg
                  }
                  src={props.src}
                  alt=''
                />
              </div>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

MobileAccordionItem.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  src: PropTypes.node.isRequired,
};

export default MobileAccordionItem;


{/* <div
                    className={`absolute w-[22rem] rounded-full z-0 transform translate-x-0 
                    ${
                      active === props.index
                        ? ''
                        : 'absolute w-[22rem] rounded-full z-0 '
                    }`}
                  ></div> */}