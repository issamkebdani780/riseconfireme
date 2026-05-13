import { BASE_URL, getHeaders, handleResponse } from './api';

export const catalogService = {
  getWilayas: async () => {
    const response = await fetch(`${BASE_URL}/catalogs/wilayas`, {
      method: 'GET',
      headers: getHeaders(true),
    });
    return handleResponse(response);
  },
};
