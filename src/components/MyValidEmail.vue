<template>
  <div class="wrap">
    <div class="valid">
      <h5>bonjour {{$route.params.email}} pour finaliser la création de votre compte clicker sur valider</h5>
      <button class="btn" @click="validEmail">Valider</button>
     </div>
     <v-snackbar v-model="snackbar">
        votre compte a bien été validé, vous allez être rediriger pour vous connecter!
        <template v-slot:action="{ attrs }">
          <v-btn color="pink"
            text
            v-bind="attrs"
            @click="snackbar = false">
            Fermer
          </v-btn>
        </template>
      </v-snackbar>
  </div>
</template>

<script>
import api from "./../server";


function validEmail(){
  console.log('La fonction validEmail ce lance !');
  console.log("this.$route.params.email", this.$route.params.email);
  console.log("this.$route.params.token", this.$route.params.token);
  // Axios
  const url = api + "/user/validuser";
  this.axios.post(url, {email: this.$route.params.email, token: this.$route.params.token}).then((response) => {
    console.log('response.data :>> ', response.data);
    this.snackbar = true;
    setTimeout(() => {
      this.$router.push({ path: `/login` });
    }, 3000);
  }).catch((err) => {
    console.log(err);
  });
}

export default {
  name: "MyValidEmail",
  props: ["validemail"],
  methods:{
    validEmail,
  },
  data() {
    return {
      snackbar: false,
    };
  },
  created() {
    const mytoken = localStorage.getItem('token');
    if (mytoken) {
      this.$router.push({ name: "accueil" });
    }
  },
};
</script>




<style scoped>



.valid{
  margin-top: 180px;
}

.btn{
 background: black;
 border-radius: 10px;
 color: #FFFFFF;
 font-family: Arial;
 font-size: 17px;
 font-weight: 700;
 height: 40px;
 width: 130px;
 margin-top: 30px;
}



</style>