import React, { useEffect, useState } from 'react';
import './HireBanner.css' 
import { Link } from 'react-router-dom';
import profileImg from '../../assets/developer.png'

const HireBanner = () => {

    const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBanner(true);
    }, 2000); // 2 seconds delay
    return () => clearTimeout(timer);
  }, []);


  return (
     showBanner && (
      <div className="hire-banner animate-hire-banner">
        <div className="hire-banner-left">
          <img src={profileImg} alt="Shivam" className="hire-banner-img" />
          <div className="hire-banner-text">
            <h4>Shivam is available for Hire</h4>
            <p>Availability: Now</p>
          </div>
        </div>
        <Link to="/contact" className="hire-banner-btn">
          Hire Shivam
        </Link>
      </div>
    )
    
  );
}

export default HireBanner;
