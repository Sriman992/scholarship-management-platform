import axios from "axios";

const API = axios.create({
  baseURL: "https://scholarship-xkez.onrender.com"
});

// 🔥 Attach JWT automatically
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");

  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }

  return req;
});

API.interceptors.response.use(
  (res) => res,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("token");
      localStorage.removeItem("role");
      localStorage.removeItem("email");
    }

    return Promise.reject(error);
  }
);

export default API;
