<template>
  <div class="wrap">
      <p>MyCommande.vue</p>

      <p>{{'le prix total de votre commande est ' + prixtotal }}</p>
      <!-- Récap nom et quantité -->
      

       <!-- <p>{{"le prix total est de " prixtotal}}</p> -->

      <!-- Champ nom
      Champ prenon
      Adresse facturation
      adresse livraison -->

      <!-- Bouton valider -->

      <!-- <p>{{"voici votre commande " + commande.idCommande}}</p>
      <p>{{"voici le prix de votre commande " + commande.totalPrice + "€"}}</p>
      <p>{{"voici le prix de votre commande " +  ((commande.products[1].qte * commande.products[1].price) + (commande.products[0].qte * commande.products[0].price)) + "€"}}</p>
      <div v-for="(product, index) in commande.products" :key="product.idProduct">        
        <h3>Produit {{index + 1}}</h3>
        <p>{{"Id produit " + product.idProduct}}</p>
        <p>{{"prix produit " + product.price + "€"}}</p>
        <p>{{"votre quantité " + product.qte}}</p>
        <p>{{"Prix total " + product.qte * product.price + "€"}}</p>
      </div> -->
      <!-- <h3>Produit 1</h3>
      <p>{{"Id produit " + commande.products[0].idProduct}}</p>
      <p>{{"prix produit " + commande.products[0].price + "€"}}</p>
      <p>{{"votre quantité " + commande.products[0].qte}}</p>
      <p>{{"Prix total " + commande.products[0].qte * commande.products[0].price + "€"}}</p>
      <h3>Produit 2</h3>
      <p>{{"Id produit " + commande.products[1].idProduct}}</p>
      <p>{{"prix produit " + commande.products[1].price + "€"}}</p>
      <p>{{"votre quantité " + commande.products[1].qte}}</p>
      <p>{{"Prix total " + commande.products[1].qte * commande.products[1].price + "€"}}</p> -->
      


  </div>
</template>

<script>
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

 function valide() {

  // this.axios
  //   .post("http:// host:3000/commande/new", {
  //     info: this.panier,
  //     adresse_facturation: "FakeAdr",
  //     adresse_livraison: "FakeAdr",
  //     nom: "FakeName",
  //     prenom: "FakePermon",
  //     total: this.total,
  //     clientId: client.id,
  //   })
  //   .then(res => {
  //     console.log(res.data);
  //     this.$router.push({
  //       name: "paypal",
  //       params: { total: this.total }
  //     });
  //   })
  //   .catch(err => {
  //     alert("error");
  //     console.log(err);
  //   });
}

export default {
  props: {
    panier: Object
  },
  data() {
    return {
      prixtotal: 0,
    }
  },
  methods: {
    valide,
  },
  mounted() {
    // console.log("this.panier :> ", this.panier);
    // this.prixtotal = this.panier[0].qte * this.panier[0].price
    this.panier.forEach((element) => {
      this.prixtotal = this.prixtotal + element.prix_unitaire * element.quantite;
    });
  }
}

</script>

<style scoped>

</style>
 