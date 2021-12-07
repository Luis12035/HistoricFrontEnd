import { useSelector, useDispatch } from 'react-redux';
import Content from '../UI/Content';

import { useEffect } from 'react';
import Page from '../Page';
import { List, ListItem } from '../UI/List';
import { fetchHistoricData } from '../../store/reducers/historic/actions';
const Loader = ()=>{
  return (<div>Cargando ....</div>);
}

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
        <Page title="Historico" showHeader showNavBar>
      <Content>
          
                  {historic.items.map((i)=>{
                      return (<ListItem 
                        key = {i._id}
                        
                        > 
                        <br/>{i.nombre}<br/>
                        {i.historial.map((h)=>{
                            return (
                            <ListItem key={h.Codigo}>
                                {h.Codigo}<br/>
                                {h.Clase}<br/>
                                {h.Año}<br/>
                                {h.Periodo}<br/>
                                {h.Nota}                                
                             </ListItem>)
                        })}    
                        {i.user_id}<br/>
                        
                        </ListItem>) 
                      
                      
                  })}
       
      </Content>
    </Page>
    );
}

export default HistoricList;
/* { historico.nombre}
        <br/>*/
        /*{historic.items.map((i)=>{
           return (<List
                key={i._id}                          
                name={i.name}
                loader={(<Loader />)}
                dataLength={5}
           />)
       })}*/