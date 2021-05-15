<template>
  <div class="container">
    <h1>My back Office</h1>
    <v-btn @click="ToggleClient = !ToggleClient" color="success"> Toggle Clients / Commances </v-btn>
    <TableClients v-if="ToggleClient == true" />
    <div v-if="ToggleClient == false">
      <div class="container-tab">
        <v-data-table :headers="headers" :items="datas" :items-per-page="5" sort-by="id" class="elevation-5">
          <template v-slot:item.info="{ item }">
            <json-viewer boxed copyable :expand-depth="0" :value="item.info"></json-viewer>
          </template>
          <template v-slot:item.user="{ item }">
            <json-viewer boxed copyable :expand-depth="0" :value="item.user"></json-viewer>
          </template>
          <template v-slot:item.created_at="{ item }">
            <div >{{new Date(item.created_at).toLocaleDateString(undefined, optionsDate) + " " + new Date(item.created_at).toLocaleTimeString()}}</div>
          </template>
          <template v-slot:item.actions="{ item }">
            <v-icon small class="mr-2" @click="editBtn(item)"> mdi-pencil</v-icon>
            <v-icon small @click="deleteBtn(item)"> mdi-delete</v-icon>
          </template>
        </v-data-table>
      </div>
      <div class="container-tab">
        <v-card class="mx-auto elevation-5">
          <v-card-text>
            <div class="display-1 text--primary">Valider une commande</div>
          </v-card-text>
          <v-card-actions >
            <v-text-field v-model="idToValidate" label="ID commande" required></v-text-field>
            <v-btn @click="editCommande(true)" color="success"> Valider la commande</v-btn>
            <v-btn @click="editCommande(false)" color="warning"> Annuler la commande </v-btn>
          </v-card-actions>
        </v-card>
      </div>
      <div class="container-tab">
        <v-card class="mx-auto elevation-5">
          <v-card-text>
            <div class="display-1 text--primary">Supprimer une commande</div>
          </v-card-text>
          <v-card-actions >
            <v-text-field v-model="idToDel" label="ID commande" required></v-text-field>
            <v-btn color="success" class="mr-4" @click="deleteCommande">
              Supprimer
            </v-btn>
          </v-card-actions>
        </v-card>
      </div>

    </div> 
  </div>
</template>

<script>
/* L'import de nos fichier */
import api from "./../../server.js";
import TableClients from "./TableClients.vue"

/* L'import des fichiers node module (c'est pas nous qui les avons crée) */
import jwt_decode from "jwt-decode";

function deleteBtn(item) {
  this.idToDel = item.id;
}

function deleteCommande() {
  const mytoken = localStorage.getItem('token');
  const url = api + "/commande/admin/delete/" + this.idToDel;
  var r = confirm("Supprimer la commande : " + this.idToDel);
  if (r == true) {
    this.axios.post(url, {token: mytoken} ).then((response) => {
      this.initializeTab();
    }).catch((err) => {  //else 401 ou et res.data.result != true
      console.log(err);
    });
  } 
}

function editCommande(status) {
  const mytoken = localStorage.getItem('token');
  const url = api + "/commande/admin/edit/" + this.idToValidate;
  var r = confirm("Editer la commande : " + this.idToValidate + " status = " + status);
  if (r == true) {
    this.axios.post(url, {token: mytoken, status: status} ).then((response) => {
      this.initializeTab();
    }).catch((err) => {  //else 401 ou et res.data.result != true
      console.log(err);
    });
  } 
}

function editBtn(item) {
  this.idToValidate = item.id;
}

function initializeTab() {
  const mytoken = localStorage.getItem('token');
  const url = api + "/commande/admin";
  this.axios.post(url, {token: mytoken} ).then((response) => {
    this.datas = response.data;
  }).catch((err) => {  //else 401 ou et res.data.result != true
    console.log(err);
  });
}

export default {
  components: {
    TableClients
  },
  props: {

  },
  methods: {
    initializeTab,
    deleteBtn,
    deleteCommande,
    editCommande,
    editBtn,
  },
  data() {
    // Nom prénom email info-commande(json)
    return {
      headers: [
        {
          text: "id commande",
          value: "id",
        },
        {
          text: "user",
          value: "user",
        },
        {
          text: "adresse livraison",
          value: "adresse_livraison",
        },
        {
          text: "adresse facturation",
          value: "adresse_facturation",
        },
        {
          text: "date",value: "created_at",
        },
        {
          text: 'info_commande',
          sortable: false,
          value: 'info',
        },
        { text: "total", value: "total" },
        { text: "status", value: "status" },
        { text: 'Actions', value: 'actions', sortable: false }
        // { text: 'Actions', value: 'actions', sortable: false },
      ],
      datas:  [], // data des commandes
      optionsDate: { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' },
      idToDel: "",
      idToValidate: "",
      ToggleClient: false,
    };
  },
  created() {
    this.initializeTab();
  },
};
</script>

<style scoped>
.container-tab {
  padding: 10px;
  margin-top: 10px;
}



@media screen and (min-width: 480px) and (max-width: 767.9px) {
  .container-tab {
  padding: 1px;
 
}
  
}


@media screen and (min-width: 320px) and (max-width: 479.9px) {

.container-tab {
  padding: 2px;
 
}
.v-card__actions{
  display: flex;
   flex-direction: column;
  justify-content: center;
  align-items: center;
}
h1{
  margin-top: 15%;
}
}
</style>
