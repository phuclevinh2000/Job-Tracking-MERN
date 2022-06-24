import React from 'react';
import Wrapper from '../assets/wrappers/BigSidebar';
import Logo from './Logo';
import { useAppContext } from '../context/appContext';
import Navlinks from './Navlinks';

const BigSidebar = () => {
  const { showSidebar } = useAppContext();
  return (
    <Wrapper>
      <div
        className={
          showSidebar ? 'sidebar-container ' : 'sidebar-container show-sidebar'
        }
      >
        <div className='content'>
          <header>
            <Logo />
          </header>
          <Navlinks />
        </div>
      </div>
    </Wrapper>
  );
};

export default BigSidebar;
