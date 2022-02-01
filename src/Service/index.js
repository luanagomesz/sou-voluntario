import axios from "axios";

export const api = axios.create({
  baseURL: "https://sou-voluntario-server.herokuapp.com",
});
