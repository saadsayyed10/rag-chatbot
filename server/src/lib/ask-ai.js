import axios from "axios";
import env from "../config/env.js";

export const askAPI = async (question) => {
  return axios.post(`${env.AI_URL}/ask`, { question });
};
