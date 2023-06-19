import React from 'react'
import './Section4.css'
export default function Section4() {
  return (
    <section className="section4" id="download">
      <div class="row text-center">
        <div class="col-4">
        <img src="./sec-4-img.png" width="100%" className="text-center sec-4-img" alt="" />
        </div>
        <div class="col-8 text-start sec-4-heading">
            Download the app now and sign up to get a gift card worth ₹200 for FREE
            <div class="row">
                <div class="col">
                  <div className="d-flex">
                    <div className="playstore">
                      <a href="https://play.google.com/store/apps/details?id=com.closertech.ribin">
                        <img src="./playstore.png" width="100%" className="playstore-btn" alt="" />
                      </a>
                    </div>
                    <div className="appstore">
                      <a href="https://apps.apple.com/in/app/ribin-experience-gifting-app/id1667026180">
                        <img src="./appstore.png" width="100%" className="appstore-btn" alt="" />
                      </a>
                    </div>
                  </div>
                </div>
            </div>
        </div>
  </div>
    </section>
  )
}
