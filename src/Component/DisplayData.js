import React from 'react';
import Axios from 'axios';
import { useState, useEffect } from 'react';
import AmpCard from './Amp-Card';
import Card from './Card';
import './DisplayData.css'
import {useSelector} from "react-redux";

export default function DisplayData({speed}) {
    const [list, setList] = useState({});
    const myState = useSelector((state) => state.changeTheUrl )
    let url = myState;
    // console.log(url);
      useEffect(() => {
        Axios.get(url).then((response) => {
          setList(response.data);
        });
      }, [url]);

    if(JSON.stringify(list)==="{}"){
      return(
        <h1>Data Loading</h1>
      )
    }
    else{
      const {data:{results}} = list;
      if(speed>=60){
        return (
          <div className='sheet'>
           {
              results.map(item => <Card hName= {item.name} img_link={item.thumbnail}/>)
            }
          </div>
        )
      }
      else{
        return (
          <div className='sheet'>
           {
              results.map(item => <AmpCard hName= {item.name} img_link={item.thumbnail}/>)
            }
          </div>
        )
      }
    }
}