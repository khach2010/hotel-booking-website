import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Search from './Search';
import { Button } from '@material-ui/core';
import './Banner.css';

function Banner() {
  const history = useHistory();
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className='banner'>
      <div className='banner__search'>
        {showSearch && <Search />}
        <Button
          onClick={() => setShowSearch(!showSearch)}
          className='banner__searchButton'
          variant='outlined'
        >
          {showSearch ? 'Hide' : 'Search Dates'}
        </Button>
      </div>
      <div className='banner__info'>
        <h1>The best All inclusive **** star Hotel</h1>
        <h5>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id
          voluptatem dolorem, neque ipsum saepe officia incidunt, provident
          dolor non
        </h5>
        <Button onClick={() => history.push('/search')} variant='outlined'>
          Explore near by
        </Button>
      </div>
    </div>
  );
}

export default Banner;
