import React from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import './App.css';
import Login from './components/Login';
import Registro from './components/Registro';
import About from './components/About';
import Online from './components/Online';
import Offline from './components/Offline';
import Contact from './components/Contact';
import Home from './components/Home';
import Historial from './components/Historial';
import Navbarmenu from './components/menu/Navbarmenu';

function App() {
  return (
    <div>
      <Router basename="/">
        {/* Add Menu Component */}
       
        <Switch> 
        <Route exact path="/" component={Login}/>
          <Route path="/Registro" component={Registro}/>
          <div>
          <Navbarmenu />
          <Route path="/About" component={About}/>
          <Route path="/Home" component={Home}/>
          <Route path="/Online" component={Online}/>
          <Route path="/Offline" component={Offline}/>
          <Route path="/Contact" component={Contact}/>
          <Route exact path="/historial" component={Historial}/>
          </div>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
