import React, { useContext } from 'react';
import Container from '../../sections/Container';
import PropTypes from 'prop-types';
import { AccordionContext } from '../AccordionWrapper';
import * as Style from '../Styles/AccordionStyle';
import '../Styles/Accordion.css';
import ProcessImages from '../ProcessImages';

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
                  <div
                    className={`w-[22rem] rounded-full transition-all duration-500 
                    ${
                      active === props.index
                        ? Style.activeBar
                        : Style.inactiveBar
                    }`}
                  ></div>
                </div>
              </div>
              {/* Content Bar */}

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
