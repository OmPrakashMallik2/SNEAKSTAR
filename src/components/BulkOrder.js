import React from 'react'
import "./BulkOrder.css";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function BulkOrder() {
  return (
    <div className='bulk'>

      <div className='bulk-pic'>
        <img src='https://d3vk3ilzkajryp.cloudfront.net/blanko-webp/boxes.webp' />
      </div>

      <div className='bulk-info'>
        <p>Upgrade your style and comfort with our designer running shoes! Perfect for sports and workouts, these lace-up shoe
          s offer stability, breathability, and cushioning for safety. Ideal for beginners, they combine fashion
          and function seamlessly. Brand: GeraldBlack, Gender: MEN, Sports Type: LIFESTYLE, Function: Cushioning. Get ready t
          o elevate your active lifestyle! Contact us for more d
          etails or to place an order. Happy running! </p>

        <a className='btn' href='https://docs.google.com/forms/d/e/1FAIpQLScrPMU5zaS-w_dlj3o6HmjgCXCCNt-q_JqkABDwW39UtofGwA/viewform?usp=sf_link'>CONTECT NOW <ArrowForwardIosIcon /></a>
      </div>

    </div>
  )
}

export default BulkOrder