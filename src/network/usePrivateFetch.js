import { useContext } from "react";
import axios from "axios";
import { UserContext } from "../context/userContext";

export const usePrivateFetch = () => {
  const { userData } = useContext(UserContext);

  const authAxios = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
  });

  authAxios.interceptors.request.use(
    (config) => {
      config.headers.Authorization = `Bearer ${userData.token}`;
      return config;
    },
    (error) => Promise.reject(error)
  );
  return authAxios;
};
