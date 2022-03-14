import React from 'react'
import './SearchBar.css'
import SearchIcon from '@mui/icons-material/Search';
import Api from './Api';

export default function SearchBar() {
  return (
    <div className='search-bar'>
    <input className='search-bar-input' >   
    </input>
    <SearchIcon className='search-icon'></SearchIcon> 
    </div>
  )
}
