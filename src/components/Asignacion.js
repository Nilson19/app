import React, { Component } from 'react'
import axios from 'axios';
import Select from 'react-select';

import './css/registroEs.css';

export default class Asignacion extends Component {

    state = {
        materiaID: '',
        profesorID: '',
        grupo: '',
        materias: [],
        profesores: []
    }

    async componentDidMount(){
        await axios.get('https://server-97.herokuapp.com/api/materias/listar')
        .then((res) =>{
            var op = [];
            op = res.data.data.map((materias) =>{
                return  {value: materias.codigo, label: materias.nombre}
            });
        
            this.setState({
                materias: op
            })
        })
        await axios.get('https://server-97.herokuapp.com/api/profesores/listar')
        .then((res) =>{
            var op = [];
            op = res.data.data.map((profesores) =>{
                return  {value: profesores.cedula, label: profesores.nombre}
            });
            this.setState({
                profesores: op
            })
        })
    }

    onChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value,
 
         });
    }

    handleOnChange1  = (newValue) =>{
        this.setState({
            materiaID: newValue.value
         });
    }

    handleOnChange2  = (newValue) =>{
        this.setState({
            profesorID: newValue.value
         });
    }

    onSubmit = (event) => {
        this.registrarAsig(parseInt(this.state.materiaID, 10), 
        parseInt(this.state.profesorID, 10),
        parseInt(this.state.grupo, 10));
        event.preventDefault();
    }

    registrarAsig(materiaID, profesorID, grupo) {
        const mensaje = {
            materiaID,
            profesorID,
            grupo
        }
        axios.post('https://server-97.herokuapp.com/api/asignaciones/crear', mensaje)
        .then((res) => {
            console.log(res.data)})
    }

    render() {
        return (
            <div className="contenedor0">
                <div className="contenedor5">
                    <h3>Registro de asignaciones</h3>
                    <form className = "form" onSubmit={this.onSubmit}>
                    <div className="form-group">
                            <Select className="comboBox" onChange={this.handleOnChange1} options={this.state.materias} placeholder="Seleccione una materia" />
                        </div>
                        <div className="form-group">
                            <Select className="comboBox" onChange={this.handleOnChange2} options={this.state.profesores} placeholder="Seleccione un profesor" />
                        </div>
                        <div className="form-group">
                            <i className="medium material-icons">account_box</i>
                            <input onChange={this.onChange} type="number" className="form-control" id="formGroupExampleInput2" placeholder="grupo" value={this.state.grupo} name="grupo" />
                        </div>
                        <button type="submit" className="btn btn-outline blue darken-4">Registrar</button>  
                    </form>
                </div>
            </div>
        )
    }
}
