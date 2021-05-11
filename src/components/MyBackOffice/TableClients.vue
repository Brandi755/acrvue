<template>
  <div class="container">
    <v-data-table :headers="headers" :items="clients" :items-per-page="5" class="elevation-5">
      <template v-slot:item.commandes="{ item }">
        <json-viewer boxed copyable :expand-depth="0" :value="item.commandes"></json-viewer>
      </template>
      <!-- <template v-slot:item.user="{ item }">
        <json-viewer boxed copyable :expand-depth="0" :value="item.user"></json-viewer>
      </template> -->
      <!-- <template v-slot:item.created_at="{ item }">
        <div >{{new Date(item.created_at).toLocaleDateString(undefined, optionsDate) + " " + new Date(item.created_at).toLocaleTimeString()}}</div>
      </template> -->
    </v-data-table>
  </div>
</template>

<script>
import api from "./../../server.js"


const tabHeaders = [
  {
    text: "Id",
    value: "id",
  },
  {
    text: "Email",
    value: "email",
  },
  {
    text: "Nom",
    value: "nom",
  },
  {
    text: "Prenom",
    value: "prenom",
  },
  {
    text: "Adresse livraison",
    value: "adresse_livraison",
  },
  {
    text: "Adresse facturation",
    value: "adresse_facturation",
  },
  {
    text: "Role",
    value: "role",
  },
  {
    text: "Valid",
    value: "valid",
  },
  {
    text: "ValidToken",
    value: "validtoken",
  },
  {
    text: "Commandes",
    value: "commandes",
  },
]

function initializeTab() {
  const mytoken = localStorage.getItem('token');
  console.log('mytoken :>> ', mytoken);
  const url = api + "/user/admin/";
  this.axios.post(url, {token: mytoken} ).then((response) => {
    this.clients = response.data;
  }).catch((err) => {  //else 401 ou et res.data.result != true
    console.log(err);
  });
}

export default {
  data() {
    return {  
      headers: tabHeaders,
      clients: [],
    };
  },
  methods: {
    initializeTab,
  },
  created() {
    this.initializeTab();
  }
}

</script>

<style scoped>
.container {
  padding: 10px;
}
</style>