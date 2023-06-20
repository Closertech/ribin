import React from 'react';
import './Footer.css';
export default function Footer() {
  return (
    <section className="footer">
        <div class="row">
            <div class="col text-center foo-col">
              <div class="d-flex flex-column mb-3">
                <div class="foo-link">COMPANY</div>
                <div class="foo-link">OUR SERVICE</div>
                <div class="foo-link">TESTIMONIAL</div>
                <div class="foo-link">FEATURED</div>
              </div>
            </div>
            <div class="col text-center foo-mid-col">
              <div class="d-flex flex-column mb-3">
                  <div class="foo-mid-link">
                    <img src="./footer_logo.png" width="100%" className="footer-logo" alt="" />
                  </div>
                  <div class="foo-mid-link">Want to give something to someone but you are confused? Just give them a giftcard using RIBIN</div>
                </div>
            </div>
            <div class="col text-center foo-col">
              <div class="d-flex flex-column mb-3">
                <div class="foo-link">CONTACT US</div>
                <div class="foo-link">FAQ</div>
                <div class="foo-link">TERM OF SERVICE</div>
                <div class="foo-link">COPYRIGHT</div>
              </div>
            </div>
        </div>
    </section>
  )
}
