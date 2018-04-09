import axios from 'axios';

const services = {};

services.connect = () => {
  console.log('here');
  return axios.get('/api/')
}

export default services
