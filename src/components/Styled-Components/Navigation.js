import styled from 'styled-components'
import {Link} from "react-router-dom"

export const NavContainer = styled.div`
    width: 100%;
    height: 70px;
    background-color: #FFF;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #1b262c;
    padding: 0px 20px;
    font-family: 'Quicksand';
    font-weight: 500;
`

export const NavBrandContainer = styled.div`
    display: flex;
    align-items: center;
`

export const NavBrandLogo = styled.img`
    height: auto;
    width: 46px;
`

export const NavMenuContainer = styled.div`
    height: auto;
`

export const NavMenu = styled.ul`
    list-style: none;
    display: flex;
`

export const NavMenuItems = styled(Link)`
    cursor: pointer;
    text-decoration: none;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 69px;
    width: 90px;
    color: #FFF;
    border-bottom: 5px solid #1b262c;
    &:hover {
        color: #3282b8; 
        /* background-color: #2c353a; */
        border-bottom: 5px solid #3282b8;
    }
`
