import axios from 'axios';

const services = {};

services.connect = () => {
  // console.log("we're here");
  return axios.request({
    url: "http://localhost:3001/api",
    method: "GET"
  })
}
services.newUser = (data) => {
  return axios.request({
    url: "http://localhost:3001/user/sign_up",
    method: "POST",
    data: {
      username: data.username,
      password: data.password
    }
  })
}

services.logIn = (data) => {
  // console.log('Made it to apiServices');
  return axios.request({
    url: "http://localhost:3001/user/log_in",
    method: "POST",
    data: {
      username: data.username,
      password: data.password
    }
  })
}

export default services
