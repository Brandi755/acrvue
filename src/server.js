let api = "https://api-acr.herokuapp.com";
console.log('process.env ', process.env);
if (process.env.NODE_ENV == 'development') {
  api = "http://localhost:3000";
}

export default api;
