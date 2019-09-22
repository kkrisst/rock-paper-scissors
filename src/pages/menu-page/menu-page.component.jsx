import React from 'react';
import { Link } from 'react-router-dom';

import './menu-page.styles.scss';

const MenuPage = () => {

  return (
    <div className='menu-page'>
      <div className='title'>Rock, Paper, Scissors</div>
      <div className='game-modes'>
        <Link className='button' to='/cpu'>Player VS CPU</Link>
        <Link className='button' to='/player'>Player VS Player</Link>
      </div>
    </div>
  )
};

export default MenuPage;