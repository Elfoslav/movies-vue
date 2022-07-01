import axios from 'axios';

const DEVELOPMENT_API_URL = `http://omdbapi.com/?apikey=${process.env.VUE_APP_API_KEY}`;
const PRODUCTION_API_URL = `https://omdbapi.com/?apikey=${process.env.VUE_APP_API_KEY}`

export default axios.create({
  baseURL: process.env.NODE_ENV === 'development' ? DEVELOPMENT_API_URL : PRODUCTION_API_URL,
  timeout: 5000,
});
