import React from 'react'
import "./write.css"
import moldova from "../assets/moldova.jpg"

export default function Write() {
  return (
    <div className='write'>
    <img className='writeImg' src={moldova} alt=""/>
      <form className='writeForm'>
        <div className='writeFormGroup'>
            <label htmlFor="fileInput">
                <i className="writeIcon fa-solid fa-folder-plus"></i>
            </label>
            <input type="file" id="fileInput" style= {{ display: "none"}}/>
            <input className='writeInput' type="text" placeholder='Title' autoFocus={true}/> 
        </div>
        <div className='writeFormGroup'>
            <textarea className='writeInput writeText' placeholder='Tell your story...' type="text"></textarea>
        </div>
        <button className='writeSubmit'>Publish</button>
      </form>
    </div>
  )
}
