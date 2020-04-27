import React, { Component } from 'react';
import axios from 'axios';
import Select from 'react-select';
import {withRouter} from 'react-router-dom';

import './css/Adiciones.css';

class Adiciones extends Component {

    state = {
        cedulaEs: '',
        materiaID: '',
        grupo: '',
        grupos: [],
        estado: 'Matriculada',
        escuelas: [],
        materias: []
    }

    async componentDidMount(){
        await axios.get('https://server-97.herokuapp.com/api/escuelas/listar')
        .then((res) =>{
            var op = [];
            op = res.data.data.map((escuela) =>{
                return  {value: escuela.codigo, label: escuela.nombre}
            });
            this.setState({
                escuelas: op,
                cedulaEs: this.props.location.state.cedula
            })
        })
    }

    handleOnChange = (newValue)=>{
        const mensaje = {
            escuela: newValue.value
        }
        axios.post('https://server-97.herokuapp.com/api/materias/consultar2', mensaje)
        .then((res) =>{
            var op = [];
            op = res.data.data.map((materia) =>{
                return  {value: materia.codigo, label: materia.nombre}
            });
            this.setState({
                materias: op,
            })
        })
    }

    handleOnChange1 = (newValue) =>{
        this.setState({
            materiaID: newValue.value
        })
        const mensaje = {
            materiaID: newValue.value
        }

        axios.post('https://server-97.herokuapp.com/api/asignaciones/consultar', mensaje)
        .then((res) =>{
            var op = [];
            op = res.data.data.map((materia) =>{
                return  {value: materia.grupo, label: materia.grupo}
            });
            this.setState({
                grupos: op,
            })
        }) 
    }

    handleOnChange2 = (newValue) =>{
        this.setState({
            grupo: newValue.value
         });
    }

    onSubmit = (event) => {
        this.matricula(parseInt(this.state.cedulaEs, 10),
        parseInt(this.state.materiaID, 10),
        parseInt(this.state.grupo, 10),
        this.state.estado);
        event.preventDefault();
    }

    matricula(cedulaEs, materiaID, grupo, estado) {
        const mensaje = {
            cedulaEs,
            materiaID,
            grupo,
            estado
        }
        axios.post('https://server-97.herokuapp.com/api/matriculas/crear', mensaje)
        .then((res) => {
            console.log(res.data)})
    }

    render() {
        return (
            <div className="container" id="container">
                <h3>Matricula de materias</h3>
                <form className = "form" onSubmit={this.onSubmit} id="form">
                    <div className="form-group">
                        <Select className="comboBox" onChange={this.handleOnChange} options={this.state.escuelas}  placeholder="Seleccione una escuela" />
                    </div>
                    <div className="form-group">
                        <Select className="comboBox" onChange={this.handleOnChange1} options={this.state.materias}  placeholder="Seleccione una materia" />
                    </div>
                    <div className="form-group">
                        <Select className="comboBox" onChange={this.handleOnChange2} options={this.state.grupos}  placeholder="Seleccione un grupo" />
                    </div>
                    <button type="submit" className="btn btn-outline blue darken-4">Matricular</button>
                </form>
            </div>
        )
    }
}

export default withRouter(Adiciones);