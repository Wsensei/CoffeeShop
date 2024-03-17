
import React from 'react';
import './footer.css';
import { FaFacebook ,FaInstagram ,FaTwitter ,FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="coffee-footer">
      <div className="footer-content">
        <div className="contact-info">
          <h3> Contact Us </h3>
         <div className="location">
         <p>123 Main Street</p>
          <p>Cityville, Coffee Country</p>
          <p>Phone: (+880) 01518786570 </p>
          <p>Email: wajibhasasn1010@gmail.com</p>
         
         </div>
        </div>
        <div className="social-media">
          <h3>Social Media</h3>
          <ul >
            <li><FaFacebook size={30} /></li>
            <li><FaInstagram size={30} /></li>
            <li><FaTwitter size={30} /></li>
            <li>< FaGithub size={30} /></li>
           
          </ul>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; 2024 Your Coffee Shop. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
