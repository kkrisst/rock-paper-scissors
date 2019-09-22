import React from 'react';

import './menu-page.styles.scss';

const MenuPage = () => {

  return (
    <div className='menu-page'>
      <div className='title'>Rock, Paper, Scissors</div>
      <div className='game-modes'>
        <div className='button'>Player VS CPU</div>
        <div className='button'>Player VS Player</div>
      </div>
    </div>
  )
};

export default MenuPage;