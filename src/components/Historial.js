import React, { Component } from 'react';
import '../css/Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import md5 from 'md5';
import Cookies from 'universal-cookie';

const baseUrl="http://localhost:3001/usuarios";
const cookies = new Cookies();

class Historial extends Component {
    state={
        form:{
            username: '',
            correo:'',
            password: ''
        }
    }

    handleChange=async e=>{
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
    }

    componentDidMount() {
        if(cookies.get('username')){
            window.location.href="./menu";
        }
    }
    

    render() {
        return (
    <div className="containerPrincipal">
        <h1>Agregar Historial</h1>
        <div className="containerSecundario">
          <div className="form-group">
            <label>Año: </label>
            <br />
            <input
              type="text"
              className="form-control"
              name="password"
              onChange={this.handleChange}
            />
            <br />
            <label>Periodo: </label>
            <br />
            <input
              type="text"
              className="form-control"
              name="password"
              onChange={this.handleChange}
            />
            <br />
            <label>Nombre de la Clase: </label>
            <br />
            <input
              type="text"
              className="form-control"
              name="password"
              onChange={this.handleChange}
            />
            <br />
            <br />
            <label>Promedio de la Clase: </label>
            <br />
            <input
              type="text"
              className="form-control"
              name="password"
              onChange={this.handleChange}
            />
            <br />

            <button className="btn btn-primary" onClick={()=> this.iniciarSesion()}>Agregar</button>
          </div>
        </div>
      </div>
        );
    }
}

export default Historial;