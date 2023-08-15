import React from 'react'
import "./BulkOrder.css";
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function BulkOrder() {
  return (
    <div className='bulk'>

      <div className='bulk-pic'>
        <img src='https://d3vk3ilzkajryp.cloudfront.net/blanko-webp/boxes.webp' alt='bulk'/>
      </div>

      <div className='bulk-info'>

        <p>We heard you</p>

        <p className='bulkreq'>Black & White both models are available for bulk order now.</p>

        <p>For retailers & resellers.</p>

        <a className='btn' href='https://docs.google.com/forms/d/e/1FAIpQLScrPMU5zaS-w_dlj3o6HmjgCXCCNt-q_JqkABDwW39UtofGwA/viewform?usp=sf_link'>CONTECT NOW</a>
      </div>

    </div>
  )
}

export default BulkOrder