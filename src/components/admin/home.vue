<template>
  <div>
<h1>Bonjour {{user.nom}}</h1>

  </div>
</template>

<script>import jwt from "vue-jwt-decode";
export default {
    data(){ 
        return {
            user: {},
        };
    },

    created() {
        if(localStorage.getItem("auth")){
        console.log(localStorage.getItem("auth"));
        // on lui dit de décritper le token (pour connaitre les droits les roles)
        var user = jwt.decode(localStorage.getItem("token"));
        // si le rôle est differant de admin par défaut 
        if(user.role != "admin"){
            localStorage.removeItem("token");
            localStorage.removeItem("auth");
            this.$router.push({ path: "/admin/login"});

        }    
    }
  },
};
</script>

<style>

</style>