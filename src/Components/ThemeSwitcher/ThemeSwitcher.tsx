import React from 'react'
import { useTheme } from '../../hooks/use-theme';
import './ThemeSwitcher.scss';
import moon from '../../assets/moon.svg';
import sun from '../../assets/sun.svg';

const ThemeSwitcher = () => {

  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }

  return (
    <button className='theme-switcher' onClick={() => toggleTheme()}>
      { theme === 'light' ?
      <>
        <img src={moon} alt='toggle theme button' />
        <p>Dark Mode</p>
      </> : 
      <>
        <img src={sun} alt='toggle theme button' />
        <p>Light Mode</p>
      </>
      }
    </button>
  )
}

export default ThemeSwitcher