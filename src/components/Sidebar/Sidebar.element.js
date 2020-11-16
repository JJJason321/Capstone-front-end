import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaMagento } from 'react-icons/fa';
import { Container } from '../../globalStyles';


export const Sidebarholder = styled.div`

`

export const Nav = styled.nav`

background-color: #060b26;
width: 250px;
height: 100vh;
display:flex;
justify-content:center;
position:fixed;
top: 1;
left: 0;
transition: 850ms

`


export const NavMenu = styled.ul`
    width:100%;
`;

export const NavItem = styled.li`

    background-color: #060b26;
    width:100%;
    height: 80px;
    display:flex;
    justify-content: start;
    align-items: center;
`

export const NavLinks = styled(Link)`
    text-decoration:none;
    color:#f5f5f5;
    font-size:18px;
    width: 95%;
    height: 100%;
    display:flex;
    align-items: center;
    padding: 0 16px;
    border-radius: 4px;

    &:hover{
    background-color: #1a83ff;
}

`

export const NavItemBtn = styled.li`
@media screen and (max-width:960px){
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120px;
}
`

export const NavBtnLink = styled(Link)`
display:flex;
justify-content: center;
align-items: center;
text-decoration: none;
padding:8px 16px;
height: 100%;
width:100%;
border:none;
outline:none;
`