import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './Components/Header/Header';
import Country from './pages/Country/Country';
import Home from './pages/Home/Home';
import './App.scss';

export interface ICountry {
  alpha3Code: string,
  capital: string,
  flags: {
    png: string,
    svg: string
  },
  independent: boolean,
  name: string,
  population: number,
  region: string
}

export const App = () => {

  return (
    <div className='app'>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/:code' element={<Country/>}/>
      </Routes>
    </div>
  )
}