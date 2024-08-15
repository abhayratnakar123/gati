import axios, {
    AxiosRequestConfig,
    AxiosResponse,
    AxiosError,
    InternalAxiosRequestConfig,
  } from "axios";
import { handleAxiosError } from "./requestHandlers";

  
  // Define a type for the options parameter
  interface RequestOptions extends AxiosRequestConfig {}
  
  const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_API_URL,
    // timeout: 5000,
    headers: {
      "Content-Type": "application/json",
    },
  });
  
  // Request interceptor
  axiosInstance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      const token = localStorage.getItem("TOKEN");
      if (token) {
        config.headers.token = token;
      }
      console.log(
        `Starting Request: ${config.method?.toUpperCase()} ${config.url}`,
        config,
      );
      return config;
    },
    (error: AxiosError) => {
      console.error("Error in request interceptor:", error);
      return Promise.reject(error);
    },
  );
  
  // Response interceptor
  axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => {
      return response;
    },
    (error: AxiosError) => {
      console.error("Error in response interceptor:", error);
      return Promise.reject(error);
    },
  );
  
  // Requests
  
  export const getData = async (
    url: string,
    options: RequestOptions = {},
  ): Promise<any> => {
    try {
      const response = await axiosInstance.get(url, options);
      return response.data;
    } catch (error) {
      return handleAxiosError(error);
    }
  };
  
  export const postData = async (
    url: string,
    data: any,
    options: RequestOptions = {},
  ): Promise<any> => {
    try {
      const response = await axiosInstance.post(url, data, options);
      return response.data;
    } catch (error: unknown) {
      return handleAxiosError(error);
    }
  };
  
  export const putData = async (
    url: string,
    data: any,
    options: RequestOptions = {},
  ): Promise<any> => {
    try {
      const response = await axiosInstance.put(url, data, options);
      return response.data;
    } catch (error: unknown) {
      return handleAxiosError(error);
    }
  };
  
  export const deleteData = async (
    url: string,
    options: RequestOptions = {},
  ): Promise<any> => {
    try {
      const response = await axiosInstance.delete(url, options);
      return response.data;
    } catch (error: unknown) {
      return handleAxiosError(error);
    }
  };
  