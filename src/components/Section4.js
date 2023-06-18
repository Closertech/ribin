import React from 'react'
import './Section4.css'
export default function Section4() {
  return (
    <section className="section4">
      <div class="row text-center">
        <div class="col-4">
        <img src="./sec-4-img.png" width="100%" className="text-center sec-4-img" alt="" />
        </div>
        <div class="col-8 text-start sec-4-heading">
            Download the app now and sign up to get a gift card worth $350 for FREE
            <div class="row">
                <div class="col">
                    <img src="./download.png" width="100%" className="download-btn" alt="" />
                </div>
            </div>
        </div>
  </div>
    </section>
  )
}
