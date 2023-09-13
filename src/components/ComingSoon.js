import React from 'react';
import Lottie from 'react-lottie';
import * as animationData from '.././coming_soon.json';
import './ComingSoon.css';

export default function ComingSoon() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
  return (
      <section className="coming-soon">
          <img src="./back.png" width="100%" alt="" className='blur'/>
          <div className='wrapper'>
              <div className='content'>
                  <div className='logo-wrapper'>
                      <img src="./logo-white.png" width={200} alt="" />
                      <p className='text_uc'>Under Construction</p>
                  </div>
              <Lottie 
                options={defaultOptions}
                height={260}
                width={260}
                  />
                   <p className='text-live'>Yet, our app is live !</p>
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
    </section>
  )
}
