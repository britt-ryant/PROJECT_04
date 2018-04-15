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
  console.log("in the api services here is my data", data);
  return axios.request({
              url: `http://localhost:3001/user/profiles/${data.currentUserId}`,
              method: "PUT",
              data: {
                gender: data.gender,
                seeking: data.seeking,
                description: data.description,
                user_id: data.currentUserId,
                image: data.image
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
                user_id: data.userId,
                image: data.image
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
  // console.log("I am the data for show all", data);
  return axios.request({
    url: `http://localhost:3001/api`,
    method: "POST",
    data: {
      gender: data,
      // proximity: data.proximity
    }
  })
}

services.addToLikeTable = (data) => {
  // console.log("I am in apiServices, adding to the Like table with: ", data);
  return axios.request({
    url: `http://localhost:3001/api/like`,
    method: "POST",
    data: {
      like_sent: data.like_sent,
      like_received: data.like_received
    }
  })
}
services.checkForMatch = (data) => {
  // console.log("Inside apiServices", data);
  return axios.request({
    url: 'http://localhost:3001/api/check',
    method: "POST",
    data: {
      like_sent: data.like_received,
      like_received: data.like_sent
    }
  })
}
services.createMatch = (data) => {
  return axios.request({
      url: 'http://localhost:3001/api/match',
      method: "POST",
      data: {
        user_one: data.currentUser,
        user_two: data.currentProfile.user_id
      }
  })
}

services.getAllMatches = (data) => {
  // console.log(`In apiServices, getAllMatches`, data);
  return axios.request({
    url: `http://localhost:3001/api/match/${data}`,
    method: 'GET'
  })
}

services.getAllMessages = (data) => {
  // console.log(`In api services, here is the data I am passing to the apiServices`, data);
  return axios.request({
    url: `http://localhost:3001/api/message`,
    method: 'POST',
    data: {
      sent_user_id: data.currentUser,
      received_user_id: data.targetUserId
    }
  })
}

services.sendMessage = (data) => {
  console.log(`I am the data going into the back end`, data);
  // console.log(`This is the imformation that I am trying to send to the other person`, data);
  return axios.request({
    url: `http://localhost:3001/api/new_message`,
    method: "POST",
    data: {
      sent_user_id: data.currentUser,
      received_user_id: data.targetUserId,
      message: data.message
    }
  })
}

export default services
