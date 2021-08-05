import axios from "axios";

const app = axios.create({
  baseURL: "http://localhost:3333",
});

app.interceptors.request.use(async (config) => {
  const token = sessionStorage.getItem("@Pokezon_login");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export { app };
