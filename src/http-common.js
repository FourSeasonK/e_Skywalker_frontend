import axios from "axios";

export default axios.create({
    // baseURL: "http://localhost:8080/api",
    baseURL: "eskywalkerbackend-production.up.railway.app",
    headers: {
        "Content-type": "application/json"
    }    
})