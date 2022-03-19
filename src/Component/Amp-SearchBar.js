import './SearchBar.css'
import SearchIcon from '@mui/icons-material/Search';
// import { useState } from 'react';
import {useDispatch} from "react-redux";
import {updateUrl} from '../actions/index';

export const config = { amp: true }

export default function AmpSearchBar() {
  const dispatch = useDispatch();
  let newSearch;
  const Search = () =>{
    newSearch = document.getElementById("search-input").value;
    dispatch(updateUrl(newSearch));
  }

  return (
    <div className='search-bar'>
    <input id='search-input' className='search-bar-input' >   
    </input>
    <SearchIcon className='search-icon' onClick={() => Search()}></SearchIcon> 
    </div>
  )
}
