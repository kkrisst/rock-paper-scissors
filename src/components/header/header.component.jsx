import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './header.styles.scss';

const Header = () => {
  return (
    <div className='header'>
      <Link to='/'>
        <div className="icon">
          <FontAwesomeIcon icon="caret-left" size={'2x'}/>
        </div>
        <div className='menu-item'>Back to menu</div>
      </Link>
    </div>
  )
};

export default Header;