import React from 'react'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.svg'
import bell_icon from '../../assets/bell_icon.svg'
import profile from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'
import './Navbar.css'
import { logout } from '../../firebase'
const Navbar = () => {

  const handleLogOut = () => {
    logout();
  }

  return (
    <div className='navbar'>
      <div className="navbar-left">
        <img src={logo} alt="" />
        <ul>
          <li>Home</li>
          <li>TV Show</li>
          <li>Movies</li>
          <li>My List</li>
          <li>Browse by Language</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={search_icon} alt="search-icon" className='icons' />
        <p>Children</p>
        <img src={bell_icon} alt="bell-icon" className='icons' />
        <div className="navbar-profile">
          <img src={profile} alt="profile" className='profile' />
          <img src={caret_icon} alt="dropdowm" />
          <div className="dropdown">
            <p onClick={handleLogOut}>Sign Out of NetaFlex</p>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
