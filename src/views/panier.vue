<template>
  <div>
  <!-- mon component devient une balise -->
    <MyPanier :panier="panier" />
  </div>
</template>

<script>
import MyPanier from "./../components/MyPanier";
export default {
  components: {
    MyPanier,
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
    }
  },
};
</script>

<style>
</style>