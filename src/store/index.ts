import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { countriesReducer } from './reducers/countriesReducer';
import { countryReducer } from './reducers/countryReducer';
import { combineReducers } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

export const rootReducer = combineReducers({
  countries: countriesReducer,
  country: countryReducer
})


export type RootState = ReturnType<typeof rootReducer>
export const useTypedSelector: TypedUseSelectorHook<RootState>  = useSelector

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))