import React from 'react'
import './MealPlan.css';
import Addtocard from '../../components/Addtocard/Addtocard';



function MealPlan() {
  return (
    <>
      <div className="container-fluid text-center">
        <div className="row parent-div">
          <div className="col-lg-6 col-sm-12 border border-dark">

            <h3>show-cards-details</h3>

            <img src='https://rekart.s3.ap-south-1.amazonaws.com/N65YHmo52n7H3PG5/2f0254d737db0376975f57c1813bd1d7.jpg' className='img-thali'></img>

            <h4>Happy Meal</h4>

            <p>Starts from ₹130 ₹78/ Unit</p>

            <h3 className='meal-quantity'>3 Chapati, 1 Subzi, Dal, Rice, Salad, Papad.</h3>

            <h3 className='sweet-serve'>Sweet Once a week.</h3>

            <button type='button' className='btn-AddToCard' onClick={Addtocard}>Add To Card</button>
          </div>

          <div className="col-lg-6 col-sm-12 border border-dark">

            <h3>your meal choice</h3>
          </div>
        </div>
      </div>
    </>
  )
}

export default MealPlan