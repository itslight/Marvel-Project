import React from 'react';
import Axios from 'axios';
import { useState, useEffect } from 'react';
import Card from './Card';
import './Api.css'
import {useSelector} from "react-redux";

export default function Api() {
    const [list, setList] = useState({});
    const myState = useSelector((state) => state.changeTheUrl )
    let url = myState;
    console.log(url);
      useEffect(() => {
        Axios.get(url).then((response) => {
          setList(response.data);
        });
    console.log();
      }, [url]);

    if(JSON.stringify(list)==="{}"){
      return(
        <h1>Data Loading</h1>
      )
    }
    else{
      const {data:{results}} = list;
      return (
        <div className='sheet'>
         {
            results.map(item => <Card hName= {item.name} img_link={item.thumbnail} comic={item.comics}/>)
          }
        </div>
      )
    }
}