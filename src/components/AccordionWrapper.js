import React, { createContext, useState, useEffect } from 'react';

export const AccordionContext = createContext({
  active: 0,
  setActive: () => {},
});

const AccordionWrapper = (props) => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    props.changeImage(active);
  }, [active]);

  return (
    <AccordionContext.Provider
      value={{
        active,
        setActive,
      }}
    >
      <div className=''>
        <form>{props.children}</form>
      </div>
    </AccordionContext.Provider>
  );
};

export default AccordionWrapper;
