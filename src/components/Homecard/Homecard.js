import React from 'react'
import './Homecard.css';

const Homecard = ({img,text,heading}) => {
  return (
    <div>
      <div className='homecard  '>
        <img src={img} className='homecard-img'></img>
     <span >{heading}</span>
        <span className='text'>{text}</span>
      </div>
    </div>
  )
}

export default Homecard
