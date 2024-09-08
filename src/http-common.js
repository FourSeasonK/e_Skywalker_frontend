import axios from "axios";

export default axios.create({
    // baseURL: "http://localhost:8080/api",
    baseURL: "https://eskywalkerbackend-production.up.railway.app/explorer/index.html#uri=/",
    headers: {
        "Content-type": "application/json"
    }    
})