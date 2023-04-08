import React from 'react'
import './Header.css'
import Button from './Button'
import Nanor from '../../assets/Nanor.jpg'
import HeaderSocials from './HeaderSocials'

function Header() {
  return (
    <header>
      <div className="container header__container">
        <h4>Hello I'm</h4>
        <h1>Nanor Gosdanian</h1>
        <h4 className="text-light">Front End Developer</h4>
        <Button />
        <HeaderSocials />

        <div className="me">
          <img src={Nanor} alt="me" />
        </div>

        <a href="#Contact" className='scroll__down'>Scroll Down </a>

      </div>
    </header>
  )
}

export default Header