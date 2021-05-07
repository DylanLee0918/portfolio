import React from 'react'
import { NavContainer, NavBrandContainer, NavBrandLogo, NavMenuContainer, NavMenu, NavMenuItems } from '../Styled-Components/Navigation'

function Navigation() {
    return (
        <>
           <NavContainer>
                {/* Navbar Brand Logo and Container */}
                <NavBrandContainer>
                   <NavBrandLogo src="../assets/Dylan.png" alt="Brand-Logo"/>
                </NavBrandContainer>

                {/* Navbar Menu Items and Container */}
                <NavMenuContainer>
                    <NavMenu>
                        <NavMenuItems href="#">About Me</NavMenuItems>
                        <NavMenuItems href="#">Skills</NavMenuItems>
                        <NavMenuItems href="#">Portfolio</NavMenuItems>
                       
                        <NavMenuItems to="/contacts">Contact</NavMenuItems>
                       
                    </NavMenu>
                </NavMenuContainer>
           </NavContainer> 
        </>
    )
}

export default Navigation
