import axios from "axios";

const API = axios.create({
  baseURL: "https://personal-task-manager-dwye.onrender.com/api/tasks"
});

export default API;