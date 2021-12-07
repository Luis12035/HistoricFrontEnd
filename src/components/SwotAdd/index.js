import { useState } from 'react';
import Page from '../Page';
import Content from '../UI/Content';
import TextBox from '../UI/TextBox';
import { PrimaryButton } from '../UI/Button';
import ComboBox from '../UI/ComboBox';

import { useDispatch } from 'react-redux';
import { addNewHistoric } from '../../store/reducers/historic/actions';
import { useNavigate } from 'react-router';

const SwotAdd = () => {
  const [txtName, setTxtName] = useState();
  const [txtClassCod, setTxtClassCode] = useState();
  const [txtClassName, setTxtClassName] = useState();
  const [txtYear, setTxtYear] = useState();
  const [txtPeriod, setTxtPeriod] = useState('I');
  const [txtCalification, setTxtCalification] = useState();

  //const [txtDesc, setTxtName] = useState();
  //const [txtMeta, setTxtMeta] = useState();
  //const [txtType, setTxtPeriod] = useState('S');

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onChangeHandler = (e)=> {
    const {name, value} = e.target;
    switch(name){
      case "txtName":
        setTxtName(value);
        break;
      case "txtClassCod":
        setTxtClassCode(value);
        break;
      case "txtPeriod":
        setTxtPeriod(value);
        break;
      case "txtClassName":
        setTxtClassName(value);
        break;
      case "txtYear":
        setTxtYear(value);
        break;
      case "txtCalification":
        setTxtCalification(value);
        break;
    }
  }
  const onBtnClick = (e)=> {
    e.preventDefault();
    e.stopPropagation();
    //const curatedSwotMeta = txtClassCod;
    addNewHistoric(dispatch)
    //addNewHistoric(dispatch, txtDesc, curatedSwotMeta, txtType, navigate, "/list" )
  }
  return (
    <Page showHeader showNavBar title={"Add Historic"} backto='/login' backtostate={true}>
      <Content>
        <TextBox
          label="Nombre del alumno"
          placeholder="Nombre del alumno"
          value={txtName}
          name="txtName"
          onChange={onChangeHandler} >
        </TextBox>

        <TextBox
          label="Codigo de clase"
          placeholder="Codigo de clase"
          value={txtClassCod}
          name="txtClassCod"
          onChange={onChangeHandler} >
        </TextBox>

        <TextBox
          label="Nombre de la clase"
          placeholder="Nombre de la clase"
          value={txtClassName}
          name="txtClassName"
          onChange={onChangeHandler} >
        </TextBox>

        <TextBox
          label="Año"
          placeholder="Año cuando curso la clase"
          value={txtYear}
          name="txtYear"
          onChange={onChangeHandler} >
        </TextBox>

        <ComboBox
          label="Periodo"
          name="txtPeriod"
          value={txtPeriod}
          onChange={onChangeHandler}
        >
          <option value="I">Primero</option>
          <option value="II">Segundo</option>
          <option value="III">Tercero</option>
        </ComboBox>

        <TextBox
          label="Calificacion"
          placeholder="Calificacion de la clase"
          value={txtCalification}
          name="txtCalification"
          onChange={onChangeHandler} >
        </TextBox>

        <div style={{ width: "100%", padding: '0.5em', marginTop: '1em' }}>
          <PrimaryButton onClick={onBtnClick}>Agregar</PrimaryButton>
        </div>
      </Content>
    </Page>
  );
}

export default SwotAdd;
