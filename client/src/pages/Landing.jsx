import React from 'react';
import main from '../assets/images/main.svg';
import { Link } from 'react-router-dom';

import Wrapper from '../assets/wrappers/LandingPage';
import { Logo } from '../components';

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>

      <div className='container page'>
        {/* Info */}
        <div className='info'>
          <h1>
            job <span>tracking</span> app
          </h1>

          <p>
            This is an application that you can track your job application
            status. Maybe after 1 year you can know which job you have applied
            for, how many interviews, decline as well as offers.
          </p>
          <Link to='/register' className='btn btn-hero'>
            Login/Register
          </Link>
        </div>
        {/* Image */}
        <img src={main} alt='job hunt' className='img main-img' />
      </div>
    </Wrapper>
  );
};

export default Landing;
