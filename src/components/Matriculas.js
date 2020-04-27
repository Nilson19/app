import React, { Component } from 'react';
import DataTable from 'react-data-table-component';
import { withRouter } from 'react-router-dom';
import Axios from 'axios';

import './css/Matriculas.css';

class Matriculas extends Component {

  state = {
    data: [],
    columns: []
  }

  async componentDidMount() {

    const mensaje = {
      cedulaEs: this.props.location.state.cedula
    }
    await Axios.post('https://server-97.herokuapp.com/api/matriculas/consultar', mensaje)
      .then((res) => {
        var op = [];
        console.log(res.data)
        op = res.data.data.map((matricula) => {
          return {
            id: matricula.materiaID, nombre: matricula.Materium.nombre,
            grupo: matricula.grupo,
            estado: matricula.estado,
            nota: matricula.nota,
            fechaC: matricula.fechaC,
            fechaU: matricula.fechaU
          }
        });
        this.setState({
          data: op,
          columns: [
            {
              name: 'Codigo',
              selector: 'id',
              sortable: true,
            },
            {
              name: 'Nombre',
              selector: 'nombre',
              sortable: true,
            },
            {
              name: 'Grupo',
              selector: 'grupo',
              sortable: true,
            },
            {
              name: 'Estado',
              selector: 'estado',
              sortable: true,
            },
            {
              name: 'Nota',
              selector: 'nota',
              sortable: true,
            },
            {
              name: 'fechaC',
              selector: 'fechaC',
              sortable: true,
            },
            {
              name: 'fechaU',
              selector: 'fechaU',
              sortable: true,
            }
          ]
        })
      })
  }
  render() {

    return (
      <div className="matricuals">
        <DataTable 
          title="Tabulado"
          columns={this.state.columns}
          data={this.state.data}
        />
      </div>
    )
  }
}

export default withRouter(Matriculas);
