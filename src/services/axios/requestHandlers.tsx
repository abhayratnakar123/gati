import ToastMessage from "@/components/Toast";
import { AxiosError } from "axios";

// handle axios error

export const handleAxiosError = (error: unknown) => {
  const axiosError: any = error as AxiosError;
  console.error("Axios error:", axiosError);
  if (axiosError.response) {
    ToastMessage({
      icon: "error",
      title: axiosError.response?.data?.message
        ? axiosError.response.data.message
        : "Something went wrong",
    });
    return axiosError.response.data;
  } else {
    ToastMessage({
      icon: "error",
      title: axiosError?.message ? axiosError.message : "Something went wrong",
    });
    return axiosError.response.data;
  }
  // throw axiosError;
};
