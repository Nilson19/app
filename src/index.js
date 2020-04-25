import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route,} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import './index.css';

import Login from './pages/Login';
import registroEs from './pages/registroEs';
import registroSchools from './pages/registroSchools';
import registroPro from './pages/registroPro';
import registroClass from './pages/registroClass';
import Asignacion from './pages/Asignacion';
import interfazUs from './pages/interfazUs';




const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <Route exact path="/" component={Login}></Route>
    <Route path="/registroEs" component={registroEs}></Route>
    <Route path="/registroSchool" component={registroSchools}></Route>
    <Route path="/registroPro" component={registroPro}></Route>
    <Route path="/registroClass" component={registroClass}></Route>
    <Route path="/interfazUs" component={interfazUs}></Route>
    <Route path="/asignaciones" component={Asignacion}></Route>
  </Router>,
  document.getElementById('root')
);

