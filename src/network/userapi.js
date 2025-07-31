import axiosInstance from "./interceptor";

const login = async (credentials) => {
  try {
    const response = await axiosInstance.post("/user/login", credentials);
    return response;
  } catch (error) {
    console.log("Login error: ", error);
  }
};

const signup = async (userdata) => {
  try {
    const response = await axiosInstance.post("/user/signup", userdata);
    return response;
  } catch (error) {
    console.log("Registration error: ", error);
  }
};

export { login, signup };
