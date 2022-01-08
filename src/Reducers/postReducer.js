import {
    GET_AIRLINES_DATA,
    GET_POST,
    ADD_AIRLINES,
    VIEW_PASENGERS
    // CREATE_POST,
  
  } from "../Actions/types";
  
  
  const initialState = {
    loading:false,
    passengers: [
     
    ],
    username:'',
    viewPassengers:[],
    passenger:{},
   
  };

  
  export default (state = initialState, { type, payload }) => {
    switch (type) {
      case  GET_AIRLINES_DATA:
        return {
          ...state,
          passengers: payload
        };

        case GET_POST:
          debugger;
          return {
            ...state,
            passenger: payload
          };

      case ADD_AIRLINES:
        console.log(payload);
        return {
          ...state,
          passengers: [payload, ...state.passengers],
          
        };

        case  VIEW_PASENGERS:
          return {
            ...state,
            viewPassengers: payload
          };
  
      
   
      default:
        return state;
    }
  };
  