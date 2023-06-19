import React from 'react'
import './Section3.css'
export default function Section1() {
  return (
    <section className="section3" id="aboutus">
      <div className="text-center content-3">
        <button className="about-btn">ABOUT US</button>
      </div>
      <div class="container text-center">
        <div class="row">
          <div class="col">
            <h1 className='sec-3-heading'>
              Ribin app is a one-stop destination for all your gifting needs.
            </h1>
            <p className='sec-3-subheading'>
              Ribin is a unique experiential gifting platform
              that lets you gift unforgettable experiences to
              your loved ones within a few clicks.
            </p>
          </div>
          <div class="col">
          <img src="./present.png" width="100%" className="text-center sec-3-img" alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}
