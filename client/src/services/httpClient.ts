import { storageKeys } from "@/config/storageKeys";
import axios from "axios";
import { AuthService } from "./AuthService";

export const httpClient = axios.create({
  baseURL: "http://localhost:3001",
});

httpClient.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem(storageKeys.accessToken);

  if (accessToken) {
    config.headers.set("Authorization", `Bearer ${accessToken}`);
  }

  return config;
});

httpClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const refreshToken = localStorage.getItem(storageKeys.refreshToken);

    if ((error.response && error.response.status !== 401) || !refreshToken) {
      return Promise.reject(error);
    }

    const { accessToken, refreshToken: newRefreshToken } =
      await AuthService.refreshToken(refreshToken);

    localStorage.setItem(storageKeys.accessToken, accessToken);
    localStorage.setItem(storageKeys.refreshToken, newRefreshToken);
  }
);
