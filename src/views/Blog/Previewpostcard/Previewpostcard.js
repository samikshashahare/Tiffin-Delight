import React from 'react'
import './Previewpostcard.css';
import { Link } from 'react-router-dom'
function Previewpostcard({ id, Title, Description, Image, Date }) {
  return (
    <>
      <div className="Previewpostcard-container">
        <div>
          <img className='Previewpostcard-img' src={Image} />
        </div>
        <p className='title'>{Title}</p>
         < Link to={`/blogpost/blogreadpost/${id}`}className='Previewpostcard-btn'>Read more...</Link> 

      </div>

    </>
  )
}

export default Previewpostcard