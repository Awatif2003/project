// src/services/apiService.js
import axios from 'axios';

const API_BASE_URL = "http://localhost:8080"; // Replace with your Spring Boot backend URL

const apiService = axios.create({
  baseURL: API_BASE_URL,
});

export const authenticateUser = (credentials) => {
  return apiService.post('/api/users/login', credentials);
};

export const createUser = (userData) => {
  return apiService.post('/api/users', userData);
};

export const getUsers = () => {
  return apiService.get('/api/users');
};

export const registerUser = (userData) => {
  return apiService.post('/api/users', userData);
};
