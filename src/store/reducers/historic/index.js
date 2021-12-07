const initialState = {
  name: "",
  items: []
}

const historicReducer = (state=initialState, action)=>{
  const {type, payload} = action;
  switch( type ){
    case "HISTORIC_START_FETCH":
      return {
        ...state
      }
    case "HISTORIC_FETCH_SUCCESS":
      
      return {
        ...state,
        items: [...payload]
      }
    case "HISTORIC_LIST_CLEAR":
      return{...initialState};
  default:
    return state;
  }
}

export default historicReducer;
