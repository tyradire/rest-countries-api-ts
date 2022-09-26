import React, { useState } from 'react'
import { CountriesList } from '../../Components/CountriesList/CountriesList';
import FilterContainer from '../../ui/FilterContainer/FilterContainer';
import './Home.scss';

const Home = () => {

  const [step, setStep] = useState(8);

  return (
    <div className='home'>
      <FilterContainer />
      <CountriesList step={step} setStep={setStep} />
    </div>
  )
}

export default Home