import React from 'react'
import "./Product2.css";
import { Link } from 'react-router-dom';

function Product2() {
  return (
    <div className='pr2'>

      <div className='pr2-pic'>
        {/* <img src='https://i.pinimg.com/750x/16/76/7b/16767bce07f7c53e651dff1fcac537da.jpg'  alt='ky yar'/> */}
        <img src={require("../Media/shoes2.jpg")} alt='ky yar' />
      </div>

      <div className='pr2-info'>
        <h2>BLACK</h2>
        <p>If you're concerned about both fashion and comfort during sport
          s and workouts, opt for this pair of designer running shoes to add some chu
          tzpah to your look. This lace-up running shoe is stable enough on the foot.</p>       
        <p className='price'>&#x20B9;1999.00  <span>&#x20B9;2999.00</span></p>
        <div className='btn-cont'>
          <Link to="pr2" className='btn'>Learn More</Link>
          <Link to="buynow" className='btn'>Buy Now</Link>

        </div>
      </div>

    </div>
  )
}

export default Product2;