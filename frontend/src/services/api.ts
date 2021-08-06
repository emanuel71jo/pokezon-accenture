import axios from "axios";

const app = axios.create({
  baseURL: "52.202.198.72:3333",
});

app.interceptors.request.use(async (config) => {
  const token = sessionStorage.getItem("@Pokezon_login");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export { app };
