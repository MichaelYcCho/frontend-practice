import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from 'screens/Navbar'
import Sidebar from 'screens/Sidebar'
import Main from 'screens/Main/Index';
import MainProducts from 'screens/Main/Products';
import Products from 'screens/Products';
import Login from 'screens/Auth/Login';
import Register from 'screens/Auth/Register';
import UserProfile from 'screens/UserProfile';
import { GlobalStyle } from 'globalStyles';

import { RecoilRoot } from 'recoil'




function App() {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <RecoilRoot>
        <Router>
          <GlobalStyle />
          <Navbar toggle={toggle} />
          <Sidebar isOpen={isOpen} toggle={toggle} />
          <Route path='/' component={Main} exact />
          <Route path='/products' component={Products} exact />
          <Route path='/accounts/login' component={Login} exact />
          <Route path='/accounts/register' component={Register} exact />
          <Route path='/accounts/profile' component={UserProfile} exact />
        </Router>
      </RecoilRoot>

    </>
  );
}

export default App;
