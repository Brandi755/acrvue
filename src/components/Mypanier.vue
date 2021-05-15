<template>
  <div class="wrap">
    <div class="logo">
      <img src="../assets/logost.png" class="logoimg" />
      <div class="paniertitre">
        <h4>Mon Panier</h4>
      </div>
    </div>

    <div class="panier">
      <table class="table">
        <thead class="bg-info-id">
          <tr>
            <th></th>
            <th>Nom</th>
            <th>Quantité</th>
            <!-- <th>prix</th> -->
            <th>Soustotal</th>
            <th>Supprimer</th>
          </tr>
        </thead>
        <tbody>
          <!-- voir -->
          <tr v-for="(item, index) in panier" :key="index">
            <td>
              <img
                class="imgcle"
                :src="require(`@/assets/${item.image}.jpeg`)"
                alt="Product photo"
              />
            </td>
              <td>{{ item.nom }}</td>
              <td>
                <div class="selectPlusMinus">
                  <input
                    type="button"
                    class="btn btn-primary"
                    @click="update(index)"
                    value="+"
                  />
                  {{ item.quantite }}
                  <input
                    type="button"
                    class="btn btn-primary"
                    @click="updateqtn(index)"
                    value="-"
                  />
                </div>
              </td>
            <!-- <td>{{ item.prix_unitaire }} €</td> -->
            <td>{{ (item.quantite * item.prix_unitaire).toFixed(2) }}€</td>
            <td>
              <button class="btn-bg-info-btn-block" @click="supprimer(index)">
                <i class="fa fa-trash-o fa-lg"></i>
              </button>
            </td>
          </tr>
          <tr>
            <td colspan="3"></td>
            <td>{{ total }}€</td>
            <td colspan="2"></td>
          </tr>
        </tbody>
      </table>
      <div class="btnValider">
        <button class="btnvalider" @click="goCommande" v-if="this.total > 1">
          <i class="fa fa-check-circle"></i><span> Commander</span>
        </button>

        <button class="btnvalider" @click="goProduit" v-if="this.total <= 0">
          <i class="fa fa-check-circle"></i><span> Ajouter un produit </span>
        </button>
      </div>
    </div>

  </div>
</template>

<script>
import MyFooter from "../components/MyFooter";

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
  },
  components: {
    MyFooter,
  }
};
</script>




<style scoped>
/* css global à tous les écrans */

.logoimg {
  width: 300px;
  margin-top: 30px;
}

.wrap {
  width: auto;
  height: 100%;
  justify-content: space-evenly;

  /* background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: c over; */
}

.panier {
  /* hauteur, largeur */
  margin: 50px auto;
  background-color: rgb(255, 255, 255);
  height: auto;
  width: auto;
  /* /* max-width: 80%;
  min-width: 700px; */
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

/* colonne sinon marge à gauche */
th {
  width: 15%;
}
td {
  vertical-align: inherit;
}
.selectPlusMinus {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

/* écriture text */
.table {
  margin: 0 auto;
  width: 100%;
  color: rgb(0, 0, 0);
}

.bg-info-id {
  background-color: #0091CA;
  width: 100%;
}

/* bouton poubelle */
.btn-bg-info-btn-block {
  background-color: rgb(165, 165, 165);
}

.btn-primary{
  background-color: #0091CA;
}

.imgcle {
  width: 20vh;
}

/* si l'écran est inférieur ou égal */

/* 1) grand PC */
@media screen and (min-width: 1280px) {
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
}

/* 2) Pc normal */
@media screen and (min-width: 1024px) and (max-width: 1279.9px) {
  h1 {
    font-size: 5vh;
  }
  .logoimg {
    width: 30vh;
    margin-top: 30px;
  }
}

/* 3) Tablette */
@media screen and (min-width: 768px) and (max-width: 1023.9px) {
  .btnValider {
    margin-left: 0vh;
  }
}

@media screen and (min-width: 480px) and (max-width: 767.9px) {
  .logo {
    margin-left: 7vh;
  }
  .btnValider {
    margin-left: 5vh;
  }
}

@media screen and (max-width: 479.9px) {
  .logo img {
  width: 300px;
  margin-top: 80px;
  margin-left: 30px;

}

  .btnValider {
    margin-left: 10vh;
    margin-top: 5vh;
  }
  .paniertitre{
    margin-top: 5vh;

  }
  .imgcle {
  width: 5vh;
}
h4{
  margin-left: 40px;
}
/* tr{
  width: 100%;
  background-color: red;
} */
}
</style>
