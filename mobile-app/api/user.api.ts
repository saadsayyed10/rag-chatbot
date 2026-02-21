import axios from "axios";
import { apiUrl } from "./api-url";

export const registerUserAPI = async (
  firstName: string,
  lastName: string,
  email: string,
  password: string,
) => {
  return axios.post(`${apiUrl}/users/register`, {
    firstName,
    lastName,
    email,
    password,
  });
};
export const loginUserAPI = async (email: string, password: string) => {
  return axios.post(`${apiUrl}/users/login`, { email, password });
};
