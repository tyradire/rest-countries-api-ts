import axios from "axios";
import { Dispatch } from "redux";
import { COUNTRY_API } from "../../utils/constants";

export const fetchCountry = (code: string | undefined) => {
  return function(dispatch: Dispatch) {
    dispatch({type:'LOAD_COUNTRY'})
    axios.get(COUNTRY_API + code).then(({data}) => {
      let langArr = [];
      for (let i = 0; i < data.languages.length; i++) {
        langArr.push(data.languages[i].name)
      }
      data.langString = langArr.join(', ');
      console.log(data)
      dispatch({type:'LOAD_COUNTRY_SUCCESS', payload: data})
    })
    .catch(err => console.log(err))
  }
}
