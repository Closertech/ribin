import React from "react";
import "./Section5.css";
export default function Section5() {
  return (
    <section className="section3" id="contactus">
      <div class="row">
        <div class="col">
          <div className="text-center content-5">
            <button className="contact-btn">CONTACT US</button>
            <form
              className="form"
              action="https://formspree.io/f/xleyrerq"
              method="POST"
            >
              <input type="text" name="username" id="name" placeholder="Name" />
              <input type="email" name="email" id="email" placeholder="Email" />
              <input
                type="number"
                name="number"
                id="number"
                placeholder="Phone No"
              />
              <div className="text-center">
                <button className="send-btn" type="submit">
                  SEND
                </button>
              </div>
            </form>
          </div>
        </div>
        <div class="col-1 text-center">
          <img src="./line.png" alt="" className="text-center v-line" />
        </div>
        <div class="col text-center">
          <div className="text-center content-5-2">
            <button className="contact-btn">FOLLOW US ON</button>
          </div>
          <div className="d-flex">
            <div className="fb-div">
              <a href="https://www.facebook.com/ribinapp">
                <img
                  src="./fb.png"
                  width="120%"
                  className="text-center sec-5-img"
                  alt=""
                />
              </a>
            </div>
            <div className="instagram-div">
              <a href="https://www.instagram.com/ribinapp/">
                <img
                  src="./instagram.png"
                  width="120%"
                  className="text-center sec-5-img"
                  alt=""
                />
              </a>
            </div>
          </div>
          {/* <img src="./map.png" width="100%" className="text-center sec-5-img" alt="" /> */}
        </div>
      </div>
    </section>
  );
}
