let api = "http://localhost:3000";
if (process.env.PROD) {
  api = "https://api-acr.herokuapp.com";
}
// avec cela je px l'exporter ou je veux dans un composant une views comme dans accueil
export default api;
 