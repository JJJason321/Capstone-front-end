import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import {
    Nav,
    NavbarContainer,
    NavLogo,
    NavIcon,
    Mobileicon,
    NavMenu,
    NavItem,
    NavLinks,
    NavItemBtn,
    NavBtnLink
} from './Navbar.element'
import { Button } from '../../globalStyles'



const Navbar = (props) => {

    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)

    const login = props.login

    const handleClick = () => setClick(!click)

    const closeMobileMenu = () => setClick(false)

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    useEffect(() => {
        showButton()
    }, []);

    window.addEventListener('resize', showButton)

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <Nav>
                    <NavbarContainer>
                        <NavLogo to="/" onClick={closeMobileMenu}>
                            <NavIcon />
                        Nu-Yu
                    </NavLogo>
                        <Mobileicon onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </Mobileicon>
                        <NavMenu onClick={handleClick} click={click}>
                            <NavItem>
                                <NavLinks to='/'>
                                    Home
                            </NavLinks>
                            </NavItem>

                            <NavItem>
                                <NavLinks to='/services'>
                                    Services
                            </NavLinks>
                            </NavItem>

                            <NavItem>
                                <NavLinks to='/products'>
                                    Products
                            </NavLinks>
                            </NavItem>

                            {login ? (
                                <NavItemBtn>
                                    {button ? (
                                        <NavBtnLink to="/profile">
                                            <Button primary>My Account</Button>
                                        </NavBtnLink>
                                    ) : (
                                            <NavBtnLink to="/profile">
                                                <Button fontBig primary>My Account</Button>
                                            </NavBtnLink>
                                        )
                                    }
                                </NavItemBtn>
                            ) :
                                <NavItemBtn>
                                    {button ? (
                                        <NavBtnLink to="/sign-up">
                                            <Button primary>SIGN UP</Button>
                                        </NavBtnLink>
                                    ) : (
                                            <NavBtnLink to="/sign-up">
                                                <Button fontBig primary>SIGN UP</Button>
                                            </NavBtnLink>
                                        )
                                    }
                                </NavItemBtn>
                            }

                        </NavMenu>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
