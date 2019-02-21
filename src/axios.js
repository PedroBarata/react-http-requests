import axios from 'axios';

const instance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
});

instance.defaults.headers.common['Authorization'] = "AUTH TOKEN WITH INSTANCE";

instance.interceptors.response.use(
    response => {
      console.log(response);
      //Edit response configs!
      return response;
    },
    error => {
      console.log("Response", error);
      return Promise.reject(error);
    }
  );

export default instance;