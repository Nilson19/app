import React, { Component } from 'react';
import axios from 'axios';

export default class registroSchools extends Component {

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
            <div className = "contenedor0">
                <div className = "contenedor1">
                    <form className = "form" onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <i className="medium material-icons">chrome_reader_mode</i>
                            <input onChange={this.onChange} type="number" className="form-control" id="formGroupExampleInput" placeholder="codigo" value={this.state.codigo} name="codigo"/>
                        </div>
                        <div className="form-group">
                            <i className="medium material-icons">account_box</i>
                            <input onChange={this.onChange} type="text" className="form-control" id="formGroupExampleInput2" placeholder="nombre" value={this.state.nombre} name="nombre" />
                        </div>
                        <button type="submit" className="btn btn-outline-primary">Registrar</button>  
                    </form>
                </div>
            </div>
        )
    }
}
