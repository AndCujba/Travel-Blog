import React from 'react'
import "./header.css";
import plane from '../assets/planePhoto.jpg';

export default function Header() {
  return (
    <div className='header'>
      <div className='headerTitles'>
        <span className='headerTitleSm'>Travel</span>
        <span className='headerTitleLg'>Blog</span>
      </div>
      <img className='headerImg' src={plane} alt="plane-img" />
    </div>
  )
}
