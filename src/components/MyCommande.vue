<template>
  <div class="wrap">
    <div class="tabContainer">
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">
                Nom
              </th>
              <th class="text-left">
                Prix unitaire
              </th>
              <th class="text-left">
                quantité
              </th>
              <th class="text-left">
                Prix total
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in panier" :key="item.produitId">
              <td class="text-left">{{ item.nom }}</td>
              <td class="text-left">{{ item.prix_unitaire }}</td>
              <td class="text-left">{{ item.quantite }}</td>
              <td class="text-left">
                {{
                  parseFloat(item.prix_unitaire) * item.quantite ||
                    item.soustotal
                }}
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </div>
    <p class="prix-total">
      {{ "le prix total de votre commande est " + prixtotal + "€" }}
    </p>
    <div class="formContainer">
      <v-form v-model="valid">
        <v-container>
          <v-row>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="firstname"
                :rules="nameRules"
                :counter="20"
                label="Prénom"
                required>
              </v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="lastname"
                :rules="nameRules"
                :counter="20"
                label="Nom de famillle"
                required>
              </v-text-field>
            </v-col>
            <v-col cols="12" md="12">
              <v-text-field
                :rules="adrRules"
                v-model="adrLiv"
                :counter="50"
                label="Adresse de livraison"
                required>
              </v-text-field>
            </v-col>
            <v-checkbox
              class="checkbox"
              v-model="checkbox"
              label="Utiliser la même adresse pour la facturation">
            </v-checkbox>
            <v-col cols="12" md="12" v-if="checkbox == false">
              <v-text-field
               :rules="adrRules"
                v-model="adrFac"
                :counter="50"
                label="Adresse facturation"
                required>
              </v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </div>
    <div class="buttonContainer" v-if="valid == true">
      <button class="button" @click="valide">valider la commande</button>
    </div>
  </div>
</template>

<script>
import VueJwtDecode from "vue-jwt-decode";
// import api from "./../server";

function valide() {
  if (localStorage.getItem("token")) {
    var client = VueJwtDecode.decode(localStorage.getItem("token"));
    console.log('client.id :>> ', client.id);
  } else {
    this.$router.push({ name: "login" });
    return;
  }
  // !!!
  var payload =  {
    info: this.panier,
    adresse_facturation: this.adrFac,
    adresse_livraison: this.adrLiv,
    nom: this.lastname,
    prenom: this.firstname,
    total: this.prixtotal,
    userId: client.id,
    email: this.decodedToken.email,
  };
  if (this.checkbox) {
    payload.adresse_facturation = this.adrLiv;
  }
  this.$router.push({
    name: "paypal",
    params: { total: this.prixtotal, payload: payload },
  });


}

export default {
  props: {
    panier: Array,
  },
  data() {
    return {
      prixtotal: 0,
      valid: false,
      firstname: '',
      lastname: '',
      adrFac: '',
      adrLiv: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 20 || 'Le nom doit être inférieur à 20 caractères',
      ],
      adrRules: [
        v => !!v || "Is required",
        v => (v && v.length >= 10 && v.length <= 50) || "Must be above 10 characters and less than 50 characters"

      ],
      checkbox: false,
      decodedToken: {},
    };
  },
  methods: {
    valide,
  },
  created() {
    const token = localStorage.getItem("token");
    if (!token) {
      this.$router.push({ name: "accueil" });
    }
    this.panier.forEach((element) => {
      this.prixtotal =
        this.prixtotal + element.prix_unitaire * element.quantite;
    });
    this.decodedToken = VueJwtDecode.decode(token);
    this.lastname = this.decodedToken.nom || "";
    this.firstname = this.decodedToken.prenom || "";
    this.adrFac = this.decodedToken.adresse_facturation || "";
    this.adrLiv = this.decodedToken.adresse_livraison || "";
    if (this.decodedToken.adresse_facturation == this.decodedToken.adresse_livraison) {
      this.checkbox = true;
    }
  }
};
</script>

<style scoped>
.wrap {
  height: 100%;
}
.tabContainer {
  border: 2px solid darkgray;
  border-radius: 10px;
  margin: 5%;
}
.formContainer {
  border: 2px solid darkgray;
  border-radius: 10px;
  margin: 5%;
}
.prix-total {
  font-size: 20px;
}
.buttonContainer {
  width: 200px;
  height: 40px;
  background-color: #007bff;
  color: #ffffff;
  display: inline-block;
  border-radius: 10px;
  text-transform: uppercase;
  font-weight: 600;
  font-family: "Open Sans", sans-serif;
}
.checkbox {
  padding-left: 10px;
}
.button {
  height: 100%;
  width: 100%;
  cursor: pointer;
}
</style>
