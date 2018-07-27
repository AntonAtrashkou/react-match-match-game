import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import axios from 'axios';

import Login from '../Login';
import Menu from '../Menu';
import Game from '../Game';

import './App.scss';

export default class App extends Component {
  render() {
    return (
      <div className="mmg">

        <main>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/menu" component={Menu} />
            <Route exact path="/game" component={Game} />
            {/* <Route exact path="/score" component={Score} />
            <Route exact path="/victory" component={Victory} /> */}
          </Switch>
        </main>
      </div>
    );
  }
}
