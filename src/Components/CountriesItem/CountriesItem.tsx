import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { ICountry } from '../../App';
import './CountriesItem.scss';

interface CountriesItemProps {
  country: ICountry
}

const CountriesItem = ({ country }: CountriesItemProps) => {

  const navigate = useNavigate();

  return (
    <div className='countries-item'>
      <img src={country.flags.png} alt='flag' className='countries-item__image' onClick={() => navigate(country.alpha3Code)}/>
      <Link className='countries-item__title' to={(country.alpha3Code)}><p>{country.name}</p></Link>
      <p className='countries-item__info'>Population: {country.population.toLocaleString('en')}</p>
      <p className='countries-item__info'>Region: {country.region}</p>
      <p className='countries-item__info'>Capital: {country.capital}</p>
    </div>
  )
}

export default CountriesItem