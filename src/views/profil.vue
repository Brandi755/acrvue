<template>
  <div class="wrap">
      <h2 class="titre">Completez ou modifier votre profil pour vos future commande</h2>
      <MyProfil />
      <MyFooter />

  </div>
</template>

<script>
// 
import MyProfil from "../components/MyProfil";
import MyFooter from "../components/MyFooter";

// 
export default {
  data() {
    return {};
  },
  components: {
    MyProfil,
    MyFooter,
  },
  mounted() {}
};
</script>

<style scoped>
.wrap {
  z-index: -1;
  width: 100%;
  height: 68%;
  justify-content: space-evenly;
  /* background-image: url("../assets/voiture.png"); */
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  /* background-color: #464646; */
}

.titre {
  margin: 0;
  padding: 0 0 20px;
  font-weight: bold;
  color: white;
  /* color:#0091CA; */
  /* color:#000000; */
}

</style>
