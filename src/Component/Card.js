import React from 'react'
import './Card.css'

export default function Card(props) {
    let url = props.img_link.path;
    let ext = props.img_link.extension;
    let img_url = url+"."+ext;
    // let comic = props.comic;
    // console.log(img_url);

  return (
    <div className='Card-Container'>
        <div className='card-image'>
          <img alt="hero-img" src= {img_url}></img>
        </div>
        <div className='card-divider'/>
        <div className='Card-detail'>
            <div className='Card-name'>
                <p>{props.hName}</p>
            </div>
            <div className='Card-desc'>
            </div>
        </div>

    </div>
  )
}
