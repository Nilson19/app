import React, { Component } from 'react';
import Select from 'react-select';
import axios from 'axios';

import './css/registroEs.css';

export default class RegistroEs extends Component {

    state = {
        cedula: '',
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
         console.log(this.state.sexo)
    }

    onSubmit = (event) => {
        this.signUp(parseInt(this.state.cedula, 10), 
        this.state.nombre, 
        this.state.apellido, 
        this.state.correo, 
        parseInt(this.state.celular, 10), 
        this.state.sexo);
        event.preventDefault();
        this.props.history.push('/')
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
        const options =[
            {value: 'Masculino', label: 'Masculino'},
            {value:'Femenino', label: 'Femenino'}
        ]
        return (
            <div className="container" id="container">
                <h3>Registro de estudiantes</h3>
                <form className = "form" onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <i className="medium material-icons">looks_one</i>
                        <input onChange={this.onChange} type="number" className="form-control" id="formGroupExampleInput" placeholder="cedula" value={this.state.cedula} name="cedula"/>
                    </div>
                    <div className="form-group">
                        <i className="medium material-icons">looks_two</i>
                        <input onChange={this.onChange} type="text" className="form-control" id="formGroupExampleInput2" placeholder="nombre" value={this.state.nombre} name="nombre" />
                    </div>
                    <div className="form-group">
                        <i className="medium material-icons">looks_3</i>
                        <input onChange={this.onChange} type="text" className="form-control" id="formGroupExampleInput2" placeholder="apellido" value={this.state.apellido} name="apellido" />
                    </div>
                    <div className="form-group">
                        <i className="medium material-icons">looks_4</i>
                        <input onChange={this.onChange} type="email" className="form-control" id="formGroupExampleInput2" placeholder="correo" value={this.state.correo} name="correo" />
                    </div>
                    <div className="form-group">
                        <i className="medium material-icons">looks_5</i>
                        <input onChange={this.onChange} type="tel" className="form-control" id="formGroupExampleInput2" placeholder="celular" value={this.state.celular} name="celular" />
                    </div>
                    <div className="form-group">
                        <Select className="comboBox" onChange={this.handleOnChange} options={options}  placeholder="Seleccione su sexo" />
                    </div>
                    <div className="form-group">
                        <button type="submit"  className="btn btn-outline blue darken-4">Registrar</button> 
                    </div>     
                </form>
            </div>
        )
    }
}
