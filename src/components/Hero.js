import React from 'react'
import './Hero.css'
export default function Hero() {
  return (
    <div className="hero-section">
        <img src="./1.png" className="hero-img" alt="" />
        <div className="hero-text">
            <h1 className="hero-heading">GIFT MEM <span><img src="./gift.png" className="gift-img" alt="" /></span>RABLE</h1>
            <h1 className="hero-heading">EXPERIENCES</h1>
            <p className="hero-subheading">to your loved ones from<br/> Anywhere. Anytime!</p>
        </div>
    </div>
  )
}
