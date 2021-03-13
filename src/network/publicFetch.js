import axios from "axios";

const BASE_PATH = "/api/authenticate";

export const publicFetch = axios.create({
  baseURL: BASE_PATH,
});
