<template>
  <div class="wrap">
    <div>
      <div class="login-box">
        <div class="login-snip">
          <h1>Nouveau mot de passe</h1>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
              :autofocus="true"
              type="password"
              v-model="password"
              :rules="passwordRules"
              label="Entrez votre nouveau mot de passe"
              v-on:keyup.enter="validate"
              required>
            </v-text-field>
            <v-text-field
              type="password"
              v-model="repassword"
              :rules="repasswordRules"
              label="Entrez de nouveau votre nouveau mot de passe"
              v-on:keyup.enter="validate"
              required>
            </v-text-field>
            <v-btn
              :disabled="!valid || !password || !repassword"
              color="success"
              class="mr-4"
              @click="validate">
              Valider
            </v-btn>
          </v-form>
        </div>
      </div>
      <v-snackbar v-model="snackbar">
        {{snackbarText}}
        <template v-slot:action="{ attrs }">
          <v-btn color="pink" text v-bind="attrs" @click="snackbar = false">
            Fermer
          </v-btn>
        </template>
      </v-snackbar>
    </div>
  </div>
</template>

<script>
import api from "./../server";

function validate() {
  if ((!this.valid) || (!this.password) || (!this.repassword) || (this.password != this.repassword)) {
    return;
  }
  console.log("this.$route.params.id", this.$route.params.id);
  console.log("this.$route.params.token", this.$route.params.token);
  console.log('this.password :>> ', this.password);

  const url = api + "/user/changepassword";
  const payload = {
    id : this.$route.params.id,
    token : this.$route.params.token,
    password : this.password
  };

  console.log('url :>> ', url);
  console.log('payload :>> ', payload);

  // axios body
  this.axios.post(url, payload).then((res) => {
    console.log(' res.data :>> ',  res.data);
    if (res.status == 200) {
      this.snackbarText = "Votre mot de passe à bien été changé vous allé être redirigé";
      setTimeout(() => {
         this.$router.push({ path: `/login` });
      }, 3500);
      this.snackbar = true;
    }
  }).catch((error) => {
    if (error.response.status == 520) {
      this.snackbarText = "erreur inconnu";
    const mytoken = localStorage.getItem('token');
    if (mytoken)
      this.$router.push({ name: "accueil" });
    }
    if (error.response.status == 404) {
      this.snackbarText = "utilisateur inconnue";
    }
    if (error.response.status == 401) {
      this.snackbarText = "votre lien changement de mot de passe est invalide, réessayez d'envoyé un lien pour changer votre mot de passe!";
    }
    this.snackbar = true;
  })
}

export default {
  props: {},
  data() {
    return {
      valid: false,
      snackbar: false,
      password: "",
      repassword: "",
      passwordRules: [
        v =>  !!v || 'password is required',
        v => v.length >= 4 || 'password must have at least 4 character',
      ],
      repasswordRules: [
        v =>  !!v || 'password is required',
        v => v === this.password || 'confirmation password must be the same',
      ],
      snackbarText: "",
    };
  },
  methods: {
    validate,
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
body {
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
  text-align: center;

  color: #6a6f8c;
  background: #c8c8c8;
  font: 600 16px/18px "Open Sans", sans-serif;
}

.login-box {
  width: 100%;
  margin: auto;
  max-width: 525px;
  min-height: 670px;
  position: relative;
  background: url(https://images.unsplash.com/photo-1507208773393-40d9fc670acf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1268&q=80)
    no-repeat center;
  box-shadow: 0 12px 15px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
}

.login-snip {
  width: 100%;
  height: 100%;
  position: absolute;
  padding: 90px 70px 50px 70px;
  background: rgba(0, 77, 77, 0.9);
}
</style>
