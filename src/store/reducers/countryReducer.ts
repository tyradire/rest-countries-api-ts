import { ICountryPage } from '../../pages/Country/Country'

interface CountryState {
  country: ICountryPage | {},
  isLoading: boolean
}

const initialState: CountryState = {
  country: {},
  isLoading: true
}

export const countryReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'LOAD_COUNTRY':
      return {isLoading: true, country: {}}
    case 'LOAD_COUNTRY_SUCCESS':
      return {isLoading: false, country: action.payload}
    case 'LOAD_COUNTRY_ERROR':
      return {isLoading: false, country: {}}
    default: 
      return state
  }
}
