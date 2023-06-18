import React from 'react';
import './Section5.css';
export default function Section5() {
  return (
    <section className="section3">
        <div class="row">
            <div class="col">
                <div className="text-center content-5">
                    <button className="contact-btn">CONTACT US</button>
                    <form className='form'> 
                        <input type="text" name="" id="" placeholder="John Doe"/>
                        <input type="email" name="" id="" placeholder="johndoe@gmail.com"/>
                        <input type="number" name="" id="" placeholder="99xxxxxx99" />
                    </form>
                </div>
                <div className="text-center">
                    <button className="send-btn">SEND</button>
                </div>
            </div>
    <div class="col-1 text-center">
        <img src="./line.png" alt="" className="text-center v-line"/>
    </div>
    <div class="col text-center">
        <div className="text-center content-5-2">
            <button className="contact-btn">FOLLOW US ON</button>
        </div>
        <img src="./map.png" width="100%" className="text-center sec-5-img" alt="" />
    </div>
  </div>
    </section>
  )
}
