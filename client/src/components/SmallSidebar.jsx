import React from 'react';
import { FaTimes } from 'react-icons/fa';
import Wrapper from '../assets/wrappers/SmallSidebar';
import { useAppContext } from '../context/appContext';
import Logo from './Logo';
import Navlinks from './Navlinks';

const SmallSidebar = () => {
  const { showSidebar, toggleSidebar } = useAppContext();
  return (
    <Wrapper>
      <div
        className={
          showSidebar ? 'sidebar-container show-sidebar' : 'sidebar-container'
        }
      >
        <div className='content'>
          <button className='close-btn' onClick={toggleSidebar}>
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          <Navlinks toggleSidebar={toggleSidebar} />
        </div>
      </div>
    </Wrapper>
  );
};

export default SmallSidebar;
