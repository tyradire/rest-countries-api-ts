import axios from "axios";
import { Dispatch } from "redux";
import { COUNTRIES_API } from "../../utils/constants";

export const fetchCountries = () => {
  return function(dispatch: Dispatch) {
    axios.get(COUNTRIES_API).then(({data}) => {
      dispatch({type:'ADD_COUNTRIES', payload: data})
    })
    .catch(err => console.log(err))
  }
}