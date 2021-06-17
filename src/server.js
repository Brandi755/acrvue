let api = "http://localhost:3000";
// if (process.env.PROD) {
if (true) { // change to false for dev
  api = "https://api-acr.herokuapp.com";
}
console.log("process.env", process.env);
// avec cela je px l'exporter ou je veux dans un composant une views comme dans accueil
export default api;
 