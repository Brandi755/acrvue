<template>
  <div>
    <div class="login-box">
      <div class="login-snip">
        <h1>Foreget Password</h1>
        <v-form ref="form" v-model="valid" @submit.prevent="" lazy-validation>
          <v-text-field
            utofocus="true"
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            v-on:keyup.enter="validate"
            required
          ></v-text-field>
          <v-btn
            :disabled="!valid  || !email"
            color="success"
            class="mr-4"
            @click="validate"
          >
            Validate
          </v-btn>

        </v-form>
        <a class="link" href="./login">retour</a>
      
      </div>
       

    </div>
    <v-snackbar v-model="snackbar">
     {{snackbarTxt}}
      <template v-slot:action="{ attrs }">
        <v-btn color="pink" text v-bind="attrs" @click="snackbar = false">
          Fermer
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import api from "./../server";

// c quoi deja async
async function validate() {
  if (!this.valid || !this.email ) return;
  const url = api + "/user/forgetpassword";
  const payload = {email: this.email};
  const res = await this.axios.post(url, payload).catch((error) => {
    console.log("error.response.status :> ", error.response.status);
    if (error.response.status == 404) {
      this.snackbarTxt = "Nous avons pas trouvé votre adresse mail, veuillez-vous inscrire.";
    }
    if (error.response.status == 401) {
      this.snackbarTxt = "veuillez regarder votre boite email et dans les spams et validé votre compte";
    }
    this.snackbar = true;
  })
  if (!res) return;
  if (res.status == 200){
    this.snackbarTxt = "un email vous a été envoyé pour changer votre mot de passe";
  }
  this.snackbar = true;
}

export default {
  props: {},
  data() {
    return {
      valid: false,
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      snackbar: false,
      snackbarTxt: "",
    };
  },
  methods: {
    validate,
  },
  created() {

  }
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
  position: absolute;
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
.link{
  margin-top: 200px;
  color: red;
  position: relative;
  margin-top: 200px;
}

</style>
