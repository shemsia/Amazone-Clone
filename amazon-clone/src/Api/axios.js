import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:5001/clone-f086f/us-central1/api",
  //baseURL:"https://amazon-api-deploy-1-eeul.onrender.com"
});

export { axiosInstance };
