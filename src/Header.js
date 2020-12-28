import React from 'react'
import logo from './logo.svg'
import './Header.css'

function Header() {
    return (
        <div className="header">
            <img src={logo} className="header__logo"></img>
            <h1 className="header__legend">Smart. Simple. Elegant</h1>
            <span className="header__desc">A smart and simple url shortener. Just paste and go...</span>
            <div className="header__container">
                <input type="url" className="header__input"></input>
                <button className="header__button">GET URL</button>
            </div>
        </div>
    )
}

export default Header
