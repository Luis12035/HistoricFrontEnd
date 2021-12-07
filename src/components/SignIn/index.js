import { useState } from 'react'

import { publicAxios } from '../../store/utils/Axios';

import Page from '../Page';
import TextBox from '../UI/TextBox';
import Name from '../UI/Name';
import MiddleName from '../UI/MiddleName';
import LastName from '../UI/LastName';
import Age from '../UI/Age';
import StdyPlace from '../UI/StdyPlace';
import Password from '../UI/Password';
import Content from '../UI/Content';
import { PrimaryButton } from '../UI/Button';

import { useSelector, useDispatch } from 'react-redux';

const getSecurity = ({ security }) => security;
const SignIn = () => {

  const [txtCorreo, setTxtCorreo] = useState("");
  const [txtPassword, setTxtPassword] = useState("");
  const [txtName, setTxtName ]= useState("");
  const [txtMiddlename, setTxtMiddlename] = useState(""); 
  const [txtLastname, setTxtLastname] = useState(""); 
  const [txtAge, setTxtAge ]= useState("");
  const [txtStdyPlace, setTxtStdyPlace ]= useState("");

  const security = useSelector(getSecurity);
  const dispatch = useDispatch();

  const onBtnClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(
      {
        type: "SEC_SIGNIN_FETCH",
        payload: null,
      }
    );
    publicAxios.post(
      '/api/sec/signin',
      {
        email: txtCorreo,
        name: txtName,
        middlename: txtMiddlename, 
        lastname: txtLastname, 
        age: txtAge, 
        stdyPlace: txtStdyPlace,
        pswd: txtPassword,
      }
    )
      .then(
        ({data}) => {
          console.log(data)
          dispatch(
            {
              type: "SEC_SIGNIN_SUCCESS"
            }
          );
        }
      )
      .catch(
        (err) => {
          console.log(err);
          dispatch(
            {
              type: "SEC_SIGNIN_ERROR",
              payload: err,
            }
          );
        }
      );


  };
  const onChangeHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.target.name === "txtCorreo") {
      setTxtCorreo(e.target.value);
    } else if (e.target.name === "txtPassword") {
      setTxtPassword(e.target.value);
    } else if (e.target.name === "txtName") {
      setTxtName(e.target.value);
    } else if (e.target.name === "txtMiddlename") {
      setTxtMiddlename(e.target.value);
    } else if (e.target.name === "txtLastname") {
      setTxtLastname(e.target.value);
    } else if (e.target.name === "txtAge") {
      setTxtAge(e.target.value);
    } else {
      setTxtStdyPlace(e.target.value);
    }
  }

  return (
    <Page showHeader={true} title="Crear Cuenta" backtostate={true} backto='/login' showNavBar>
      <Content>
        <TextBox 
          label="Correo Electrónico"
          value={txtCorreo}
          placeholder="Correo Electrónico Valido"
          onChange={onChangeHandler}
          name="txtCorreo"
        />
        <Password 
          label="Contraseña"
          value={txtPassword}
          placeholder="Contraseña"
          onChange={onChangeHandler}
          name="txtPassword"
        />
        <Name 
          label="Nombre"
          value={txtName}
          placeholder="Nombre"
          onChange={onChangeHandler}
          name="txtName"
        />
        <MiddleName 
          label="Segundo nombre"
          value={txtMiddlename}
          placeholder="Segundo nombre"
          onChange={onChangeHandler}
          name="txtMiddlename"
        />
        <LastName 
          label="Apellido"
          value={txtLastname}
          placeholder="Apellido"
          onChange={onChangeHandler}
          name="txtLastname"
        />
        <Age 
          label="Edad"
          value={txtAge}
          placeholder="Edad"
          onChange={onChangeHandler}
          name="txtAge"
        />
        <StdyPlace 
          label="Lugar de estudio"
          value={txtStdyPlace}
          placeholder="Lugar de estudio"
          onChange={onChangeHandler}
          name="txtStdyPlace"
        />
        
        <div style={{ width: "100%", padding: '0.5em', marginTop: '1em' }}>
          <PrimaryButton onClick={onBtnClick}>Crear Cuenta</PrimaryButton>
        </div>
      </Content>
    </Page>
  );
}

export default SignIn
