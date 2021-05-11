<template>
<div class="container">
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
.container {
  z-index: -1;
  width: 100%;
  height: 100% !important;
  justify-content: space-evenly;
}
h3{
  color:#0091CA;
  font-size: 20px;
  right: 100px;
  
}

</style>
