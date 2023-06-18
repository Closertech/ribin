import React from 'react'
import './Footer.css'
export default function Footer() {
  return (
    <section className="footer">
        <div class="row">
            <div class="col text-center foo-col">
              <div class="d-flex flex-column mb-3">
                <div class="p-3">COMPANY</div>
                <div class="p-3">OUR SERVICE</div>
                <div class="p-3">TESTIMONIAL</div>
                <div class="p-3">FEATURED</div>
              </div>
            </div>
            <div class="col text-center foo-mid-col">
              <div class="d-flex flex-column mb-3">
                  <div class="p-2">
                    <img src="./footer_logo.png" width="100%" className="footer-logo" alt="" />
                  </div>
                  <div class="p-2">Want to give something to someone but you are confused? Just give them a giftcard using RIBIN</div>
                </div>
            </div>
            <div class="col text-center foo-col">
              <div class="d-flex flex-column mb-3">
                <div class="p-3">CONTACT US</div>
                <div class="p-3">FAQ</div>
                <div class="p-3">TERM OF SERVICE</div>
                <div class="p-3">COPYRIGHT</div>
              </div>
            </div>
        </div>
    </section>
  )
}
