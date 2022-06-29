import axios from 'axios';

export default axios.create({
  baseURL: `http://omdbapi.com/?apikey=${process.env.VUE_APP_API_KEY}`,
  timeout: 5000,
});
