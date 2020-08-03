import axios from "axios";
const authToken = localStorage.getItem("jwt");
const headers = authToken
  ? { headers: { Authorization: `Bearer ${authToken}` } }
  : {};
const axiosInstance = axios.create({
  baseURL: "https://backend-vet.herokuapp.com/api",
  ...headers,
});
export default axiosInstance;
