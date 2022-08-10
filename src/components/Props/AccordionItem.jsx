import React, { useContext } from 'react';
import Container from '../../sections/Container';
import PropTypes from 'prop-types';
import { AccordionContext } from '../AccordionWrapper';
import * as Style from '../Styles/AccordionStyle';
import '../Styles/Accordion.css';

const AccordionItem = (props) => {
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
    <div>
      <div>
        <div>
          {/* Content Bar */}
          <Container>
            <div className='relative'>
              <div
                className={`absolute left-[-2rem] top-0 w-[0.2rem] rounded-full transition-all duration-500 
          ${active === props.index ? Style.ActiveBar : Style.InactiveBar}`}
              ></div>
            </div>
            {/*  Progress Overview Content  */}
            <div className=''>
              <div className='font-bold text-lg text-white box-content w-52 h-20'>
                <button
                  onClick={(e) => eventHandler(e, props.index)}
                  className={
                    active === props.index ? Style.Activate : Style.Inactive
                  }
                  aria-expanded={active === props.index ? 'true' : 'false'}
                  aria-controls={'select-' + indexCount(props.index)}
                  aria-disabled={active === props.index ? 'true' : 'false'}
                >
                  <span>{props.title}</span>
                </button>
              </div>
              <div className='text-white font-medium'>
                <div
                  id={'select-' + indexCount(props.index)}
                  className={
                    active === props.index ? Style.PanelOpen : Style.PanelClose
                  }
                >
                  {props.description}
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

AccordionItem.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  src: PropTypes.node.isRequired,
};

export default AccordionItem;