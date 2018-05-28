import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import './assets/css/app.css';

import Header from './atoms/Header';
import Footer from './atoms/Footer';
import NavBar from './atoms/NavBar';



//components
import {GeneralPolls} from './templates/GeneralPolls';
import {Error} from './pages/Error';


 export default class App extends Component {
  render() {
    return (
      <React.Fragment>
      <Header />
      <NavBar />
      <div className="body">
      <Switch>
        <Route exact path="/" component={GeneralPolls} />
        <Route path="/GeneralPolls" component={GeneralPolls} />
        <Route component={Error} />
      </Switch>
      <Footer />
      </div>
      </React.Fragment>

    );
  }
}
