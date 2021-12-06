const initialState = {
  hasMore:true,
  items:[],
  fetching:false,
  hasErrors:false,
  errors:[],
  currentPage:0,
  pageSize:15,
  totalPages:0,
  totalDocs:0
}

const historicReducer = (state=initialState, action)=>{
  const {type, payload} = action;
  switch( type ){
    case "HISTORIC_START_FETCH":
      return {
        ...state,
        fetching:true,
        hasErrors:false,
        errors:[]
      }
    case "HISTORIC_FETCH_SUCCESS":
      const totalPages = (Math.ceil(payload.docsMatched / payload.itemsPerPage));
      const hasMore = payload.page !== totalPages;
      return {
        ...state,
        fetching:false,
        hasErrors:false,
        errors:[],
        totalPages: totalPages,
        currentPage: payload.page,
        items: [...state.items, ...payload.documents],
        hasMore: hasMore,
        totalDocs: payload.docsMatched
      }
    case "HISTORIC_LIST_CLEAR":
      return{...initialState};
  default:
    return state;
  }
}

export default historicReducer;
