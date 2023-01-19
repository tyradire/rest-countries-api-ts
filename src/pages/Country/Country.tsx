import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import './Country.scss';
import defaultFlag from '../../assets/flag.svg';
import { COUNTRY_API, COUNTRY_BY_CODE } from '../../utils/constants';
import { useDispatch } from 'react-redux';
import { fetchCountry } from '../../store/action-creators/country';
import { useTypedSelector } from '../../store';

export interface ICountryPage {
  alpha3Code: string;
  borders: string[];
  capital: string;
  flag: string;
  name: string;
  nativeName: string;
  population: number;
  region: string;
  subregion: string;
  topLevelDomain: string[];
  currencies: {
    code: string;
    name: string;
    symbol: string;
  }[];
  languages: {
    name: string;
  }[];
}

interface IBorder {
  alpha3Code: string;
  name: string;
}

const Country = () => {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const {country, isLoading} = useTypedSelector(state => state.country)

  const {code} = useParams();
  const [countryData, setCountryData] = useState<ICountryPage>();
  const [borderCountries, setBorderCoutries] = useState<string[]>([]);
  const [newBorders, setNewBorders] = useState<IBorder[]>([]);

  useEffect(() => {
    axios.get<ICountryPage>(COUNTRY_API + code)
    .then(({data}) => {
      setCountryData(data);
      setBorderCoutries(data.borders);
      return data.borders ? axios.get<IBorder>(COUNTRY_BY_CODE + data.borders.join(',')) : {}
    })
    .then(({data}:any) => {
      if (!data) return;
      setNewBorders(data);
    })
    .catch(err => console.log(err))
  }, [code])

  useEffect(() => {
    dispatch(fetchCountry(code) as any)
  }, [code])

  return (
    <div className='country'>

      <button className='country__button-back' onClick={() => navigate(-1)}>Back</button>
      <div className='country__info-wrapper'>
        <img src={countryData?.flag || defaultFlag} alt='flag' className='country__image'/>
        { isLoading ? <div className='country__spinner'></div> :
          <div className='country__main-wrapper'>
          <h2 className='country__title'>{country.name}</h2>
          <div className='country__text-wrapper'>
            <p className='country__text'>Native Name: {country.nativeName}</p>
            <p className='country__text'>Population: {country.population.toLocaleString('en')}</p>
            <p className='country__text'>Region: {country.region}</p>
            <p className='country__text'>Sub Region: {country.subregion}</p>
            <p className='country__text'>Capital: {country.capital}</p>
            <p className='country__text'>Top Level Domain: {country.topLevelDomain}</p>
            <p className='country__text'>Currencies: {country.currencies ? country.currencies[0].name : 'Not Found'}</p>
            <p className='country__text'>Languages: {country.langString}</p>
          </div>
          <div className='country__border-countries'>{}
            <p className='country__text country__text_border'>Border Countries:</p>
            <ul className='border-countries__list'>
              { borderCountries ?
                newBorders.map((elem, index) => {
                  return <Link style={{ textDecoration: 'none' }} to={`../rest-countries-api-ts/${elem.alpha3Code}`}  key={index}><li className='border-countries__item'>{elem.name}</li></Link>
                })
                : <li className='border-countries__item'>Not Found</li>
              }
            </ul>
          </div>
        </div>}
      </div>  
    </div>
  )
}

export default Country