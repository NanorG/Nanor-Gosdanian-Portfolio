import React from 'react'
import './Footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'

function Footer() {
  return (
    <footer>
      <a href="#about" className='footer__logo'> Nanor Gosdanian Front End Developer </a>
      <ul className='permalinks'>
        <li><a href="Home">Home</a></li>
        <li><a href="#About">About</a></li>
        <li><a href="#Experience">Experience</a></li>
        <li><a href="#Portfolio">Portfolio</a></li>
        <li><a href="#Contact">Contacts</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/gosdanian"><FaFacebookF /></a>
        <a href="https://www.instagram.com/nanorrrr/"><FiInstagram /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Nanor Gosdanian. All rights reserved</small>
      </div>
      </footer>
  )
}

export default Footer