import React from 'react'
import SideBar from '../components/SideBar'
import "./settings.css"
import avatar from "../assets/avatar.jpg"

export default function Settings() {
  return (
    <div className='settings'>
      <div className='settingsWrapper'>
        <div className='settingsTitle'>
            <span className='settingsUpdateTitle'>Update Your Account</span>
            <span className='settingsDeleteTitle'>Delete Your Account <i class="fa-solid fa-trash"></i></span>
        </div>
        <form className='settingsForm'>
            <label>Profile Picture</label>
                <div className='settingsPP'>
                    <img className='settingsImg ' src={avatar} alt="" />
                    <label htmlFor="fileInput">
                        <i className="settingPPIcon fa-regular fa-circle-user"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display:"none"}}/>
                </div>
                <label>Username</label>
                <input type="text" placeholder='Andi' />
                <label>Email</label>
                <input type="email" placeholder='andi@gmail.com' />
                <label>Password</label>
                <input type="password" placeholder='********' />
                <button className='settingsSubmit'>Update</button>
        </form>
      </div>
      <SideBar />
    </div>
  )
}
