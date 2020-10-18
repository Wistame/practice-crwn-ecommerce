import React from 'react';
import HomePage from './pages/Homepage/Homepage'
import './App.css'

import {Route, Switch} from 'react-router-dom'
import HatsPage from './pages/HatsPage/HatsPage'
import ShopPage from './pages/shopPage/ShopPage'
import Header from './components/Header/Header.jsx'





function App() {
  return (
    <div >  
      <Header />
      <Switch>
      <Route exact path='/' component={HomePage}/>
       <Route exact path='/shop/hats' component={HatsPage}/>
       <Route exact path='/home' component={HomePage}/>
       <Route exact path='/shop' component={ShopPage}/>
       
      </Switch>
    </div>
  );
}

export default App;
