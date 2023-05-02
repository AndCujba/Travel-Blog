import React from 'react'
import "./sideBar.css"
import avatar from '../assets/avatar.jpg';

export default function SideBar() {
  return (
    <div className='sidebar'>
      <div className='sidebarItem'>
        <h2 className='sidebarTitle'>ABOUT ME</h2>
        <img src={avatar} alt="avatar-img"/>
        <p>
          There are many variations of passages of 
          Lorem Ipsum available, but the majority have 
          suffered alteration in
        </p>
       </div>
       <div className='sidebarItem'>
        <h2 className='sidebarTitle'>CATEGORIES</h2>
          <ul className='sidebarList'>
            <li className='sidebarListItem'>Iceland</li>
            <li className='sidebarListItem'>Netherland</li>
            <li className='sidebarListItem'>Moldova</li>
            <li className='sidebarListItem'>USA</li>
            <li className='sidebarListItem'>Ukraine</li>
            <li className='sidebarListItem'>Thailand</li>
          </ul>
       </div>
       <div className='sidebarItem'>
        <h2 className='sidebarTitle'>FOLLOW US</h2>
        <div className='sidebarSocial'>
          <i className="sidebarIcon fa-brands fa-twitter"></i>
          <i className="sidebarIcon fa-brands fa-square-facebook"></i>
          <i className="sidebarIcon fa-brands fa-instagram"></i>
        </div>
        </div>
    </div>
  )
}
