import { BASE_URL, getHeaders, handleResponse } from './api';

export const agentService = {
  getAgents: async (page = 1, limit = 10) => {
    const response = await fetch(`${BASE_URL}/agents?page=${page}&limit=${limit}`, {
      method: 'GET',
      headers: getHeaders(true),
    });
    return handleResponse(response);
  },
};
