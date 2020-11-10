import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Navbar, Footer } from './components/index';
import GlobalStyles from './globalStyles';
import Home from './pages/HomePage/Home';
import Services from './pages/Services/Services';
import Products from './pages/Products/Product';
import ScrollerToTop from './components/ScrollToTop';
import SignIn from './pages/SignUp/SignIn';
import CreateAccount from './pages/SignUp/CreateAccount';
import Profile from './pages/UserProfile/Profile';
import react, {useState} from 'react';
import NotFound from './pages/404NotFound/NotFound';



function App() {

  const [login, setlogin] = useState(false)

  return (
    <Router>
    <GlobalStyles/>
    <ScrollerToTop />
      <Navbar login={login}/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/services" exact component={Services} />
        <Route path="/products" exact component={Products} />
        <Route path="/sign-up" exact component={SignIn} />          
        <Route path="/create-account" component={CreateAccount} />
        <Route path="/profile" component={Profile} />
        <Route component={ NotFound } />

      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
