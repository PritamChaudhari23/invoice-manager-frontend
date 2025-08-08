import axios from "axios";
const BASE_URL = "http://localhost:8000/api/v1";

const login = async (credentials) => {
  try {
    const response = await axios.post(`${BASE_URL}/user/login`, credentials);
    const token = response.data.accessToken;
    localStorage.setItem("authToken", token);
    return { success: true, token };
  } catch (error) {
    console.log("Login error: ", error);
  }
};

const signup = async (userdata) => {
  try {
    const response = await axios.post(`${BASE_URL}/user/signup`, userdata);
    return { success: true, data: response.data };
  } catch (error) {
    console.log("Registration error: ", error);
  }
};

export { login, signup };
