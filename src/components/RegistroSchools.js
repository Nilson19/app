import React, { Component } from 'react';
import axios from 'axios';

import './css/registroEs.css';

export default class RegistroSchools extends Component {

    state = {
        codigo: '',
        nombre: '',
    }

    onChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value,
 
         });
    }

    onSubmit = (event) => {
        this.registrarEs(parseInt(this.state.codigo, 10), this.state.nombre, );
        event.preventDefault();
    }

    registrarEs(codigo, nombre) {
        const mensaje = {
            codigo,
            nombre
        }
        axios.post('https://server-97.herokuapp.com/api/escuelas/crear', mensaje)
        .then((res) => {
            console.log(res.data)})
    }

    render() {
        return (
            <div className = "container">
                <h3>Registro de escuelas</h3>
                <form className = "form" onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <i className="medium material-icons">looks_one</i>
                        <input onChange={this.onChange} type="number" className="form-control" id="formGroupExampleInput" placeholder="codigo" value={this.state.codigo} name="codigo"/>
                    </div>
                    <div className="form-group">
                        <i className="medium material-icons">looks_two</i>
                        <input onChange={this.onChange} type="text" className="form-control" id="formGroupExampleInput2" placeholder="nombre" value={this.state.nombre} name="nombre" />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-outline blue darken-4">Registrar</button>
                    </div>  
                </form>
            </div>
        )
    }
}
