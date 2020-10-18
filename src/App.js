import React from 'react';
import HomePage from './pages/Homepage/Homepage'
import './App.css'

import {Route, Switch} from 'react-router-dom'
import HatsPage from './pages/HatsPage/HatsPage'






function App() {
  return (
    <div >  
      <Switch>
      <Route exact path='/' component={HomePage}/>
       <Route exact path='/shop/hats' component={HatsPage}/>
       <Route exact path='/home' component={HomePage}/>
       
      </Switch>
    </div>
  );
}

export default App;
