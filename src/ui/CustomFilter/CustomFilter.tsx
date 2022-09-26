import React, { useState } from 'react'
import './CustomFilter.scss';

interface CustomFilterProps {
  selectRegion(e: any): void
}

const CustomFilter = ( { selectRegion }: CustomFilterProps) => {

  const [openCustomFilter, setOpenCustomFilter] = useState(false)

  const openFilter = () => {
    setOpenCustomFilter(!openCustomFilter);
  }

  const selectFilter = (e: any) => {
    selectRegion(e)
    openFilter();
  }

  return (
    <div className='custom-filter'>
      <div className='custom-filter__button' onClick={openFilter}>Filter by Region</div>
      { openCustomFilter &&
        <ul className='custom-filter__list'>
          <li className='custom-filter__item' value='Oceania' onClick={(e) => selectFilter(e)}>All World</li>
          <li className='custom-filter__item' value='Africa' onClick={(e) => selectFilter(e)}>Africa</li>
          <li className='custom-filter__item' value='America' onClick={(e) => selectFilter(e)}>Americas</li>
          <li className='custom-filter__item' value='Asia' onClick={(e) => selectFilter(e)}>Asia</li>
          <li className='custom-filter__item' value='Europe' onClick={(e) => selectFilter(e)}>Europe</li>
          <li className='custom-filter__item' value='Oceania' onClick={(e) => selectFilter(e)}>Oceania</li>
        </ul>
      }
    </div>
  )
}

export default CustomFilter