import React from 'react';
import HomePage from './pages/Homepage/Homepage'
import './App.css'

import {Route, Switch} from 'react-router-dom'





function App() {
  return (
    <div >  
      <Switch>
       <Route exact path='/hats' component={HomePage}/>
       <Route exact path='/home' component={HomePage}/>
       <Route exact path='/' component={HomePage}/>
        </Switch>
    </div>
  );
}

export default App;
