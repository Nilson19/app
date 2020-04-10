import React, { Component } from 'react'
import axios from 'axios';

export default class registroEs extends Component {

    state = {
        cedula: '',
        nombre: '',
        apellido: '',
        correo: '',
        celular: '',
        sexo: ''
    }

    onChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value,
 
         });
    }

    onSubmit = (event) => {
        this.signUp(parseInt(this.state.cedula, 10), 
        this.state.nombre, 
        this.state.apellido, 
        this.state.correo, 
        parseInt(this.state.celular, 10), 
        this.state.sexo);
        event.preventDefault();
    }

    signUp(cedula, nombre, apellido, correo, celular, sexo) {
        const mensaje = {
            cedula, 
            nombre, 
            apellido, 
            correo, 
            celular, 
            sexo
        }
        axios.post('https://server-97.herokuapp.com/api/estudiantes/crear', mensaje)
        .then((res) => {
            console.log(res.data)})
    }

    render() {
        return (
            <div className="contenedor0">
                <div className="contenedor1">
                    <form className = "form" onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <i className="medium material-icons">chrome_reader_mode</i>
                            <input onChange={this.onChange} type="number" className="form-control" id="formGroupExampleInput" placeholder="cedula" value={this.state.cedula} name="cedula"/>
                        </div>
                        <div className="form-group">
                            <i className="medium material-icons">account_box</i>
                            <input onChange={this.onChange} type="text" className="form-control" id="formGroupExampleInput2" placeholder="nombre" value={this.state.nombre} name="nombre" />
                        </div>
                        <div className="form-group">
                            <i className="medium material-icons">account_box</i>
                            <input onChange={this.onChange} type="text" className="form-control" id="formGroupExampleInput2" placeholder="apellido" value={this.state.apellido} name="apellido" />
                        </div>
                        <div className="form-group">
                            <i className="medium material-icons">account_box</i>
                            <input onChange={this.onChange} type="email" className="form-control" id="formGroupExampleInput2" placeholder="correo" value={this.state.correo} name="correo" />
                        </div>
                        <div className="form-group">
                            <i className="medium material-icons">account_box</i>
                            <input onChange={this.onChange} type="tel" className="form-control" id="formGroupExampleInput2" placeholder="celular" value={this.state.celular} name="celular" />
                        </div>
                        <div className="form-group">
                            <i className="medium material-icons">account_box</i>
                            <input onChange={this.onChange} type="text" className="form-control" id="formGroupExampleInput2" placeholder="sexo" value={this.state.sexo} name="sexo" />
                        </div>
                        <button type="submit" className="btn btn-outline-primary">Registrar</button>  
                    </form>
                </div>
            </div>
        )
    }
}
