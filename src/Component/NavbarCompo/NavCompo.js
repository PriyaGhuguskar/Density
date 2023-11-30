import React from 'react'
import './NavCompo.css'
import logo from "../../Assets/logo.png";

const NavCompo = () => {
    return (
        <header id='header'>
            <div className='header'>
                <div className='header-left'>
                    <img src={logo} alt="logo" />
                </div>
                <div className='header-right'>
                    <a href="/">Career</a>
                    <a href="/">Blogs</a>
                    <a href="/">Leaderbaard</a>
                    <a href="/">Fees</a>
                    <button className='gradient'>TRADE NOW</button>
                </div>
            </div>
        </header>
    )
}

export default NavCompo