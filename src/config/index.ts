import axios from "axios";

const Instance = () => {
  return axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
  });
};

export default Instance;
