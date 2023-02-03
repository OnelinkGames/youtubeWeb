import axios from "axios"

const api = axios.create({
    baseURL: "http://localhost:3002/schedule-list",
    timeout: 2000
});

export default api;