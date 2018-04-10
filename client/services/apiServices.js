import axios from 'axios';

const services = {};

services.connect = (data) => {
  console.log("we're here", data);
  return axios.request({
    url: "http://localhost:3001/api/users",
    method: "POST",
    data: {
      email: data.email,
      password: data.password
    }
  })
}

export default services
