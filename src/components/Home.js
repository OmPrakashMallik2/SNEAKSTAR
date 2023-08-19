import React from 'react'
import "./Home.css"
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='home'>

      <div className='home-pic'>
        <img src={require("../Media/combo.png")} alt="photu" />
        {/* <img src='https://d3vk3ilzkajryp.cloudfront.net/blanko-webp/king-with-x.webp' alt="photu" /> */}
      </div>
      
      <div className='home-info'>

        <p className='heading'>BLACK & WHITE</p>
        <p className='combo-details'>Rise and shine with Black and White sneakers, a stylish footwear that skyrocket your fashion sence. And your appearance in your hood.</p>
        <p className='disc-combo'>Grab Black & White Combo</p>
        <p className='headingPrice'>&#x20B9;2999.00 <span>&#x20B9;5499.00</span></p>
        <p className='disc-combo'>Unlock Savings: Get ₹100.00 Off on Prepaid Orders!</p>

        <div className='btn-cont'>
          <Link to="/prcombo" className='btn'>LEARN MORE</Link>
          <Link to="/buynow" className='btn'>BUY NOW</Link>
        </div>
      </div>
    </div>
  )
}

export default Home
