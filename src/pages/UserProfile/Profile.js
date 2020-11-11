import React, { useState, useEffect, useContext } from 'react';
import { NavBtnLink, NavItemBtn, NavMenu } from '../../components/Navbar/Navbar.element'
import { Button, Button2 } from '../../globalStyles'

import { AccountContext, LoginContext, useAccountContext, useLoginContext } from '../../libs/ContextLib';
import { Link, useHistory } from 'react-router-dom';
import { NotFound } from '../404NotFound/NotFound';


const Profile = () => {

  const accountContext = useContext(AccountContext)
  const loginContext = useContext(LoginContext)
  const login = loginContext.login;
  const history = useHistory();
  
  console.log(accountContext.AuthenticatedAccount);
  console.log(loginContext.login);

  const logout = () => {
    console.log("Button Clicked - Turn Login status Off")
    /*
    console.log(accountContext.AuthenticatedAccount);
    console.log(loginContext.login);
    console.log('-----------------')
    console.log(accountContext);
    console.log(loginContext);
    */
    
    loginContext.setLogin(false);
    localStorage.clear();
    history.push("/")
  };







  return (
    /*
    <div>
        <NavMenu>
          <NavItemBtn>
            <Button2 fontBig secondary onClick={logout}>Log out</Button2>
          </NavItemBtn>
        </NavMenu>
      </div>
      */
    <>
      {login ? (
        <div>
          <NavMenu>
            <NavItemBtn>
              <Button2 fontBig secondary onClick={logout}>Log out</Button2>
            </NavItemBtn>
          </NavMenu>
        </div>
      ) : (
          <div>
            Error 404 - You are not allow to be here!
          </div>
        )
      }
    </>
  )



}

export default Profile
