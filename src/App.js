import React from 'react'
import { Switch, Route } from 'react-router-dom'

import HomePage from './pages/homepage/Homepage.component'
import ShopPage from './pages/shop/Shop.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import Header from './components/header/header.component'

import { auth } from './firebase/firebase.utils'

import './App.css'

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscreFromAuth = auth.onAuthStateChanged( user => {
      this.setState({currentUser: user})
      console.log('auth change',user)
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    )
  }
}

export default App
