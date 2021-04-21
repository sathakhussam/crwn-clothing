import React from 'react'
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import SignInSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up.component'
import {Route, Switch} from 'react-router-dom'
import './App.css';
import Header from './components/header/header.component';

function App() {
  return (
    <div className="Container">
    <Header />
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/shop' component={ShopPage} />
      <Route exact path='/signin' component={SignInSignUpPage} />
    </Switch>
    </div>
  );
}

export default App;
