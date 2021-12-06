import { privateAxios } from "../../utils/Axios";


export const addNewHistoric = (dispatch, nombre, historyMetaobjet, navigate, to)=>{
  dispatch(
    {type:"HISTORIC_ADD_START", payload:null}
  );
  privateAxios.post('/api/historic/new', {nombre, historyMetaobjet})
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
/*
export const fetchHistoricData = (dispatch, page, pageItem, text)=>{
  dispatch(
    {
      type:"HISTORIC_START_FETCH",
      payload:null
    }
  )
  privateAxios.get(`/api/swot/facet/${page}/${pageItem}`)
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
}*/