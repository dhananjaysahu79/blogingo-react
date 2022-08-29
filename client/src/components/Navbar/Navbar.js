import React, {useState, useEffect} from 'react';
import {FaTimes, FaBars} from 'react-icons/fa';
import { Button } from '../../globalStyles';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom'

import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavMenu,
  NavItems,
  NavLinks,
  MobileIcon
} from './Navbar.elements'

function Navbar() {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
       <Nav>
        <NavbarContainer>
            <NavLogo src = {logo}></NavLogo>
          <NavMenu click={click}>
            <NavItems>
              <NavLinks to = '/blogingo' onClick = {handleClick}>
                Home Feed
              </NavLinks>
            </NavItems>
            <NavItems>
              <NavLinks to = '/blogingo/about' onClick = {handleClick}>
               About
              </NavLinks>
            </NavItems>
            <NavItems>
              <NavLinks to = '/blogingo/works' onClick = {handleClick}>
                Contact Us
              </NavLinks>
            </NavItems>
            
            <Link to = 'blogingo/signin'>
              <Button marginLeft = {'10px'} color = '#1089DF' fontColor = '#fff'>
                Sign In
              </Button>
            </Link>

          </NavMenu>
          <MobileIcon onClick = {handleClick}>
            {click ? <FaTimes/> :<FaBars/>} 
          </MobileIcon>
        </NavbarContainer>
       </Nav>
    
  );
}

export default Navbar;