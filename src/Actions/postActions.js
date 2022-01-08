import { GET_AIRLINES_DATA, GET_POST , ADD_AIRLINES, VIEW_PASENGERS} from "./types";
import axios from "axios";


// get all posts using Dispatcher and with the use of the redux thunk //

export const getPassengersList = () => async (dispatch) => {

    const result = await axios.get("https://api.instantwebtools.net/v1/airlines");
    console.log(result);
  
    dispatch({
      type: GET_AIRLINES_DATA,
      payload: result.data
    })
  };

  // Redux thunk part //
  export const getPassengersViewList = () => async (dispatch) => {

    const result = await axios.get("https://api.instantwebtools.net/v1/passenger");
    console.log(result, "action view passengers");
  
    dispatch({
      type: VIEW_PASENGERS,
      payload: result.data.data
    })
  };
  
  export const getPost = (id) => async (dispatch) => {
    debugger
    const result = await axios.get(`https://api.instantwebtools.net/v1/airlines/${id}`);
    console.log(result,"get reQuired List");
    
    dispatch({
      type: GET_POST,
      payload: result.data
    })
  };

  // create airlines
export const createAirlines = (airline) => async dispatch => {
  const result = await axios.post("https://api.instantwebtools.net/v1/airlines", airline);


  dispatch({
    type: ADD_AIRLINES,
    payload: result.data,
  })
}

  // To get a particular  posthttps://api.instantwebtools.net/v1/airlines
