import axios from "axios";
import firebaseConfig from '../firebaseConfig/.fbconfig'

export default axios.create({
  baseURL: firebaseConfig.databaseURL,
  responseType: "json"
});