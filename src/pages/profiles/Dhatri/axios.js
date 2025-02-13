import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080/intern/Dhatri C", // Replace with your actual API
  headers: {
    "Content-Type": "application/json",
  },
});

export default API;