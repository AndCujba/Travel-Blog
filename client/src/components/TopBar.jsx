import React from 'react'
import "./topBar.css";
import avatar from '../assets/avatar.jpg';
import { Link } from 'react-router-dom';

export default function TopBar() {
  const user = false;
  return (
    <div className='top'>
      <div className='topLeft'>
        <a href="https://twitter.com/"><i className="topIcon fa-brands fa-twitter"></i></a>
        <a href="https://facebook.com/"><i className="topIcon fa-brands fa-square-facebook"></i></a>
        <a href="https://instagram.com"><i className="topIcon fa-brands fa-instagram"></i></a>
      </div>
      <div className='topCenter'>
        <ul className='topList'>
            <li className='topListItem'>
            <Link to="/" className='link'>HOME</Link>
            </li>
            <li className='topListItem'>
            <Link to="/about" className='link'>ABOUT</Link>
            </li>
            <li className='topListItem'>
            <Link to="/contact" className='link'>CONTACT</Link>
            </li>
            <li className='topListItem'>
            <Link to="/write" className='link'>WRITE</Link>
            </li>
            <li className='topListItem'>
            <Link to="/login" className='link'>{user && "LOGOUT"}</Link>
            </li>
        </ul>
      </div>
      <div className='topRight'>
      {
        user ? (
          <img className='topImg' src={avatar} alt="avatar-img"/>
          ) : (
            <ul className='topList'>
            <li className='topListItem'>
            <Link to="/login" className='link'>LOGIN</Link></li></ul>
            )}
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}


//rfc shortcut