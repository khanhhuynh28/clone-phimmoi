import { API, BASE_URL } from "./constants.api";

export const authApi = {
    login: (data) => API.post(`${BASE_URL}/auth/login `, data),
    register: (data) => API.post(`${BASE_URL}/auth/users`, data),
};
