<template>
<!-- <div class="wrap"> -->
  <ScaleRotate >

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
      <!-- <a href="/produit">
      <span>Dépannage serrurie</span>
    </a>  -->
    <a href="/devis">
      <span>Devis</span>
    </a> 
    <a href="/Panier">
      <span>Panier</span>
    </a>
     <a href="/profil">
      <span>Mon profil</span>
    </a> 
    <a href="/login" v-if="login == false">
      <span>Login</span>
    </a>
    <a href="/register" v-if="login == false">
      <span>Register</span>
    </a>
    <a href="#" v-on:click="logout" v-if="login == true">
      <span>Logout</span>
    </a>

  </ScaleRotate>
<!--  -->
  <!-- <div class="container">
   
    <h3 v-if="login == true"> Vous etes connecter en tant que {{decodedToken.email}} </h3>
    <h3 v-if="login == false"> Vous n'etes pas connecter </h3>
    <ul class="nav-list">
      <li class="nav-item">
        <a href="/" class="nav-link">Home</a>
      </li> 
       <li class="nav-item">
        <a href="/produit" class="nav-link">Produit</a>
      </li>  
      <li class="nav-item">
        <a href="/login" class="nav-link">LogIn</a>
      </li>  
      <li class="nav-item">
        <a href="/register" class="nav-link">SignIn</a>
      </li>    
      <li class="nav-item">
        <a href="#" v-on:click="logout" class="nav-link">Log Out</a>
      </li> 
    </ul>
    </nav>
  </div>
</div> -->

</template>

<script>
import jwt_decode from "jwt-decode";
// import { Slide } from 'vue-burger-menu'
// import { PushRotate } from 'vue-burger-menu'
import { ScaleRotate } from 'vue-burger-menu'

function logout() {
  localStorage.removeItem('token');
  this.$router.push({ name: "Accueil" });
}

export default {
  name: "MyMenu",
  components: {
    // Slide,
    // PushRotate,
    ScaleRotate,
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
    const mytoken = localStorage.getItem('token');
    console.log("mytoken = ", mytoken)
    if (mytoken)
    {
      this.login = true;
      this.decodedToken = jwt_decode(mytoken);
      console.log("this.decodedToken = ", this.decodedToken);
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

h3{
  color:#0091CA;
  font-size: 20px;
  right: 100px;
  
}

</style>
