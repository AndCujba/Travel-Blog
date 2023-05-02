import React from 'react'
import "./singlePost.css"
import moldova from "../assets/moldova.jpg"

export default function SinglePost() {
  return (
    <div className='singlePost'>
      <div className='singlePostWrapper'>
        <img className='singlePostImg' src={moldova} alt="moldova-img" />
        <h1 className='singlePostTitle'>
            It is a long established fact that
            <div className='singlePostEdit'>
                <i className="singlePostIcon fa-solid fa-pencil"></i>
                <i className="singlePostIcon fa-solid fa-trash-can"></i>
            </div>
        </h1>
        <div className='singlePostInfo'>
            <span className='singlePostAuthor'>Author: <b>Andi</b></span>
            <span className='singlePostDate'>1 hour ago</span>
        </div>
        <p className='singlePostDesc'>
        It is a long established fact that a reader will be distracted 
        by the readable content of a page when looking at its layout. 
        The point of using Lorem Ipsum is that it has a more-or-less 
        normal distribution of letters, as opposed to using 'Content here, 
        content here', making it look like readable English. Many desktop 
        publishing packages and web page editors now use Lorem Ipsum as their 
        default model text, and a search for 'lorem ipsum' will uncover many 
        web sites still in their infancy. Various versions have evolved over 
        the years, sometimes by accident, sometimes on purpose (injected 
        humour and the like).It is a long established fact that a reader 
        will be distracted by the readable content of a page when looking 
        at its layout. The point of using Lorem Ipsum is that it has a 
        more-or-less normal distribution of letters, as opposed to using 
        'Content here, content here', making it look like readable English. 
        Many desktop publishing packages and web page editors now use Lorem 
        Ipsum as their default model text, and a search for 'lorem ipsum'
         will uncover many web sites still in their infancy. Various versions 
         have evolved over the years, sometimes by accident, 
         sometimes on purpose (injected humour and the like).It is a long 
         established fact that a reader will be distracted by the readable
          content of a page when looking at its layout. The point of using 
          Lorem Ipsum is that it has a more-or-less normal distribution of 
          letters, as opposed to using 'Content here, content here', making
           it look like readable English. Many desktop publishing package
           s and web page editors now use Lorem Ipsum as their default model 
           text, and a search for 'lorem ipsum' will uncover many web sites 
           still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected 
            humour and the like).(injected humour and the like).It is a long 
         established fact that a reader will be distracted by the readable
          content of a page when looking at its layout. The point of using 
          Lorem Ipsum is that it has a more-or-less normal distribution of 
          letters, as opposed to using 'Content here, content here', making
           it look like readable English. Many desktop publishing package
           s and web page editors now use Lorem Ipsum as their default model 
           text, and a search for 'lorem ipsum' will uncover many web sites 
           still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected 
            humour and the like).
        </p>
      </div>
    </div>
  )
}
