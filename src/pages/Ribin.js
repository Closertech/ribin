import styles from "./Ribin.module.css";
import { useNavigate } from "react-router-dom";
import React, { useRef } from 'react';

const Ribin = () => {
   
  
  const sectionOneRef = useRef(null);
  const sectionTwoRef = useRef(null);
  const sectionThreeRef = useRef(null);
  const sectionFourRef = useRef(null);

  
  const navigateToBrands = () => {
    sectionOneRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  const navigateToCollection = () => {
    sectionTwoRef.current.scrollIntoView({ behavior: 'smooth' });
  }
  
  const navigateToAboutUs = () => {
    sectionThreeRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  const navigateToDownload = () => {
    sectionFourRef.current.scrollIntoView({ behavior: 'smooth' });
  }



  return (
    <div className={styles.ribin}>
      <div className={styles.ribinChild} />
      <img className={styles.asset52x1} alt="" src="/asset-52x-1@2x.png" />
      <div className={styles.ribinItem} />
      <div className={styles.ribinInner} />
      <div className={styles.rectangleDiv} />
      <div className={styles.ribinChild1} />
      <img className={styles.ribinLogo1Icon} alt="" src="/ribinlogo-1@2x.png" />
      <div className={styles.partners} style={{cursor: 'pointer'}} onClick={() => navigateToBrands(sectionOneRef)}>Partners</div>
      <div className={styles.collection} style={{cursor: 'pointer'}} onClick={() => navigateToCollection(sectionTwoRef)}>Collection</div>
      <div className={styles.aboutUs} style={{cursor: 'pointer'}} onClick={() => navigateToAboutUs(sectionThreeRef)}>about us</div>
      <div className={styles.download} style={{cursor: 'pointer'}} onClick={() => navigateToDownload(sectionFourRef)}>download</div>
      <div className={styles.giftMemRableContainer}>
        <p className={styles.giftMem}>Gift Mem rable</p>
        <p className={styles.giftMem}>Experiences</p>
      </div>
      <div className={styles.toYourLovedContainer} style={{marginTop: '40px'}}>
        <p className={styles.giftMem}>to your loved ones from</p>
        <div>
        <p className={styles.giftMem} style={{position: "relative", top:"50px"}}>Anywhere. Anytime!</p>
        </div>
      </div>
      <img className={styles.layer1Icon} alt="" src="/layer-1.svg" />
      <div className={styles.ribinChild2} />
     
      <div className={styles.brandsThatTrust} ref={sectionOneRef} id="section1" >Brands that Trust Us</div>
     
      <div className={styles.aboutUs1} ref={sectionThreeRef} id="section3">ABOUT US</div>
      <img
        className={styles.ribinWebsite22Icon}
        alt=""
        src="/ribinwebsite-2-2@2x.png"
      />
      <div className={styles.ribinChild3} />
      <div className={styles.ourCollection}  ref={sectionTwoRef} id="section2">OUR COLLECTION</div>
      <div className={styles.browseOurCollectionContainer}>
        <p className={styles.giftMem}>
          Browse our collection of experiences today
        </p>
        <p className={styles.giftMem}>and give the gift of memories</p>
      </div>
      <img className={styles.asset12x1} alt="" src="/asset-12x-1@2x.png" />
      <div className={styles.foodBeveragesContainer}>
        <p className={styles.giftMem}>{`FOOD &`}</p>
        <p className={styles.giftMem}>BEVERAGES</p>
      </div>
      <div className={styles.fashion}>Fashion</div>
      <div className={styles.jewelry}>JEWELRY</div>
      <div className={styles.entertainment}>ENTERTAINMENT</div>
      <div className={styles.fitness}>FITNESS</div>
      <div className={styles.accessories}>ACCESSORIES</div>
      <div className={styles.accessories1}>ACCESSORIES</div>
      <div className={styles.ribinAppIsContainer}>
        <p className={styles.giftMem}>Ribin app is a one-stop destination</p>
        <p className={styles.giftMem}>for all your gifting needs.</p>
      </div>
      <div className={styles.ribinIsAContainer}>
        <p className={styles.giftMem}>
          Ribin is a unique experiential gifting platform
        </p>
        <p className={styles.giftMem}>
          that lets you gift unforgettable experiences to
        </p>
        <p className={styles.giftMem}>your loved ones within a few clicks.</p>
      </div>
      <img className={styles.asset22x1} alt="" src="/asset-22x-1@2x.png" />
      <img className={styles.asset22x2} alt="" src="/asset-22x-2@2x.png" />
      <img className={styles.asset32x1} alt="" src="/asset-32x-1@2x.png" />
      <div className={styles.downloadTheAppContainer} ref={sectionFourRef} id="section4">
        <p className={styles.giftMem}>Download the app now and</p>
        <p className={styles.giftMem}>sign up to get a gift card</p>
        <p className={styles.giftMem}>worth $350 for FREE</p>
      </div>
      <div className={styles.ribinChild4} />
      <div className={styles.contactUs}>CONTACT US</div>
      <div className={styles.ribinChild5} />
      <div className={styles.followUsOn}>FOLLOW US ON</div>
      <div className={styles.lineDiv} />
      <div className={styles.ribinChild6} />
      <div className={styles.ribinChild7} />
      <div className={styles.ribinChild8} />
      <div className={styles.johnDoe}>John Doe</div>
      <div className={styles.johndoegmailcom}>johndoe@gmail.com</div>
      <div className={styles.xxxxxx99}>99xxxxxx99</div>
      <div className={styles.ribinChild9} />
      <div className={styles.send}>send</div>
      <img className={styles.asset32x2} alt="" src="/asset-32x-2@2x.png" />
      <div className={styles.companyOurServiceContainer}>
        <p className={styles.giftMem}>COMPANY</p>
        <p className={styles.giftMem}>&nbsp;</p>
        <p className={styles.giftMem} style={{position: 'relative', top:'100px'}}>OUR SERVICE</p>
        <p className={styles.giftMem}>&nbsp;</p>
        <p className={styles.giftMem} style={{position: 'relative', top:'200px'}}>TESTIMONIAL</p>
        <p className={styles.giftMem}>&nbsp;</p>
        <p className={styles.giftMem} style={{position: 'relative', top:'300px'}}>FEATURED</p>
      </div>
      <div className={styles.contactUsFaqContainer}>
        <p className={styles.giftMem}>CONTACT US</p>
        <p className={styles.giftMem}>&nbsp;</p>
        <p className={styles.giftMem} style={{position: 'relative', top:'100px'}}>FAQ</p>
        <p className={styles.giftMem}>&nbsp;</p>
        <p className={styles.giftMem} style={{position: 'relative', top:'200px', right:'140px'}}>TERM OF <span style={{position: 'relative', left:'170px'}} >SERVICE</span></p>
        <p className={styles.giftMem}>&nbsp;</p>
        <p className={styles.giftMem} style={{position: 'relative', top:'300px'}}>COPYRIGHT</p>
      </div>
      <div className={styles.wantToGiveContainer}>
        <p className={styles.giftMem}>Want to give something to</p>
        <p className={styles.giftMem}>someone but you are confused?</p>
        <p className={styles.giftMem}>Just give them a</p>
        <p className={styles.giftMem}>giftcard using RIBIN</p>
      </div>
      <img className={styles.asset42x1} alt="" src="/asset-42x-1@2x.png" />
    </div>
  );
};

export default Ribin;
