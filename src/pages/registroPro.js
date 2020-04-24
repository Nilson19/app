import React, { Component } from 'react';
import Select from 'react-select';
import axios from 'axios';

import './css/registroPro.css';

export default class registroPro extends Component {

    state = {
        cedula: '',
        escuela: '',
        nombre: '',
        apellido: '',
        titulo: '',
        correo: '',
        celular: '',
        sexo: '',
        options: []
    }

    async componentDidMount(){
        await axios.get('https://server-97.herokuapp.com/api/escuelas/listar')
        .then((res) =>{
            var op = [];
            op = res.data.data.map((escuela) =>{
                return  {value: escuela.codigo, label: escuela.nombre}
            });
            this.setState({
                options: op
            })
        })
    }

    onChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value,
 
        });
    }

    handleOnChange = (newValue) =>{
        this.setState({
            sexo: newValue.value
         });
    }

    handleOnChange1  = (newValue) =>{
        this.setState({
            escuela: newValue.value
         });
        console.log(this.state.escuela)
    }

    onSubmit = (event) => {
        this.signUp(parseInt(this.state.cedula, 10),
        parseInt(this.state.escuela, 10), 
        this.state.nombre, 
        this.state.apellido, 
        this.state.titulo,
        this.state.correo, 
        parseInt(this.state.celular, 10), 
        this.state.sexo);
        this.rellenarSelect();
        event.preventDefault();
    }

    signUp(cedula, escuela, nombre, apellido, titulo, correo, celular, sexo) {
        const mensaje = {
            cedula,
            escuela, 
            nombre, 
            apellido,
            titulo,
            correo, 
            celular, 
            sexo
        }
        axios.post('https://server-97.herokuapp.com/api/profesores/crear', mensaje)
        .then((res) => {
            console.log(res.data)})
    }

    render() {
        const options =[
            {value: 'Masculino', label: 'Masculino'},
            {value: 'Femenino', label: 'Femenino'}
        ]
        return (
            <div className="contenedor0">
                <div className="contenedor1">
                    <form className = "form" onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <i className="medium material-icons">looks_one</i>
                            <input onChange={this.onChange} type="number" className="form-control" id="formGroupExampleInput" placeholder="cedula" value={this.state.cedula} name="cedula"/>
                        </div>
                        <div className="form-group">
                            <Select className="comboBox" onChange={this.handleOnChange1} options={this.state.options} placeholder="Seleccione una escuela" />
                        </div>
                        <div className="form-group">
                            <i className="medium material-icons">looks_3</i>
                            <input onChange={this.onChange} type="text" className="form-control" id="formGroupExampleInput2" placeholder="nombre" value={this.state.nombre} name="nombre" />
                        </div>
                        <div className="form-group">
                            <i className="medium material-icons">looks_4</i>
                            <input onChange={this.onChange} type="text" className="form-control" id="formGroupExampleInput2" placeholder="apellido" value={this.state.apellido} name="apellido" />
                        </div>
                        <div className="form-group">
                            <i className="medium material-icons">looks_5</i>
                            <input onChange={this.onChange} type="text" className="form-control" id="formGroupExampleInput2" placeholder="titulo" value={this.state.titulo} name="titulo" />
                        </div>
                        <div className="form-group">
                            <i className="medium material-icons">looks_6</i>
                            <input onChange={this.onChange} type="email" className="form-control" id="formGroupExampleInput2" placeholder="correo" value={this.state.correo} name="correo" />
                        </div>
                        <div className="form-group">
                            <i className="medium material-icons">add_ic_call</i>
                            <input onChange={this.onChange} type="tel" className="form-control" id="formGroupExampleInput2" placeholder="celular" value={this.state.celular} name="celular" />
                        </div>
                        <div className="form-group">
                            <Select className="comboBox" onChange={this.handleOnChange} options={options} placeholder="Seleccione su sexo"  />
                        </div>
                        <button type="submit" className="btn btn-outline blue darken-4">Registrar</button>  
                    </form>
                </div>
            </div>
        )
    }
}
