import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route,} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import './index.css';

import Login from './pages/Login';
import interfazUs from './pages/interfazUs';
import interfazAdmin from './pages/interfazAdmin';



const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <Route exact path="/" component={Login}></Route>
    <Route path="/interfazUs" component={interfazUs}></Route>
    <Route path="/interfazAdmin" component={interfazAdmin}></Route>
  </Router>,
  document.getElementById('root')
);

