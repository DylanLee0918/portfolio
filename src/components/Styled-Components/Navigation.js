import styled from 'styled-components'
import {Link} from "react-router-dom"

export const NavContainer = styled.div`
    width: 100%;
    height: 60px;
    background-color: #FFF;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #92a8d1;
    padding: 0px 52px;
    font-family: 'QuickSand';
    font-weight: 600;
`

export const NavBrandContainer = styled.div`

`

export const NavBrandLogo = styled.img`

`

export const NavMenuContainer = styled.div`

`

export const NavMenu = styled.ul`
    list-style: none;
    display: flex;
    gap: 30px;
`

export const NavMenuItems = styled(Link)`
    cursor: pointer;
    text-decoration: none;
    color: blue;
    &:hover {
        color: green;
    }
`
