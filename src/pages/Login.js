import React, { Component } from 'react'
import axios from 'axios';
import './Login.css';

export default class Login extends Component {

    state = {
        correo: '',
        cedula: ''
    }

    onSubmit = (event) => {
        this.signIn(this.state.correo, parseInt(this.state.cedula, 10));
        event.preventDefault();
    }

    onChange = (event) => {
        this.setState({
           [event.target.name] : event.target.value,

        });
    }

    signIn(correo, cedula) {
        const mensaje = {
            correo,
            cedula
        }
        axios.post('https://server-97.herokuapp.com/api/estudiantes/Login', mensaje)
        .then((res) => {
            console.log(res.data)})
    }

    

    render() {
        return (
            <div className="contenedor0">
                <div className="contenedor1">

                </div>
                <div className="contenedor2">
                    <form className = "form" onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <i className="medium material-icons">chrome_reader_mode</i>
                            <input onChange={this.onChange} type="text" className="form-control" id="formGroupExampleInput" placeholder="correo" value={this.state.correo} name="correo"/>
                        </div>
                        <div className="form-group">
                            <i className="medium material-icons">account_box</i>
                            <input onChange={this.onChange} type="password" className="form-control" id="formGroupExampleInput2" placeholder="password" value={this.state.cedula} name="cedula" />
                        </div>
                        <button type="submit" className="btn btn-outline-primary">Iniciar</button>  
                    </form>
                </div>
            </div>
        )
    }
}
