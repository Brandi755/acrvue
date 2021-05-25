let api = "http://localhost:3000";
if (process.env.PROD) {
  api = "https://api-acr.herokuapp.com";
}

export default api;
