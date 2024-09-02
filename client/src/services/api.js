import axios from "axios";

const api = axios.create({
  baseURL:
    process.env.REACT_APP_API_URL ||
    "https://framework-comparison-tool-backend.onrender.com/",
});

export default api;
