import React from 'react'
import "./Product2.css";
import { Link } from 'react-router-dom';

function Product2() {
  return (
    <div className='pr2'>

      <div className='pr2-pic'>
        <img src='https://i.pinimg.com/750x/16/76/7b/16767bce07f7c53e651dff1fcac537da.jpg' />
      </div>

      <div className='pr2-info'>
        <p>If you're concerned about both fashion and comfort during sports and workouts, opt for this pair of designer running shoes to add some chutzpah to your look. This lace-up running shoe is stable enough on the foot. The specialty of this running shoe is its versatility, breathability and cushioning for safety. Perfect for beginners! Specifications Brand Name: GeraldBlack Gender: MEN Origin: CN(Origin) Sports Type: LIFESTYLE Function: Cushioning Applicable Place: Outdoor Lawn Level Of Practice: Be</p>
        <p className='price'>1999.00</p>
        <Link to="pr2" className='btn'>learn More</Link>
        <Link to="buynow" className='btn'>BUY NOW</Link>
      </div>

    </div>
  )
}

export default Product2;