import React from 'react'
import "./Product1.css";
import { Link } from 'react-router-dom';

function Product1() {
  return (
    <div className='pr1'>
      <div className='pr1-info'>
        <h2>WHITE</h2>
        <p>If you're concerned about both fashion and comfort during sports and workouts, opt for this pair of designer running shoes to add some chutzpah to your look. This lace-up running shoe is stable enough on the foot.</p>
        <p className='price'>&#x20B9;1999.00  <span>&#x20B9;599.00</span></p>
        <Link to="pr1" className='btn'>Learn More </Link>
        <Link to="buynow" className='btn'>Buy Now</Link>
      </div>
      <div className='pr1-pic'>
        {/* <img src='https://i.pinimg.com/564x/2f/e0/25/2fe025e8dd0b3445b98a4916fb40efc8.jpg'  alt='ky yar'/> */}
        <img src={require("../Media/shoes1.jpg")}  alt='ky yar'/>
        
      </div>
    </div>
  )
}

export default Product1;


// The specialty of this running shoe is its versatility, breathability and cushioning for safety. Perfect for beginners! Specifications Brand Name: GeraldBlack Gender: MEN Origin: CN(Origin) Sports Type: LIFESTYLE Function: Cushioning Applicable Place: Outdoor Lawn Level Of Practice: Be