import React, { Component } from 'react';
import '../css/Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import md5 from 'md5';
import Cookies from 'universal-cookie';

const baseUrl="http://localhost:3001/usuarios";
const cookies = new Cookies();

class Registro extends Component {
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
          <div class="centrar">
          <div class="wrapper">
          <h2>Registro</h2>
          <form action="#">
            <div class="input-box">
              <input type="text" placeholder="Username" required/>
            </div>
            <div class="input-box">
              <input type="text" placeholder="Correo" required/>
            </div>
            <div class="input-box">
              <input type="password" placeholder="Contraseña" required/>
            </div>
            <div class="input-box button">
              <input type="Submit" value="Registrarse"/>
            </div>
            <div class="text">
              <h3>Ya estás registrado? <a href="/">Iniciar Sesión</a></h3>
            </div>
          </form>
        </div>
        </div>
        );
    }
}

export default Registro;