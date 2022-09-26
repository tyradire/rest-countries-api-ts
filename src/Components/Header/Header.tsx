import React from 'react'
import { Link } from 'react-router-dom';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import './Header.scss';

export const Header = () => {
  return (
    <div className='header'>
      <nav className='header__container'>
        <Link to='/rest-countries-api-ts/' className='header__title'>
          <h1>Where in the world?</h1>
        </Link>
        <ThemeSwitcher />
      </nav>
    </div>
  )
}