import React, { useState, useEffect, useContext } from 'react';
import { NavBtnLink, NavItemBtn, NavMenu } from '../../components/Navbar/Navbar.element'
import { Button, Button2, Container } from '../../globalStyles'
import { AccountContext, LoginContext, useAccountContext, useLoginContext } from '../../libs/ContextLib';
import { Link, useHistory } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from '../HomePage/Home';
import NotFound from '../404NotFound/NotFound';
import Appointment from '../ProfilePages/Appointment';
import PersonalInfo from '../ProfilePages/PersonalInfo';
import Sidebar from '../../components/Sidebar/Sidebar';
import './Profile.css';
import List from '../ProfilePages/List';
import axios from 'axios';
import ManageAccount from '../ProfilePages/ManageAccount';
import SetCalender from '../ProfilePages/SetCalender';
import BusinessReports from '../ProfilePages/BusinessReports';

const Profile = () => {

  const accountContext = useContext(AccountContext)
  const loginContext = useContext(LoginContext)
  const login = loginContext.login;
  const history = useHistory();
  
  const [account, setAccount] = useState();
  const [appointment, setAppointment] = useState();
  const [onload, setOnload] = useState(true);

  //console.log(accountContext.AuthenticatedAccount);
  //console.log(loginContext.login);
  /*
  const logout = () => {
    console.log("Button Clicked - Turn Login status Off")
    loginContext.setLogin(false);
    localStorage.clear();
    history.push("/")
  };
*/

  useEffect(()=>{
    //console.log('Onload status: ' + onload)
    //loadAccount();
    if(onload){
      //console.log('this runs only onload is true')
      loadAccount();
    }else{
     // console.log('This runs only onload is false')
      //console.log(account)
    }
   
  },[])


  function loadAccount(){
    const userId = localStorage.getItem('userId');
    //console.log('userId from loaclstorage'+userId)
    const url = 'http://localhost:8080/api/accounts/' + userId;
    //console.log(url)
    axios.get(url).then(response =>  {
     // console.log(response.data);
      setAccount(response.data);
      setOnload(false);
    }).catch(e =>{
      console.log(e)
    })

  }
/*
  function loadAppointment(){
    const userId = localStorage.getItem('userId');
    console.log('load all appointments related with this account');
    const url = 'http://localhost:8080/api/appointmentlist/' + userId;
    console.log('url for load appointments:' + url)
    axios.get(url).then(response => {
      console.log(response.data);
      setAppointment(response.data);
      setOnload(false);
    }).catch(e=>{
      console.log(e)
    })
  }
  */


  return (
    <>
      {login ? (
        <div className='profilepage'>
          <Router>
            <div className='grid'>
              <div className='sidebar'>
                <Sidebar />
              </div>

              <div className='view'>
                
                
                <Switch>
                  <Route path='/profile' exact component={List} />
                  <Route path='/profile/appointment' exact component={Appointment} />
                  <Route path='/profile/personalinfo' exact component={PersonalInfo} />
                  <Route path='/profile/manageaccount' exact component={ManageAccount} />
                  <Route path='/profile/setcalender' exact component={SetCalender} />
                  <Route path='/profile/generatereport' exact component={BusinessReports} />
                </Switch>
              </div>
            </div>
          </Router>

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
