import axios from 'axios';

const API_BASE_URL = "http://localhost:8080"; // Replace with your Spring Boot backend URL

const apiService = axios.create({
  baseURL: API_BASE_URL,
});

// Users CRUD operations
export const getUsers = () => {
  return apiService.get('/api/users');
};

export const createUser = (user) => {
  return apiService.post('/api/users', user);
};

export const updateUser = (userId, user) => {
  return apiService.put(`/api/users/${userId}`, user);
};

export const deleteUser = (userId) => {
  return apiService.delete(`/api/users/${userId}`);
};

// Organizations CRUD operations
export const getOrganizations = () => {
  return apiService.get('/api/organizations');
};

export const createOrganization = (organization) => {
  return apiService.post('/api/organizations', organization);
};

export const updateOrganization = (organizationId, organization) => {
  return apiService.put(`/api/organizations/${organizationId}`, organization);
};

export const deleteOrganization = (organizationId) => {
  return apiService.delete(`/api/organizations/${organizationId}`);
};

// Opportunities CRUD operations
export const getOpportunities = () => {
  return apiService.get('/api/opportunities');
};

export const createOpportunity = (opportunity) => {
  return apiService.post('/api/opportunities', opportunity);
};

export const updateOpportunity = (opportunityId, opportunity) => {
  return apiService.put(`/api/opportunities/${opportunityId}`, opportunity);
};

export const deleteOpportunity = (opportunityId) => {
  return apiService.delete(`/api/opportunities/${opportunityId}`);
};
