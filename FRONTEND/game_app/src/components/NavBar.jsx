import React from 'react'
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavBarElements';


const NavBar = () => {
  return (
    <Nav>
      

      <NavMenu>
      <NavLink to='/' >
          Home
        </NavLink>
        <NavLink to='/games' >
          Games
        </NavLink>
        </NavMenu>
        </Nav>
        
)}

export default NavBar