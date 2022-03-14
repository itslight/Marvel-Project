import React from 'react'
import Axios from 'axios';
import { useState, useEffect } from 'react';

export default function Api() {
    const [list, setList] = useState({});
      
    useEffect(() => {
      Axios.get('https://gateway.marvel.com/v1/public/characters?ts=1&apikey=888a87cb0d5d769126acbf2610ef4b25&hash=325d678a7a04b90ae9fabfe46efcbddc&limit=30').then((response) => {
        setList(response.data);
      });
    }, []);
//   nameStartsWith=
//   let x = list.data.results[0].name;
function Api_search(name) {
      
    useEffect(() => {
      Axios.get(`https://gateway.marvel.com/v1/public/characters?ts=1&apikey=888a87cb0d5d769126acbf2610ef4b25&hash=325d678a7a04b90ae9fabfe46efcbddc&nameStartsWith={name}`).then((response) => {
        setList(response.data);
      });
    }, []);
}
  return (
    <div>
        {
        //   list.map((val,i)=>{
        //     return (
                <React.Fragment>
                {/* {x} */}
                {console.log(list) }
                </React.Fragment>
                            //   )
        //   })
        }
    </div>
    // map(data => <li>{list.data.results.name}</li>)
  )
}