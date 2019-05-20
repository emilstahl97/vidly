import http from "./httpService";
import { apiUrl } from "../config.json";
import { paginate } from "../utils/paginate";

const apiEndpoint = apiUrl + "/auth";

export function login(email, password) {
  return http.post(apiEndpoint, { email, password });
}
