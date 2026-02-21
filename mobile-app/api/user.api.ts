import axios from "axios";
import { apiUrl } from "./api-url";

export const loginUserAPI = async (email: string, password: string) => {
  return axios.post(`${apiUrl}/users/login`, { email, password });
};
