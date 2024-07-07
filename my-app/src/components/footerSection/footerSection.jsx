import React from 'react';
import '../footerSection/footerSection.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-sections">
                <div className="footer-section">
                    <h4>SHOP</h4>
                    <ul>
                        <li><a href="#">Tires</a></li>
                        <li><a href="#">Wheels</a></li>
                        <li><a href="#">Wheel & Tire Packages</a></li>
                        <li><a href="#">Brands</a></li>
                        <li><a href="#">Promotions</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>SERVICES</h4>
                    <ul>
                        <li><a href="#">Winter Tire Change</a></li>
                        <li><a href="#">Flat Tire Repair</a></li>
                        <li><a href="#">Tire Rotation</a></li>
                        <li><a href="#">Brake Service</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>RESPONSIBILITY</h4>
                    <ul>
                        <li><a href="#">Community</a></li>
                        <li><a href="#">Environment</a></li>
                        <li><a href="#">Safety</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>CAREERS</h4>
                    <ul>
                        <li><a href="#">Current Openings</a></li>
                    </ul>
                    <h4>CORPORATE</h4>
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Newsroom</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>COMMERCIAL</h4>
                    <ul>
                        <li><a href="#">Products</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Programs</a></li>
                        <li><a href="#">Why Us</a></li>
                        <li><a href="#">Retread</a></li>
                        <li><a href="#">Locations</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>MINING</h4>
                    <ul>
                        <li><a href="#">Maintenance & Management</a></li>
                        <li><a href="#">Products</a></li>
                        <li><a href="#">Sustainable Solutions</a></li>
                        <li><a href="#">Working for Kal Tire’s Mining Tire Group</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>CONTACT US</h4>
                    <ul>
                        <li><a href="#">Chat Now (Online now)</a></li>
                        <li><a href="#">Phone Us (1-877-KAL-TIRE)</a></li>
                        <li><a href="#">Email Web Store Support</a></li>
                        <li><a href="#">Change or Cancel My Appointment</a></li>
                    </ul>
                    <div className="footer-social">
                        <a href="#"><i className="fab fa-facebook"></i></a>
                        <a href="#"><i className="fab fa-linkedin"></i></a>
                        <a href="#"><i className="fab fa-youtube"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                    </div>
                    <div className="footer-logos">
                        <img src="kaltire-logo.png" alt="Kal Tire" />
                        <img src="nhl-logo.png" alt="NHL" />
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Kal Tire | All rights reserved | Kal Tire, PO Box 1240 Vernon, BC V1T 6N6 | <a href="#">Privacy Policy</a> | <a href="#">Terms and Conditions</a> | &copy; NHL</p>
            </div>
        </footer>
    );
};

export default Footer;
