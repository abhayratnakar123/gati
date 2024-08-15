import { postData } from "@/services/axios/request";

export const login = (data: { login_input: string; password: string }) => {
  return postData("/auth_api/login/", data);
};
