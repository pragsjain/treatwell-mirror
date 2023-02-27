import React from 'react'
import { FaHome, FaRegHeart, FaCalendarAlt, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="footer">
      <Link to="/" className="footer-link">
        <FaHome/>
        <div className="footer-link-name">Home</div>
      </Link>
      <div className="footer-link">
        <FaRegHeart/>
        <div className="footer-link-name">Favorites</div>
      </div>
      <div className="footer-link">
        <FaCalendarAlt/>
        <div className="footer-link-name">Booking</div>
      </div>
      <div className="footer-link">
        <FaUser/>
        <div className="footer-link-name">Profile</div>
      </div>
    </div>
  )
}

export default Footer