import { useContext } from 'react';
import { AccordionContext } from '../AccordionWrapper';
import Container from '../../sections/Container';
import PropTypes from 'prop-types';
import * as Style from '../Styles/AccordionStyle';

const AccordionItem = (props) => {
  const { active, setActive } = useContext(AccordionContext);
  let indexPlus;

  const indexCount = (index) => {
    indexPlus = index + 1;
    return indexPlus;
  };

  const eventHandler = (e, index) => {
    e.preventDefault();
    setActive(index);
  };

  return (
    <div>
      <Container>
        <div className='flex flex-col justify-center'>
          <div className='relative mb-4'>
            <div className='absolute left-[-2rem] top-4 h-28 w-[0.4rem] rounded-lg'>
              <div
                className={` absolute w-[0.4rem] h-0 bg-blue-100 z-0
            ${
              active === props.index
                ? '!bg-PaleGreen !h-full h-1 rounded-lg transform duration-700 ease-out z-10 '
                : '!h-10 w-[0.4rem] rounded-lg z-10 '
            }`}
              ></div>
            </div>
          </div>
          {/*  Progress Overview Content  */}

          <div className='font-bold text-lg text-white mb-4 z-10'>
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
          <div className=''>
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
  );
};

AccordionItem.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  src: PropTypes.node.isRequired,
};

export default AccordionItem;
