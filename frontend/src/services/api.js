import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "https://mutex-lock-simulator.vercel.app/api/mutex",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;