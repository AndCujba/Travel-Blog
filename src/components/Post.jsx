import React from 'react'
import "./post.css"
import moldova from "../assets/moldova.jpg"

export default function Post() {
  return (
    <div className='post'>
      <img className='postImg' src={moldova} alt="moldova-img" />
      <div className='postInfo'>
        <div className='postCats'>
            <h2 className='postCat'>Moldova</h2>
        </div>
        <h2 className='postTitle'>It is a long established fact that</h2>
        <hr />
        <h2 className='postDate'>1 hour ago</h2>
      </div>
      <p className='postDesc'>
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
            humour and the like).
      </p>

    </div>
  )
}
