import React, { useState, useEffect} from 'react';
import HomePage from './pages/Homepage/Homepage'
import './App.css'

import {Route, Switch} from 'react-router-dom'

import ShopPage from './pages/shopPage/ShopPage'
import Header from './components/Header/Header.jsx'
import SignInSignUp from './pages/SignInSignUpPage/SignInSignUp';
import { auth } from './firebase/firebase.utils'




const  App = () =>  {

 const [currentUser, setCurrentUser] = useState(null);


 useEffect(() => {

  
  auth.onAuthStateChanged(user => {
    setCurrentUser(user);
    console.log(user);
  }) 
}, [])



  return (
    <div >  
      <Header currentUser={currentUser}/>
      <Switch>
      <Route exact path='/' component={HomePage}/>
       <Route exact path='/home' component={HomePage}/>
       <Route exact path='/shop' component={ShopPage}/>
       <Route exact path='/signin' component={SignInSignUp} />
      </Switch>
    </div>
  );
}

export default App;
