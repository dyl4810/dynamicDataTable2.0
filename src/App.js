import React, { Component } from 'react';
import './styles/App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './styles/App.css'
import Contacts from './components/Contacts'
import SideNavArea from './components/SideNavMenu/SideNavArea'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <SideNavArea/>
        <Switch>
          <Route path='/contacts' component={Contacts}/>
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
