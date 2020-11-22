import React, { useState, useContext, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { SidebarData } from './SidebarData';
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
    NavBtnLink,
    Sidebarholder
} from './Sidebar.element'
import { Button, Button2 } from '../../globalStyles'
import { LoginContext } from '../../libs/ContextLib';
import { IconContext } from 'react-icons/lib';

import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as BiIcons from 'react-icons/bi';
import * as BsIcons from 'react-icons/bs';
import * as IoIcons from 'react-icons/io';
import * as HiIcons from 'react-icons/hi';

const Sidebar = () => {

    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)
    const loginContext = useContext(LoginContext)
    const login = loginContext.login;
    const history = useHistory();
    const [client, setClient] = useState();
    const [employee, setEmployee] = useState(false);
    const [admin, setAdmin] = useState(false);
    const [onLoad, setOnLoad] = useState(true);

    useEffect(() => {
        if (onLoad) {
            setClient(localStorage.getItem('isClient'))
            setEmployee(localStorage.getItem('isEmployee'))
            setAdmin(localStorage.getItem('isAdmin'))
            setOnLoad(false);
        }
        /*
            console.log(client);
            console.log(employee);
            console.log(admin);
        */
    })

    const logout = () => {
        console.log("Button Clicked - Turn Login status Off")
        loginContext.setLogin(false);
        localStorage.clear();
        //history.push("/")
    };

    return (
        <>
            <Sidebarholder>
                <Nav>

                    <NavMenu>

                        <NavItem>
                            <NavLinks to='/profile'>
                                <AiIcons.AiOutlineDashboard />
                                DashBoard
                            </NavLinks>
                        </NavItem>

                        {(client === 'true') ?
                            <NavItem>
                                <NavLinks to='/profile/appointment'>
                                    <BiIcons.BiBookAdd />Make Appointment
                            </NavLinks>
                            </NavItem>
                            : <NavItem>
                                <NavLinks to='/profile/appointment'>
                                    <BiIcons.BiBookAdd />Make Appointment
                            </NavLinks>
                            </NavItem>
                        }


                        <NavItem>
                            <NavLinks to='/profile/personalinfo'>
                                <BsIcons.BsPencilSquare />Personal Info
                            </NavLinks>
                        </NavItem>

                        {(employee === 'true') ?
                            <NavItem>
                                <NavLinks to='/profile/setcalender'>
                                    <AiIcons.AiOutlineCalendar />Set Working Calender

                            </NavLinks>
                            </NavItem>
                            : 1}


                        {(admin === 'true') ?
                            <>
                            <NavItem>
                                <NavLinks to='/profile/generatereport'>
                                    <HiIcons.HiOutlineDocumentReport />Business Report

                            </NavLinks>
                            </NavItem>

                            <NavItem>
                                <NavLinks to='/profile/manageaccount'>
                                    <BsIcons.BsPersonPlus /> Manage Accounts

                            </NavLinks>
                            </NavItem>
                            </>
                            :
                            1
                        }
                        <NavItem>
                            <NavBtnLink to='/'>
                                <Button2 fontBig secondary onClick={logout}>
                                    Logout
                            </Button2>
                            </NavBtnLink>
                        </NavItem>
                    </NavMenu>

                </Nav>
            </Sidebarholder>
        </>
    )
}

export default Sidebar  