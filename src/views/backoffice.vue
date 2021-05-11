<template>
<div class="container">
  <MyBackOffice v-if="admin == true" />
</div>

</template>

<script>

import MyBackOffice from "./../components/MyBackOffice/MyBackOffice.vue";
import api from "./../server";


export default {
  components: {
    MyBackOffice,
  },
  methods: {
  },
  data() {
    return {
      admin: false,
    };
  },
  created() {
    // récuperer token
    const mytoken = localStorage.getItem('token');
    if (!mytoken) {
      this.$router.push({ name: "accueil" });
    }
    const url = api + "/user/verify";
    this.axios.post(url, {token: mytoken}).then((response) => {
      if (response.data.result == true) { // Si 200 ou et res.data.result == true
        if (response.data.decoded.role == "admin") {
          this.admin = true;
        }
        else {
          console.log("le token est valide mais l'utilisateur n'est pas administarteur");
          this.$router.push({ name: "accueil" });

        }
      }
    }).catch((err) => {  //else 401 ou et res.data.result != true
      console.log("la signature à été modifier, il n'est pas valide err :>> ", err);
          this.$router.push({ name: "accueil" });
    });
  }
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
