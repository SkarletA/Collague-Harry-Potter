import axios from "axios";
export const getStudents = () => {
  const url = "http://localhost:3001";
  const request = "/students";
  axios.get(url+request)
    .then((response) => response.data.results)
    .catch((err) => err);
};

