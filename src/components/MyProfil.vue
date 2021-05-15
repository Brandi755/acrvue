<template>
  <div class="wrap">
    <div v-if="myToken" class="profil">
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field
          v-model="nom"
          :counter="25"
          :rules="rules"
          label="Nom"
          required
        ></v-text-field>
        <v-text-field
          v-model="prenom"
          :counter="25"
          :rules="rules"
          label="Prénom"
          required
        ></v-text-field>
        <v-text-field
          v-model="adresse"
          :counter="50"
          :rules="rulesAdr"
          label="Adresse de Livrason"
          required
        ></v-text-field>
        <v-checkbox
          v-model="checkbox"
          label="Utiliser la même adresse pour la facturation"
        ></v-checkbox>
        <v-text-field
          v-if="!checkbox"
          v-model="adresseFacturation"
          :counter="50"
          :rules="rulesAdr"
          label="Adresse de Facturation"
          required
        ></v-text-field>
        <!-- disabled butoun vuetify -->
        <v-btn
          v-if="valid == true"
          color="success"
          class="mr-4"
          @click="validate"
        >
          Valider
        </v-btn>
        <v-btn
          v-if="valid == false"
          color="warning"
          class="mr-4"
          @click="validate"
        >
          Valider
        </v-btn>
      </v-form>
      <!-- snackbar -->
      <v-snackbar v-model="snackbar">
        votre profil a bien été mis à jour!

        <template v-slot:action="{ attrs }">
          <v-btn color="pink" text v-bind="attrs" @click="snackbar = false">
            Fermer
          </v-btn>
        </template>
      </v-snackbar>
    </div>

    <div v-if="!myToken">
      <v-btn color="success" class="mr-4" @click="login">
        Login
      </v-btn>
    </div>
  </div>
</template>

<script>
import api from "./../server";
import jwt_decode from "jwt-decode";

//  pauser question sur valid et validate
function validate() {
  console.log("this.myToken :> ", this.myToken);
  const validForm = this.$refs.form.validate();
  if (validForm == true) {
    let obj = {
      nom: this.nom,
      prenom: this.prenom,
      adresse_livraison: this.adresse,
      adresse_facturation: this.adresseFacturation,
      token: this.myToken
    };
    if (
      this.checkbox == true ||
      !this.adresseFacturation ||
      this.adresseFacturation == ""
    ) {
      obj.adresse_facturation = this.adresse;
    }
    this.axios
      .put(api + "/user/update/" + this.decodedToken.id, obj)
      .then(res => {
        console.log("res.data PUT /user/update/ :> ", res.data);
        if (res.data.token) {
          console.log("res.data.token ", res.data.token);
          localStorage.setItem("token", res.data.token);
          this.myToken = res.data.token;
          if (this.myToken) {
            this.decodedToken = jwt_decode(this.myToken);
            console.log("this.decodedToken :> ", this.decodedToken);
            this.nom = this.decodedToken.nom;
            this.prenom = this.decodedToken.prenom;
            this.adresse = this.decodedToken.adresse_livraison;
            this.adresseFacturation = this.decodedToken.adresse_facturation;
          } else {
            this.$router.push({ name: "login" });
          }
          // snackbar
          this.snackbar = true;
        } else {
          console.log(
            "Error Myprofil.vue res.status != 200 || ! res.data.token"
          );
        }
      })
      .catch(err => {
        alert("error ici");
        console.log(err);
        console.log(err.response);
      });
  }
}

function login() {
  this.$router.push({ name: "login" });
}

export default {
  name: "MyProfil",
  props: ["profil"],
  methods: {
    validate,
    login
  },
  data() {
    return {
      valid: false,
      checkbox: false,
      nom: "",
      prenom: "",
      adresse: "",
      adresseFacturation: "",
      rules: [
        v => !!v || "Is required",
        v => (v && v.length <= 25) || "Must be less than 25 characters"
      ],
      rulesAdr: [
        v => !!v || "Is required",
        v =>
          (v && v.length >= 10 && v.length <= 50) ||
          "Must be above 10 characters and less than 50 characters"
      ],
      myToken: null,
      decodedToken: {},
      snackbar: false
    };
  },
  // me permet de recuper les info du token avec getitem
  created() {
    this.myToken = localStorage.getItem("token");
    if (this.myToken) {
      this.decodedToken = jwt_decode(this.myToken);
      console.log("this.decodedToken :> ", this.decodedToken);
      this.nom = this.decodedToken.nom;
      this.prenom = this.decodedToken.prenom;
      this.adresse = this.decodedToken.adresse_livraison;
      this.adresseFacturation = this.decodedToken.adresse_facturation;
    } else {
      this.$router.push({ name: "login" });
    }
  }
};
</script>

<style scoped>
.profil {
  padding: 5%;
}
.mr-4 {
  margin-top: 5%;
}

@media screen and (min-width: 480px) and (max-width: 767.9px) {
  .mr-4 {
    margin-top: 25%;
  }
}

@media screen and (max-width: 479.9px) {
  .mr-4 {
    margin-top: 25%;
  }
}
</style>
