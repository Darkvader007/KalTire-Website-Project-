// src/components/PromotionSection.js
import React from 'react';
import '../PromotionSection/promotionSection.css';
import card2 from '../../Assets/card 2.png';
import card3 from '../../Assets/Home-Right-Nokian 1.png';



const PromotionSection = () => {
return (
    <div className="promotion-section">
    <div className="promo-card">
        <div className="promo-text">
        <h2>Been a while since you checked your breaks?</h2>
        <p>Book your free, expert brake inspection.</p>
        <button>Book now</button>
        </div>
    </div>
    <div className="promo-card">
        <div className="promo-text">
        <h2>We make it easy to achieve alignment.</h2>
        <p>Saving fuel, smoothing rides.</p>
        <button>Learn more</button>
        </div>
    </div>
    <div className="promo-banner" style={{ backgroundImage: `url(${card2})` }}>
        <img src={card3} alt="Kal Tire Logo"  className='logo'/>
        <div className="promo-text">
        <h2>Hot deals</h2>
        <p>Save up to 10% on tires</p>
        <button>Learn more</button>
        </div>
    </div>
    </div>
);
};

export default PromotionSection;
