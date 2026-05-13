import { BASE_URL, getHeaders, handleResponse } from './api';

export const authService = {
  signIn: async (credentials) => {
    const response = await fetch(`${BASE_URL}/auth/login`, {
      method: 'POST',
      headers: getHeaders(false),
      body: JSON.stringify(credentials),
    });
    return handleResponse(response);
  },

  signUp: async (userData) => {
    const response = await fetch(`${BASE_URL}/auth/register`, {
      method: 'POST',
      headers: getHeaders(false),
      body: JSON.stringify(userData),
    });
    return handleResponse(response);
  },

  getMe: async () => {
    const response = await fetch(`${BASE_URL}/auth/me`, {
      method: 'GET',
      headers: getHeaders(true),
    });
    return handleResponse(response);
  },

  signOut: async () => {
    try {
      const response = await fetch(`${BASE_URL}/auth/logout`, {
        method: 'POST',
        headers: getHeaders(true),
      });
      return handleResponse(response);
    } catch (error) {
      console.error('Logout error:', error);
      throw error;
    }
  },

  getPermissions: async () => {
    const response = await fetch(`${BASE_URL}/agents/permissions`, {
      method: 'GET',
      headers: getHeaders(true),
    });
    return handleResponse(response);
  },
};
