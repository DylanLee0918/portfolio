import React from 'react'
import { NavContainer, NavBrandContainer, NavBrandLogo, NavMenuContainer, NavMenu, NavMenuItems } from '../Styled-Components/Navigation'
import {Link} from "react-router-dom"

function Navigation() {
    return (
        <>
           <NavContainer>
                {/* Navbar Brand Logo and Container */}
                <NavBrandContainer>
                   <NavBrandLogo src="" alt=""/>
                   JED DYLAN
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
