import React from 'react'
import { NavLink } from "react-router-dom"
function Navbar() {
  return (
    <>
      <div className='navbar-top'>
        <div className="container flex py-6">
          <p>(+1) 234 5678 9101</p>
          <p>shop@yourdomain.com </p>
        </div>

      </div>

      <div className='navbar'>
        <div className='container flex items-center justify-between py-6'>
          <p className='font-black text-4xl'>Selling<span style={{ color: "#f16821" }}>.</span></p>
          <div className="links flex gap-5">
            <NavLink to="/home" style={({ isActive }) => ({ color: isActive ? "#f16821" : "black" })}>Home</NavLink>
            <NavLink to="/people" style={({ isActive }) => ({ color: isActive ? "#f16821" : "black" })}>People</NavLink>
            <NavLink to="/add" style={({ isActive }) => ({ color: isActive ? "#f16821" : "black" })}>AddProduct</NavLink>
          </div>

        </div>
      </div>
    </>
  )
}

export default Navbar
