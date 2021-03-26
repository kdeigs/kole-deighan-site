import React, { Component } from 'react';
import './main.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import Home from './Components/Home';
import AboutMe from './Components/AboutMe';



class App extends Component {
  render(){
    return(
      <div>
        <Router>
          <Switch>
          <Route path='/aboutMe'>
              <AboutMe />
          </Route>
        
          <Route path='/'>
            <Home />
          </Route>
            
          </Switch>
        </Router>
        
      </div>
    )
  }
}

export default App;