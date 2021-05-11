<template>
  <div class="wrap">
      <MyValidEmail />
  </div>
</template>

<script>
import MyValidEmail from "../components/MyValidEmail";

export default {
  data() {
    return {};
  },
  components: {
    MyValidEmail,
  },
  mounted() {
  }
};
</script>

<style scoped>
.wrap {
  z-index: -1;
  width: 100%;
  height: 100%;
  justify-content: space-evenly;
  background-image: url("../assets/voiture.png");
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;

}
.titre {
  margin: 0;
  padding: 0 0 20px;
  font-weight: bold;
  color: white;
 
}

</style>
