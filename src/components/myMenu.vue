<template>
<div class="wrap">
  <Slide >

    <h3 v-if="login == true"> Vous êtes connecté en tant que {{decodedToken.email}} </h3>
    <h3 v-if="login == false"> Vous n'êtes pas connecté </h3>

    <a href="/Accueil">
      <span>Accueil</span>
    </a>
     <a href="/propos">
      <span>A propos</span>
    </a>
     <a href="/produit">
      <span>Produits</span>
    </a>
    <a href="/Panier">
      <span>Mon Panier</span>
    </a>
     <a href="/profil">
      <span>Mon Profil</span>
    </a>
<!-- 1 Token décodé console.Log le token (déja fait dans un componant) -->
<!-- 2 clg seulement status .status -->
<!-- v-if user.status == admin -->

    <a href="/backoffice" v-if="this.decodedToken.role == 'admin'">
      <span>Back Office</span>
    </a>
     <!-- <a href="/validemail">
      <span>valide mon email</span>
    </a> -->
    <a href="/login" v-if="login == false">
      <span>Login</span>
    </a>
    <a href="/register" v-if="login == false">
      <span>Register</span>
    </a>
    <a href="#" v-on:click="logout" v-if="login == true">
      <span>Logout</span>
    </a>

  </Slide>

</div>
</template>

<script>
import jwt_decode from "jwt-decode";
// import { Slide } from 'vue-burger-menu'
// import { PushRotate } from 'vue-burger-menu'
import { Slide } from 'vue-burger-menu'

function logout() {
  localStorage.removeItem('token');
  window.location.replace("http://localhost:8080/accueil");
}

export default {
  name: "MyMenu",
  components: {
    Slide,
  },
  data() {
    return {
      decodedToken: {},
      login: false,
    }
  },
  methods: {
    logout,
  },
  created() { // Verifier si le token a pas expirer
    // console.log("this.$router.currentRoute :>>" , this.$router.currentRoute);
    const mytoken = localStorage.getItem('token');
    console.log("mytoken = ", mytoken)
    if (mytoken)
    {
      this.login = true;
      this.decodedToken = jwt_decode(mytoken);
      console.log("this.decodedToken = ", this.decodedToken);
      console.log("this.decodedToken.role >> = ", this.decodedToken.role);
    }
  }
}

// const menuIcon = document.querySelector(".hamburger-menu");
// const navbar = document.querySelector(".navbar");

// menuIcon.addEventListener("click", () => {
//   navbar.classList.toggle("change");
// });

</script>
<style scoped>
/* #bm-menu{
  background-color: #2A2E33;
} */

h3{
  color:#0091CA;
  font-size: 20px;
  margin-left: -30px;
  right: 100px;
}

</style>
