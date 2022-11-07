import React from 'react'
import blog from '../images/blog-1.png';
import  '../Style/blogcards.css';


const Blogcard = (probs) => {
  return (
    <div>
       
        <div className="cards">
        <div className="left">
            <img src={blog} alt="blog" />
        </div>
        <div className='right'>
            <h1>{probs.heading}</h1>
            <p>{probs.content}</p>
        </div>
        </div>
      

    </div>
  )
}

export default Blogcard;