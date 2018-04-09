import axios from 'axios';

const services = {};

services.connect = () => {
  // console.log("we're here");
  return axios.request({
    url: "http://localhost:3001/api",
    method: "GET"
  })
}

export default services
