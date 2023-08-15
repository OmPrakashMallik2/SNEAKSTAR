import React from 'react'
import "./Reviews.css";

function Reviews() {
  return (
    <div className='review'>

      <h1>Sharing the love which we received from you 💝</h1>
      <p1>We cant't keep calm!</p1>

      <div class="review-grid">
        <div class="review-card">
          <img src={require("../Media/shoes1.jpg")} class="customer-image" alt='custumer-dp' />
          <h3>Om Prakash Mallik</h3>
          <p class="review-text">it mind blowing</p>
        </div>

        <div class="review-card">
          <img src={require("../Media/shoes1.jpg")} class="customer-image" alt='custumer-dp' />
          <h3>John Doe</h3>
          <p class="review-text">"Great products and excellent service! Highly recommended."</p>
        </div>

        <div class="review-card">
          <img src={require("../Media/shoes1.jpg")} class="customer-image" alt='custumer-dp' />
          <h3>Jane Smith</h3>
          <p class="review-text">"I'm so impressed with the quality of the items I purchased."</p>
        </div>
        <div class="review-card">
          <img src={require("../Media/shoes1.jpg")} class="customer-image" alt='custumer-dp' />
          <h3>Om Prakash Mallik</h3>
          <p class="review-text">it mind blowing</p>
        </div>

        <div class="review-card">
          <img src={require("../Media/shoes1.jpg")} class="customer-image" alt='custumer-dp' />
          <h3>John Doe</h3>
          <p class="review-text">"Great products and excellent service! Highly recommended."</p>
        </div>

        <div class="review-card">
          <img src={require("../Media/shoes1.jpg")} class="customer-image" alt='custumer-dp' />
          <h3>Jane Smith</h3>
          <p class="review-text">"I'm so impressed with the quality of the items I purchased."</p>
        </div>
        <div class="review-card">
          <img src={require("../Media/shoes1.jpg")} class="customer-image" alt='custumer-dp' />
          <h3>Om Prakash Mallik</h3>
          <p class="review-text">it mind blowing</p>
        </div>

        <div class="review-card">
          <img src={require("../Media/shoes1.jpg")} class="customer-image" alt='custumer-dp' />
          <h3>John Doe</h3>
          <p class="review-text">"Great products and excellent service! Highly recommended."</p>
        </div>

      </div>

    </div>
  )
}

export default Reviews

