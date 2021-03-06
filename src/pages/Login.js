import React, { Component } from 'react'
import axios from 'axios';
import './css/Login.css';
import { Link } from 'react-router-dom';

export default class Login extends Component {

    state = {
        correo: '',
        cedula: '',
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
            if(res.data.data != null){
                // eslint-disable-next-line
                this.props.history.push({
                    pathname: '/interfazUs',
                    state: res.data.data
                })
            }
            else{
                alert('Datos incorrectos')
            }    
        })
    }

    

    render() {
        return (
            <div className="container">
                <h3>Iniciar sesion</h3>
                <form className = "form" onSubmit={this.onSubmit} id="form">
                    <div className="form-group">
                        <i className="large material-icons">account_circle</i>
                    </div>
                    <div className="form-group">
                        <i className="medium material-icons">alternate_email</i>
                        <input onChange={this.onChange} type="email" className="form-control" id="formGroupExampleInput" placeholder="correo" value={this.state.correo} name="correo"/>
                    </div>
                    <div className="form-group">
                        <i className="medium material-icons">https</i>
                        <input onChange={this.onChange} type="password" className="form-control" id="formGroupExampleInput2" placeholder="password" value={this.state.cedula} name="cedula" />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-outline blue darken-4">Iniciar</button> 
                    </div>
                    <div className="form-group">
                        <Link  to='/registroEs'>Registrate ahora</Link>
                    </div>  
                </form>
            </div>
        )
    }
}
