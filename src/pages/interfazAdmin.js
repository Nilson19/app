import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import RegistroSchools from '../components/RegistroSchools';
import RegistroPro from '../components/RegistroPro';
import RegistroClass from '../components/RegistroClass';
import Asignacion from '../components/Asignacion';

import './css/interfazUs.css'

export default class interfazAdmin extends Component {
    componentDidMount(){
        const M = window.M;
        M.AutoInit();
    }

    render() {
        return (
            <div className="interfazUs">
                <div className="row" id="row">
                    <div className="col s2 m2 l2" id="left">
                        <ul className="tabs">
                        <li className="datosCuenta">
                                <div className="imagen">
                                <i className="large material-icons">account_circle</i>
                                </div>
                                <h6>Admin</h6>
                            </li>
                            <li className="tab"><a href="#test1">Escuelas</a></li>
                            <li className="tab"><a  href="#test2">Profesores</a></li>
                            <li className="tab"><a href="#test3">Clases</a></li>
                            <li className="tab"><a href="#test4">Asignaciones</a></li>
                            <li className="tab"><i><Link to="/"><i className="material-icons">power_settings_new</i></Link></i></li>
                        </ul>
                    </div>
                    <div className="col s10 m10 l10" id="rigth">
                        <div className="contenido-tab" id="test1"><RegistroSchools /></div>
                        <div className="contenido-tab" id="test2"><RegistroPro /></div>
                        <div className="contenido-tab" id="test3"><RegistroClass /></div>
                        <div className="contenido-tab" id="test4"><Asignacion /></div>
                    </div>
                </div>
            </div>
        )
    }
}
