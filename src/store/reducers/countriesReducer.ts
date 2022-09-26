import { ICountry } from "../../App";

interface CountriesState {
  countries: ICountry[],
  filtredCountries: ICountry[]
}

const initialState: CountriesState = {
  countries: [],
  filtredCountries: []
}

export const countriesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'ADD_COUNTRIES':
      return {...state, countries: action.payload, filtredCountries: action.payload}
    case 'FILTER_COUNTRIES':
      return {...state, filtredCountries: state.countries.filter(elem => (elem.name.toLowerCase().includes(action.payload.input.toLowerCase())) 
        && (action.payload.region === 'All World' ? true : elem.region === action.payload.region))}
    case 'REFRESH_COUNTRIES':
      return {...state, filtredCountries: state.countries}
    default:
      return state;
  }
}
