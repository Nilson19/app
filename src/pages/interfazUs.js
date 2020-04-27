import React, { Component } from 'react';
import Adiciones from '../components/Adiciones';
import Matriculas from '../components/Matriculas';
import Configuracion from '../components/Configuracion';
import {withRouter} from 'react-router-dom';
import { Link } from 'react-router-dom';

import './css/interfazUs.css'

class interfazUs extends Component {

    state ={
        user: {}
    }

    componentDidMount(){
        this.setState({
            user: this.props.location.state
        })
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
                                <h6>{this.state.user.nombre}</h6>
                            </li>
                            <li className="tab"><a className="active" href="#test1">Adiciones</a></li>
                            <li className="tab"><a href="#test2">Matriculas</a></li>
                            <li className="tab"><a href="#test3">configuracion</a></li>
                            <li className="tab"><i><Link to="/"><i className="material-icons">power_settings_new</i></Link></i></li>
                        </ul>
                    </div>
                    <div className="col s10 m10 l10" id="rigth">
                        <div className="contenido-tab" id="test1"><Adiciones codigo={this.state.user.cedula} /></div>
                        <div className="contenido-tab" id="test2"><Matriculas codigo={this.state.user.cedula} /></div>
                        <div className="contenido-tab" id="test3"><Configuracion /></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(interfazUs);
