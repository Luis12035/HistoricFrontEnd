import { useSelector, useDispatch } from 'react-redux';
import Content from '../UI/Content';

import { useEffect } from 'react';
import Page from '../Page';
import { List, ListItem } from '../UI/List';
import { fetchHistoricData } from '../../store/reducers/historic/actions';
const Loader = ()=>{
  return (<div>Cargando ....</div>);
}
let sum, avg, counter;
const getSecurity = ({ security }) => security;

const HistoricList = ()=>{
    const historic  = useSelector(({ historic }) => historic);
    const { user } = useSelector(getSecurity);
    console.log(user);


    const dispatch = useDispatch();
        
    const getAll = ()=>{
        console.log("Loading More");
        fetchHistoricData(dispatch)
       
    };
    

    useEffect(()=>{
        
            getAll();
        
      }, []);

   
    return(
      
        <Page title="Historico" showHeader showNavBar loginstate={false} backtostate={true} backto='/login'>
      <Content>
      <div className="MainContainer" style={{textAlign: 'center', marginTop: '3em', marginBottom: '1em'}}>
          <div className="ChlidContainer" style={{borderRadius: '15px' ,borderColor: '#9E9E9E', borderStyle: 'solid', borderWidth: '2px', alignItems: 'center', justifyContent: 'center', display: 'block', boxShadow: '2px 2px 8px #9E9E9E'}}>
            <h1>Bienvenido: {user.name + ' ' + user.middlename + ' ' + user.lastname} </h1>
          </div>
        </div>

        <div className="MainConteiner" style={{borderWidth: '1px', marginTop: '0.3em', padding: '0.4em', borderRadius: '14px', boxShadow: '2px 2px 8px #9E9E9E'}}>
        <div className="MainListCointainer" style={{display: 'flex', marginTop: '0.3em'}}>
          <div style={{borderStyle: 'solid', borderColor: 'black', borderWidth: '1px 1px 0.5px 0.5px', width: '100%'}}>
            Codigo Clase
          </div>
          <div style={{borderStyle: 'solid', borderColor: 'black', borderWidth: '1px 1px 0.5px 0.5px', width: '100%'}}>
            Clase
          </div>
          <div style={{borderStyle: 'solid', borderColor: 'black', borderWidth: '1px 1px 0.5px 0.5px', width: '100%'}}>
            A??o
          </div>
          <div style={{borderStyle: 'solid', borderColor: 'black', borderWidth: '1px 1px 0.5px 0.5px', width: '100%'}}>
            Periodo
          </div>
          <div style={{borderStyle: 'solid', borderColor: 'black', borderWidth: '1px 1px 0.5px 0.5px', width: '100%'}}>
            Nota
          </div>
        </div>  
                  {historic.items.map((i)=>{
                      return (<ListItem key = {i._id}>
                        {i.historial.map((h)=>{
                            return (
                            <ListItem key={h.Codigo} style={{}}>
                              <div className="MainListCointainer" style={{display: 'flex', borderWidth: '2px'}}>
                                <div style={{borderStyle: 'solid', borderColor: 'black', borderWidth: '1px 0.5px 0.5px 1px', width: '100%'}}>
                                  {h.Codigo}
                                </div>
                                <div style={{borderStyle: 'solid', borderColor: 'black', borderWidth: '1px 0.5px 0.5px 1px', width: '100%'}}>
                                  {h.Clase}
                                </div>
                                <div style={{borderStyle: 'solid', borderColor: 'black', borderWidth: '1px 0.5px 0.5px 1px', width: '100%'}}>
                                  {h.A??o}
                                </div>
                                <div style={{borderStyle: 'solid', borderColor: 'black', borderWidth: '1px 0.5px 0.5px 1px', width: '100%'}}>
                                  {h.Periodo}
                                </div>
                                <div style={{borderStyle: 'solid', borderColor: 'black', borderWidth: '1px 0.5px 0.5px 1px', width: '100%'}}>
                                  {h.Nota} 
                                </div>
                              </div> 
                             </ListItem>)
                        })}                            
                        </ListItem>) 
                      
                      
                  })}
        </div>    
      </Content>
    </Page>
    );
}

export default HistoricList;
