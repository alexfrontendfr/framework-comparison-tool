import axios from "axios";

const api = axios.create({
  baseURL: "https://framework-comparison-tool-backend.onrender.com/api",
});

export default api;
