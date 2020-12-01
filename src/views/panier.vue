<template>
  <div>
    <Mypanier :panier="panier" />
  </div>
</template>

<script>
import Mypanier from "../components/Mypanier";
export default {
  components: {
    Mypanier,
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