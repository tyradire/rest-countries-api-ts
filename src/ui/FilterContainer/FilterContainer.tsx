import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import CustomFilter from '../CustomFilter/CustomFilter';
import './FilterContainer.scss';

const FilterContainer = () => {

  const dispatch = useDispatch();

  const [searchInput, setSearchInput] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('All World');

  const filterBySearch = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch({type: 'FILTER_COUNTRIES', payload: {input: searchInput, region: selectedRegion}})
  }

  const selectRegion = (e: any) => {
    setSelectedRegion(e.target.textContent);
    dispatch({type: 'FILTER_COUNTRIES', payload: {input: searchInput, region: e.target.textContent}})
  }

  const removeFilter = () => {
    setSearchInput('');
    dispatch({type: 'REFRESH_COUNTRIES'})
  }

  return (
    <div className='filter-container'>
      <form 
        className='filter-container__form'
        onSubmit={(e) => filterBySearch(e)}
      >
        <input 
          type='text' 
          className='filter-container__search' 
          placeholder="Search for a country..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <input 
          type='button'
          className='filter-container__button-reset'
          value='X'
          disabled={!searchInput}
          onClick={() => {removeFilter()}}
        />
      </form>
      <CustomFilter selectRegion={selectRegion} />
    </div>
  )
}

export default FilterContainer