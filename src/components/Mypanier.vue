<template>
  <div class="panier">
    <h1>Panier</h1>
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th>Id</th>
          <th>Nom</th>
          <th>Quantite</th>
          <th>prix</th>
          <th>soustotal</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in panier" :key="index">
          <td>
            <img
            :src="require(`@/assets/${item.image}.jpeg`)"
            alt="Product photo"
            />
          </td>
          <td>{{ item.produitId }}</td>
          <td>{{ item.nom }}</td>
          <td>
            <input type="button" class="btn btn-dark" @click="updateqtn(index)" value="-" />
            {{ item.quantite }}
            <input type="button" class="btn btn-dark" @click="update(index)" value="+" />
          </td>
          <td>{{ item.prix_unitaire }} €</td>
          <td>{{ (item.quantite * item.prix_unitaire).toFixed(2) }} €</td>
          <td>
            <button class="btn btn-dark btn-block" @click="supprimer(index)">
              <i class="fa fa-trash-o fa-lg"></i>
            </button>
          </td>
        </tr>
        <tr>
          <td colspan="6"></td>
          <td>{{ total }}</td>
          <td colspan="2"></td>
        </tr>
      </tbody>
    </table>
    <button class="btn btn-dark btn-block" @click="valide">
      <i class="fa fa-check-circle"></i>
    </button>
  </div>
</template>

<script>
 import VueJwtDecode from "vue-jwt-decode"; 

export default {
  name: "Mypanier",
  props: ["panier"],
  data() {
    return {};
  },
  computed: {
    total: function () {
      let total = 0;
      for (let el of this.panier) {
        total += el.prix_unitaire * el.quantite;
      }
      return total.toFixed(2);
    },
  },
  methods: {
    update: function (index) {
      this.panier[index].quantite++;
      this.panier[index].soustotal = this.panier[index].quantite * this.panier[index].prix_unitaire;
      console.log(this.panier);
      localStorage.removeItem("panier");
      localStorage.setItem("panier", JSON.stringify(this.panier));
    },
    updateqtn: function (index) {
      if (this.panier[index].quantite > 1) {
        this.panier[index].quantite--;
        console.log(this.panier);
        localStorage.removeItem("panier");
        localStorage.setItem("panier", JSON.stringify(this.panier));
      } else {
        this.supprimer(index);
      }
    },
    supprimer: function (index) {
      this.panier.splice(index, 1);
      localStorage.removeItem("panier");
      if (this.panier.length > 0) {
        localStorage.setItem("panier", JSON.stringify(this.panier));
      }
    },
    valide: function () {
       if (localStorage.getItem("token")) {
        var client = VueJwtDecode.decode(localStorage.getItem("token")); 

      var produitId = [];
      var quantiteprix = { prix: "", qtn: "" };
      var prix = [];
      var quantite = [];
      this.panier.forEach((item) => {
        produitId.push(item.produitId);
        quantiteprix.prix = item.prix_unitaire;
        quantiteprix.qtn = item.quantite;
        prix.push(item.prix_unitaire);
        quantite.push(item.quantite);
      });
      this.axios
        .post("http://localhost:3000/command/new", {
          clientId: client.id,
          panier: this.panier,
          produitId: produitId,
          quantite: quantite,
          prix: prix,
          quantiteprix: quantiteprix,
        })
        .then((res) => {
          console.log(res.data);
            this.$router.push({
              name: "paypal",
              params: { total: this.total },
            }); 
        })
        .catch((err) => {
          alert("error");
          console.log(err);
        });
     } else {
        this.$router.push({ name: "login" });
      } 
    },
  },
};
</script>

<style scoped>
.panier {
  margin-top: 150px;
}

.table {
  margin: 0 auto;
  width: 80%;
}
th {
  width: 20%;
}
</style>
