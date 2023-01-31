import React from 'react'
import '../css/navbar.css'
import "bootstrap-icons/font/bootstrap-icons.css";
import logo from "../images/logo.jpg"
export default function Navbar() {
  return (
    <div className='container'>
        <a href='#'><img src={logo} alt='Logo' style={{height: "100%", width: "15%"}}/></a>
        <div className='searchContainer'>
            <i class="bi bi-search searchIcon"></i>
            <div className='separator'></div>
            <input class='searchBar' type='text' placeholder='Search...'></input>
        </div>
        <div className='info'>
            <i class="bi bi-bell"></i>
            <i class="bi bi-1-circle-fill"></i>
            <i class="bi bi-person-circle avatar"></i>
        </div>
    </div>
  )
}
