import axios from "axios";

const API_URL = "http://localhost:8080/auth"; // URL del backend en Spring Boot



export const login = async (email, password) => {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    if (response.data) {
        localStorage.setItem("token", response.data);
    }
    return response.data;
};

export const logout = () => {
    localStorage.removeItem("token");
};

export const getToken = () => {
    return localStorage.getItem("token");
};


export const register = async (formData) => {
    return axios.post(`${API_URL}/register`, formData);
};