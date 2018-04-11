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

services.getProfileInfo = (id) => {
  // console.log("in api data");
  return axios.get(`http://localhost:3001/user/profiles/${id}`)
}

services.updateProfileInfo = (data) => {
  // console.log("in the api services here is my data", data);
  return axios.request({
              url: `http://localhost:3001/user/profiles/${data.userId}`,
              method: "PUT",
              data: {
                gender: data.gender,
                seeking: data.seeking,
                description: data.description,
                user_id: data.userId
              }
  })
}
services.createProfileInfo = (data) => {
  return axios.request({
              url: `http://localhost:3001/user/profiles/${data.userId}`,
              method: "POST",
              data: {
                gender: data.gender,
                seeking: data.seeking,
                description: data.description,
                user_id: data.userId
              }
  })
}
services.nuke = (id) => {
  return axios.request({
              url: `http://localhost:3001/user/profiles/${id}`,
              method: "DELETE"
  })
}

services.getAllProfiles = (data) => {
  console.log("I am the data for show all", data);
  return axios.request({
    url: `http://localhost:3001/api`,
    method: "POST",
    data: {
      gender: data,
      // proximity: data.proximity
    }
  })
}

export default services
