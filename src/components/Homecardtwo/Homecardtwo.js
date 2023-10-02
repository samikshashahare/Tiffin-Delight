import React from 'react';
import './Homecardtwo.css';

const Homecardtwo = ({text,img}) => {
  return (
    <div>
      <div className='card-two'>
<div className='text-container'>
<span className='text-card'>{text}</span>
</div>
<img src={img} className='img-card'></img>
      </div>
    </div>
  )
}

export default Homecardtwo
