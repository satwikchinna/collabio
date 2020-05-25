import axios from "axios";

export default axios.create({
  baseURL: "https://localhost:/api/",
  responseType: "json"
});