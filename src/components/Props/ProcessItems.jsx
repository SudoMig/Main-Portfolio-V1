import React, { useState, useContext } from 'react';
import { AccordionContext } from '../AccordionWrapper';


function ChangeImage(props) {
  const { active, setActive } = useContext(AccordionContext);

  const eventHandler = (e, index) => {
    e.preventDefault();
    setActive(index);
  };

  return (
    <div>
      {active === props.index ? <img className='w-96' src={props.src} /> : null}
    </div>
  );
}

export default ChangeImage;
