import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route,} from 'react-router-dom';
import './index.css';

import Login from './pages/Login';
import registroEs from './pages/registroEs';
import registroSchools from './pages/registroSchools';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Router>
    <Route exact path="/" component={Login}></Route>
    <Route path="/registroEs" component={registroEs}></Route>
    <Route path="/registroSchool" component={registroSchools}></Route>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
