import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


const About = () => {
       return (
              <div className="table-responsive">
                     <table className="table table-sm">
                            <thead className="table-active">
                                   <tr>
                                   <th scope="Id">#</th>
                                   <th scope="Año">Año</th>
                                   <th scope="Periodo">Periodo</th>
                                   <th scope="Nombre de Clase">Nombre de Clase</th>
                                   <th scope="Promedio de Clase">Promedio de Clase</th>
                            </tr>
                            
                            </thead>
                     </table>
              </div>
       )
}

export default About
