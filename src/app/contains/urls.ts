import {environment} from "../../environments/environment";

const {API: baseURL} = environment;


export const urls = {

  movies: `${baseURL}/discover/movie?api_key=c8a5151dd6ed753f530cc02f77fb85b9`,
  genres: `${baseURL}/genre/movie/list?api_key=c8a5151dd6ed753f530cc02f77fb85b9`


}
