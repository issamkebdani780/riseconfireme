import { getToken } from '../utils/auth';

const BASE_URL = 'https://api.rise-confirm.jervi.dev';

const handleResponse = async (response) => {
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong');
  }
  return data;
};

const getHeaders = (includeAuth = true) => {
  const headers = {
    'Content-Type': 'application/json',
  };
  if (includeAuth) {
    const token = getToken();
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }
  }
  return headers;
};

export const clientServices = {
  signIn: async (credentials) => {
    const response = await fetch(`${BASE_URL}/auth/login`, {
      method: 'POST',
      headers: getHeaders(false),
      body: JSON.stringify(credentials),
    });
    return await handleResponse(response);
  },

  signUp: async (userData) => {
    const response = await fetch(`${BASE_URL}/auth/register`, {
      method: 'POST',
      headers: getHeaders(false),
      body: JSON.stringify(userData),
    });
    return await handleResponse(response);
  },

  getMe: async () => {
    const response = await fetch(`${BASE_URL}/auth/me`, {
      method: 'GET',
      headers: getHeaders(true),
    });
    return await handleResponse(response);
  },

  signOut: async () => {
    try {
      const response = await fetch(`${BASE_URL}/auth/logout`, {
        method: 'POST',
        headers: getHeaders(true),
      });
      return await handleResponse(response);
    } catch (error) {
      console.error('Logout error:', error);
      throw error;
    }
  },

  getAgents: async () => {
    const response = await fetch(`${BASE_URL}/agents`, {
      method: 'GET',
      headers: getHeaders(true),
    });
    return await handleResponse(response);
  },

  getOrders: async () => {
    const response = await fetch(`${BASE_URL}/orders`, {
      method: 'GET',
      headers: getHeaders(true),
    });
    return await handleResponse(response);
  },
};
