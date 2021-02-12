<template>
<div classe="wrap">
  <h1>Commande</h1>
  <MyCommande :panier="panier" />
</div> 

</template>
 
<script>
   
import MyCommande from "../components/MyCommande";

export default {
  components: {
   MyCommande,
  },
  methods: {
  },
  data() {
    return {
      panier: [],
    };
  },
  created() {
    if (!localStorage.getItem("panier")) {
      return;
    } else {
      this.panier = JSON.parse(localStorage.getItem("panier"));
      console.log("this.panier :> ", this.panier)
    }
  },
};
  



</script>
<style scoped>

h3{
  color:#0091CA;
  font-size: 20px;
  right: 100px;
  
}

</style>
