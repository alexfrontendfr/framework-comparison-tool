import axios from "axios";

const api = axios.create({
  baseURL:
    process.env.REACT_APP_API_BASE_URL ||
    "https://framework-comparison-tool-backend.onrender.com/api",
});

export default api;
