import axios from "axios";

const api = axios.create({
  baseURL: "https://api.github.com/users/luizpaulo7"
});

export default api;
