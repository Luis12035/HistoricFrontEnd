import { privateAxios } from "../../utils/Axios";

export const addNewHistoric = (dispatch,Codigo, Clase, Año, Periodo,Nota, navigate, to)=>{
  dispatch(
    {type:"HISTORIC_ADD_START", payload:null}
  );
  privateAxios.post('/api/historic/new', { Codigo, Clase, Año, Periodo,Nota})
    .then(({data})=>{
      console.log(data);
      dispatch(
        {
          type:"HISTORIC_ADD_SUCCESS",
          payload:null
        }
      );
      dispatch({ type:"HISTORIC_LIST_CLEAR", payload:null});
      navigate(to);
    })
    .catch((err)=>{
      console.log(err);
      dispatch(
        {type:"HISTORIC_ADD_ERROR", payload:null}
      )
    });
}
export const fetchHistoricData = (dispatch)=>{
  dispatch(
    {
      type:"HISTORIC_START_FETCH",
      payload:null
    }
  )
  privateAxios.get('/api/historic/all')
  .then(({data})=>{
    console.log(data);
    dispatch(
      {
        type:"HISTORIC_FETCH_SUCCESS",
        payload: data
      }
    )
  })
  .catch((err)=>{
    console.log(err);
    dispatch(
      {
        type:"HISTORIC_FETCH_ERROR",
        payload: ["Error al traer Info"]
      }
    )
  });
}
