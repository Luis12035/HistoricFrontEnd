import Page from '../Page';
import { useSelector } from 'react-redux';
import Content from '../UI/Content';
const getSecurity = ({security})=>security;
const Dashboard = ()=>{
  const {user } = useSelector(getSecurity);

  return (
    <Page title="Home" showHeader showNavBar backtostate={true} backto='/login' loginstate ={false}>
      <Content>
        <div className="MainContainer" style={{padding: '0.7em' ,textAlign: 'center', height: '100%'}}>
          <div className="ChlidContainer" style={{borderRadius: '15px' ,borderColor: '#9E9E9E', borderStyle: 'solid', borderWidth: '2px', alignItems: 'center', justifyContent: 'center', marginTop: '10em', display: 'block', boxShadow: '2px 2px 8px #9E9E9E'}}>
            <h1>Bienvenido: {user.name + ' ' + user.middlename + ' ' + user.lastname} </h1>
            <div className="AvgContainer" style={{borderColor: 'black' ,borderWidth: '2px', borderStyle:'solid', margin: '0.5em', borderRadius: '15px'}}>
              <h1>Tu promedio es: </h1>
            </div>
          </div>
          
        </div>
      </Content>
    </Page>
  );
}

export default Dashboard;
