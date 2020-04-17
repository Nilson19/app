import React, { Component } from 'react';
import Select from 'react-select';
import axios from 'axios';

import './css/registroClass.css';

export default class registroClass extends Component {

    state = {
        codigo: '',
        escuela: '',
        nombre: '',
        creditos: '',
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

    handleOnChange1  = (newValue) =>{
        this.setState({
            escuela: newValue.value
         });
    }

    onSubmit = (event) => {
        this.registrarClass(parseInt(this.state.codigo, 10), 
        parseInt(this.state.escuela, 10),
        this.state.nombre,
        this.state.creditos);
        event.preventDefault();
    }

    registrarClass(codigo, escuela, nombre, creditos) {
        const mensaje = {
            codigo,
            escuela,
            nombre,
            creditos
        }
        axios.post('https://server-97.herokuapp.com/api/materias/crear', mensaje)
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
                            <Select className="comboBox" onChange={this.handleOnChange1} options={this.state.options} placeholder="Seleccione una escuela" />
                        </div>
                        <div className="form-group">
                            <i className="medium material-icons">account_box</i>
                            <input onChange={this.onChange} type="text" className="form-control" id="formGroupExampleInput2" placeholder="nombre" value={this.state.nombre} name="nombre" />
                        </div>
                        <div className="form-group">
                            <i className="medium material-icons">account_box</i>
                            <input onChange={this.onChange} type="number" className="form-control" id="formGroupExampleInput2" placeholder="creditos" value={this.state.nombre} name="creditos" />
                        </div>
                        <button type="submit" className="btn btn-outline-primary">Registrar</button>  
                    </form>
                </div>
            </div>
        )
    }
}