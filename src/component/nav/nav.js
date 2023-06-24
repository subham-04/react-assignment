import React from 'react'
import './nav.css'
import { IoIosSettings } from 'react-icons/io'
import {  IoNotificationsSharp } from 'react-icons/io5'
import { BiLogoPaypal } from 'react-icons/bi'



const nav = () => {
  return (
    <nav className='nav-element'>

        <ul className='left-menu'>
          <li className='menu-item'> <BiLogoPaypal className='icon'/> </li>
          <li className='menu-item'>Home</li>
          <li className='menu-item'>Finances</li>
          <li className='menu-item'>Send and Request</li>
          <li className='menu-item'>Deals</li>
          <li className='menu-item'>Wallet</li>
          <li className='menu-item active'>Activity</li>
          <li className='menu-item'>Help</li>
        </ul>

        <ul className="right-menu">
          <li className='menu-item'> <IoNotificationsSharp className='icon'/> </li>
          <li className='menu-item'> <IoIosSettings className='icon'/> </li>
          <li className='menu-item'>LOG OUT</li>
        </ul>

      </nav>
  )
}

export default nav