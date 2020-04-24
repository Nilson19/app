import React, { Component } from 'react';
import axios from 'axios';
import Select from 'react-select';

import './css/Configuracion.css';

export default class Configuracion extends Component {

    state = {
        nombre: '',
        apellido: '',
        correo: '',
        celular: '',
        sexo: '',
    }

    onChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
         });
    }

    handleOnChange = (newValue) =>{
        this.setState({
            sexo: newValue.value
         });
    }

    onSubmit = (event) => {
        this.actualizar(this.state.nombre, 
        this.state.apellido, 
        this.state.correo, 
        parseInt(this.state.celular, 10), 
        this.state.sexo);
        event.preventDefault();
    }

    actualizar(nombre, apellido, correo, celular, sexo) {
        const mensaje = {
            nombre, 
            apellido, 
            correo, 
            celular, 
            sexo
        }
        axios.post('https://server-97.herokuapp.com/api/estudiantes/actualizar', mensaje)
        .then((res) => {
            console.log(res.data)})
    }
    render() {
        const options =[
            {value: 'Masculino', label: 'Masculino'},
            {value:'Femenino', label: 'Femenino'}
        ]
        return (
            <div className="configuracion">
                <form className = "form" onSubmit={this.onSubmit}>
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
                        <Select className="comboBox" onChange={this.handleOnChange} options={options}  placeholder="Seleccione su sexo" />
                    </div>
                    <button type="submit" className="btn btn-outline blue darken-4">Actualizar datos</button>  
                </form>
            </div>
        )
    }
}
