<template>
<div class="wrap">
    <!-- test 1 -->
  
   <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous" />
 
    <MyProduits :produits="produits" />
  </div>
</template>

<script>
import MyProduits from "../components/MyProduits";

export default {
  data() {
    return {
      produits: {},
    };
  },
  components: {
    MyProduits,
  },
  mounted() {
    this.axios
      .get("http://localhost:3000/produit/all")
      .then((res) => {
        this.produits = res.data.produits;
      })
      .catch((err) => {
        alert(err);
      });
  },
};
</script>

<style scoped>
/* .search{
  background-color: blue;
  border: rebeccapurple;
  height: 100px;
  width: 400px;
} */
</style>
