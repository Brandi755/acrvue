<template>
  <div class="wrap">
    <h1>votre Panier</h1>
     
    <div class="panier">
      <table class="table">
        <thead class="bg-info-id">
          <tr>
            <th>clé</th>
            <th>Nom</th>
            <th>Quantite</th>
            <th>prix</th>
            <th>soustotal</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <!-- voir -->
          <tr v-for="(item, index) in panier" :key="index">
            <td>
              <img
                :src="require(`@/assets/${item.image}.jpeg`)"
                alt="Product photo"
              />
            </td>
            <td>{{ item.nom }}</td>
            <td>
              <input
                type="button"
                class="btn btn-dark"
                @click="updateqtn(index)"
                value="-"
              />
              {{ item.quantite }}
              <input
                type="button"
                class="btn btn-dark"
                @click="update(index)"
                value="+"
              />
            </td>
            <td>{{ item.prix_unitaire }} €</td>
            <td>{{ (item.quantite * item.prix_unitaire).toFixed(2) }} €</td>
            <td>
              <button class="btn-bg-info-btn-block" @click="supprimer(index)">
                <i class="fa fa-trash-o fa-lg"></i>
              </button>
            </td>
          </tr>
          <tr>
            <td colspan="4"></td>
            <td>{{ total }}</td>
            <td colspan="2"></td>
          </tr>
        </tbody>
      </table>
      <button class="btnvalider" @click="goCommande" v-if="this.total > 1">
        <i class="fa fa-check-circle"></i><span> Commander</span>
      </button>

      <button class="btnvalider" @click="goProduit" v-if="this.total <= 0">
        <i class="fa fa-check-circle"></i><span> Ajouter un produit </span>
      </button>
    </div>
  </div>
</template>

<script>
// import VueJwtDecode from "vue-jwt-decode";

function goProduit() {
  this.$router.push({ name: "produit" });
  window.location.href = "/produit";
}

function goCommande() {
  if (localStorage.getItem("token")) {
    // var client = VueJwtDecode.decode(localStorage.getItem("token"));
    // console.log(client);
    this.$router.push({ name: "commande" });
  } else {
    this.$router.push({ name: "login" });
  }
}

function update(index) {
  this.panier[index].quantite++;
  this.panier[index].soustotal =
    this.panier[index].quantite * this.panier[index].prix_unitaire;
  console.log(this.panier);
  localStorage.removeItem("panier");
  localStorage.setItem("panier", JSON.stringify(this.panier));
}

function updateqtn(index) {
  if (this.panier[index].quantite > 1) {
    this.panier[index].quantite--;
    console.log(this.panier);
    localStorage.removeItem("panier");
    localStorage.setItem("panier", JSON.stringify(this.panier));
  } else {
    this.supprimer(index);
  }
}

function supprimer(index) {
  this.panier.splice(index, 1);
  localStorage.removeItem("panier");
  if (this.panier.length > 0) {
    localStorage.setItem("panier", JSON.stringify(this.panier));
  }
}

function total() {
  let total = 0;
  for (let el of this.panier) {
    total += el.prix_unitaire * el.quantite;
  }
  return total.toFixed(2);
}

export default {
  name: "MyPanier",
  props: ["panier"],
  data() {
    return {};
  },
  computed: {
    total
  },
  methods: {
    goProduit,
    goCommande,
    update,
    updateqtn,
    supprimer
  }
};
</script>

<style scoped>
/* si l'écran est inférieur ou égal */

@media screen and (max-width: 2400px) {
 
  .panier {
    /* hauteur, largeur */
    margin: 150px auto;
    background-color: rgb(255, 255, 255);
    height: auto;
    width: 80%;
    /* /* max-width: 80%;
  min-width: 700px; */
  }

  .wrap {
    width: 100%;
    height: 100%;
    justify-content: space-evenly;

    /* background-position: center center; 
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: c over; */
  }

  h1 {
    font-size: 5vh;
    /* font-size: 5vh; */
    /* peu faire min */
  }

  /* left: 50%;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 40px;
  border-radius: 3%;
  border: 1px, solid #444242;
  max-width: 1200px;
  min-width: 200px;  */

  .table {
    margin: 0 auto;
    width: 100%;
    color: rgb(3, 1, 5);
  }

  /* colonne */
  th {
    width: 15%;
  }
  .btnvalider {
    background: black;
    border-radius: 10px;
    color: #ffffff;
    font-family: Arial;
    font-size: 17px;
    font-weight: 700;
    height: 40px;
    width: 180px;

    /* box-shadow: 1px 1px 6px 0 rgb(228, 230, 237); */

    cursor: pointer;

    margin-bottom: 15%;
  }
  .bg-info-id {
    background-color: rgb(121, 116, 116);
    width: 100%;
  }
  /* bouton poubelle */
  .btn-bg-info-btn-block {
    background-color: rgb(165, 165, 165);
  }

  .td {
    color: brown;
   
  }
}

@media screen and (max-width: 700px) {
  .panier {
    /* hauteur, largeur */
    margin: 100px auto;
    background-color: rgb(255, 0, 76);
    height: auto;
    /* width: 80%; */
    max-width: 100%;
    min-width: 400px;
  }

  .wrap {
    width: 100%;
    height: 100%;
    justify-content: space-evenly;

    /* background-position: center center; 
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: c over; */
  }

  h1 {
    font-size: 5vh;
    /* font-size: 5vh; */
    /* peu faire min */

    /* left: 50%;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 40px;
  border-radius: 3%;
  border: 1px, solid #444242;
  max-width: 1200px;
  min-width: 200px;  */
  }

  .table {
    margin: 0 auto;
    width: 100%;
    color: blueviolet;
  }
  th {
    width: 15%;
  }
  .btnvalider {
    background-color: black;
    color: white;
  }
}

@media screen and (max-width: 360px) {
  .panier {
    /* hauteur, largeur */
    margin: 100px auto;
    background-color: rgb(0, 130, 153);
    height: auto;

    max-width: 100%;
    /* min-width: 400px; */
  }

  .wrap {
    width: 100%;
    height: 100%;
    justify-content: space-evenly;

    /* background-position: center center; 
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: c over; */
  }

  h1 {
    font-size: 5vh;
    /* font-size: 5vh; */
    /* peu faire min */

    /* left: 50%;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 40px;
  border-radius: 3%;
  border: 1px, solid #444242;
  max-width: 1200px;
  min-width: 200px;  */
  }

  .table {
    margin: 0 auto;
    width: 100%;
    color: blueviolet;
  }
  th {
    width: 15%;
  }
  .btnvalider {
    background-color: black;
    color: white;
  }
}
</style>
