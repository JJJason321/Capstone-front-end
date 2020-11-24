import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar, Footer } from './components/index';
import GlobalStyles from './globalStyles';
import Home from './pages/HomePage/Home';
import Services from './pages/Services/Services';
import Products from './pages/Products/Product';
import ScrollerToTop from './components/ScrollToTop';
import SignIn from './pages/SignUp/SignIn';
import CreateAccount from './pages/SignUp/CreateAccount';
import Profile from './pages/UserProfile/Profile';
import React, { useState, useEffect, useContext } from 'react';
import NotFound from './pages/404NotFound/NotFound';
import { AccountContext, LoginContext } from './libs/ContextLib';
import Appointment from './pages/ProfilePages/Appointment';

function App() {

  const [login, setLogin] = useState(false); 
  const [AuthenticatedAccount, setAuthenticatedAccount] = useState();
  
  useEffect(() => {
    const loginStatus = localStorage.getItem('login');
    const currentuser = localStorage.getItem('user');
    const userId = localStorage.getItem('userId');
    /*
    console.log("heree")
    console.log("2nd useEffect called")
    */
    if (loginStatus) {
      /*
      console.log("success!!!")
      console.log(loginStatus)
      console.log(currentuser)
      console.log("heree")
      console.log(userId);
      */
      setLogin(true);
    } else {
      //console.log(loginStatus);
    }
  })


  return (

    <Router>
      <GlobalStyles />
      <ScrollerToTop />
      <LoginContext.Provider value={{ login, setLogin }}>
        <AccountContext.Provider value={{ AuthenticatedAccount, setAuthenticatedAccount }}>
          <Navbar login={login} />
          <Switch>

            <Route path="/" exact component={Home} />
            <Route path="/services" exact component={Services} />
            <Route path="/products" exact component={Products} />
            <Route path="/sign-up" exact component={SignIn} />
            <Route path="/create-account" component={CreateAccount} />
            <Route path="/profile" component={Profile} />
            
            <Route component={NotFound} />
            
          </Switch>
          <Footer />
        </AccountContext.Provider>
      </LoginContext.Provider>
    </Router>

  );
}

export default App;
