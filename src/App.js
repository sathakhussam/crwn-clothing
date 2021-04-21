import React from 'react'
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import SignInSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up.component'
import {Route, Switch} from 'react-router-dom'
import './App.css';
import Header from './components/header/header.component';
import {auth} from './firebase/firebase.utils'


class App extends React.Component{
  constructor() {
    super()

    this.state = {
      currentUser : null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth=auth.onAuthStateChanged(user => {
      this.setState({currentUser:user})  
      console.log(user)
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div className="Container">
      <Header currentUser={this.state.currentUser} />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/signin' component={SignInSignUpPage} />
      </Switch>
      </div>
    );
  }
}

export default App;
