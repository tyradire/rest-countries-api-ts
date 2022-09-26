export const BASE_URL = 'https://restcountries.com/v2/';

export const MAIN_ROUTE = '/';
export const COUNTRIES_API = BASE_URL + 'all?fields=name,capital,flags,population,region,alpha3Code';
export const COUNTRY_API = BASE_URL + 'alpha/'
export const COUNTRY_BY_CODE = BASE_URL + 'alpha?codes='