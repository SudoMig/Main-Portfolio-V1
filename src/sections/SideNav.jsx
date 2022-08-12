import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

const SideNav = () => {
  const NavItems = [
    { name: 'About' },
    { name: 'Services' },
    { name: 'Process' },
    { name: 'Hire Me' },
  ];

  const NavBarOpen = 'z-10 absolute right-0 bg-black w-1/2 h-full';

  const [isOpen, setIsOpen] = useState(false);
  const NavBarState = () => setIsOpen(!isOpen);

  return (
    <div>
      <div>
        <div className=''>
          <GiHamburgerMenu
            onClick={NavBarState}
            className='z-50 absolute right-10 top-10 text-white w-10 h-10'
            toggle={isOpen}
            toggled={setIsOpen}
          />
        </div>
        <div className={isOpen ? NavBarOpen : 'hidden'}>
          <div className='flex flex-col items-center text-center h-screen text-white'>
            <div className='pt-24'>
              {NavItems.map((item) => {
                return <p className='py-4 font-semibold text-xl' key={item.name}>{item.name} </p>;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
