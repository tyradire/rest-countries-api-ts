import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { ICountry } from '../../App';
import { useTypedSelector } from '../../store';
import { fetchCountries } from '../../store/action-creators/countries';


import CountriesItem from '../CountriesItem/CountriesItem';
import './CountriesList.scss';

interface CountriesListProps {
  step: number,
  setStep(step: number): void
}

export const CountriesList = ({ step, setStep }: CountriesListProps) => {

  const dispatch = useDispatch();

  const filtredCountries: ICountry[] = useTypedSelector(state => state.countries.filtredCountries)

  useEffect(() => {
    dispatch(fetchCountries() as any)
  }, [])

  const addLines = () => {
    setStep(step + 8);
  }

  return (
    <div className='countries-list'>
      <div className='countries-list__wrapper'>
        {
          filtredCountries.slice(0, step).map((country, index) => {
            return <CountriesItem country={country} key={index}/>
          })
        }
      </div>
      {
        step < filtredCountries.length ? <button 
        className='countries-list__button-more'
        onClick={addLines}
        >More
      </button> : null
      }
    </div>
  )
}
