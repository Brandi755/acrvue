<template>
  <div class="wrap">
    <!----------------2 section--------------->
    <!-- <img
      src="../assets/voiture.png"
      name="voiture"
      class="img"/> -->
     
        <div class="logo">
          <!-- <h6>Autoclerapide</h6> -->
        <img src="../assets/logost.png"
        class="logoimg">
      
           
      </div>
<div class="titre">
    <h4>Trouver votre clé en quelques clics</h4>
    </div>
    <div class="block">
      <div class="container">
        <div class="col-md-4 search-form">
          <div class="form-group">
            <vSelect
              :options="optionsMarque"
              v-model="marque"
              @input="afterMarque"/>
          </div>
          <div class="form-group">
            <vSelect
              :options="optionsModele"
              v-model="modele"
              v-if="marque"
              @input="afterModele"/>
          </div>
          <div class="form-group">
            <vSelect
              :options="optionsYear"
              v-model="annee"
              v-if="modele && marque"
            />
          </div>
          <button
            class="select-form-btm"
            @click="sendForm"
            v-if="annee && modele && marque"
          >
            TROUVER
          </button>
        </div>
      </div>
      <!-- fin choix option -->
      <!-------------- 3 ---------->
    </div>
    <!-------------- composant qui s'affiche une fois le prduit trouve ---------->
    <div class="find">
      <div class="result">
        <MyProduit v-if="res" :produit="res" />
        <!-- resultat cle -->
      </div>
    </div>
  </div>
</template>

<script>
import api from "./../server.js";
import vSelect from "vue-select";
import MyProduit from "./../components/MyProduit";
import "vue-select/dist/vue-select.css";


function sendForm() {
  // alert(this.marque + " " + this.modele + " " + this.annee);
  const url = api + "/produit/findBy/" + this.marque;
  this.axios.get(url).then(response => {
    response.data.produits.forEach(e => {
      if (this.annee == e.annee && this.modele == e.modele) {
        this.res = e;
        return;
      }
    });
    console.log("this.res :> ", this.res);
  });
}

function afterMarque() {
  this.modele = "";
  this.annee = "";
  this.axios
    .get(api + "/produit/findBy/" + this.marque)
    .then(res => {
      if (res.data.produits) {
        if (res.data.produits.length >= 0) {
          this.optionsModele = [];
        }
        res.data.produits.forEach(e => {
          if (!this.optionsModele.includes(e.modele)) {
            this.optionsModele.push(e.modele);
          }
        });
      } else {
        console.log("ERROR : produit/findBy/" + this.marque);
      }
    })
    .catch(err => {
      console.log("err:", err);
    });
}

function afterModele() {
  this.annee = "";
  this.axios
    .get("http://localhost:3000/produit/findBy/" + this.marque)
    .then(res => {
      if (res.data.produits) {
        if (res.data.produits.length >= 0) {
          this.optionsYear = [];
        }
        res.data.produits.forEach(e => {
          if (e.modele == this.modele) {
            if (!this.optionsYear.includes(e.annee)) {
              this.optionsYear.push(e.annee);
            }
          }
        });
      } else {
        console.log("ERROR : produit/findBy/" + this.marque);
      }
    })
    .catch(err => {
      console.log("err:", err);
    });
}

function getMarque() {
  this.axios
    .get("http://localhost:3000/produit/all/")
    .then(res => {
      if (res.data.produits) {
        res.data.produits.forEach(e => {
          if (!this.optionsMarque.includes(e.marque)) {
            this.optionsMarque.push(e.marque);
          }
        });
      } else {
        console.log("ERROR : produit/all/");
      }
    })
    .catch(err => {
      console.log("err:", err);
    });
}

export default {
  components: {
    vSelect,
    MyProduit
  },
  methods: {
    sendForm,
    afterModele,
    afterMarque,
    getMarque
  },
  data() {
    return {
      marque: "",
      modele: "",
      annee: "",
      optionsMarque: [],
      optionsModele: [],
      optionsYear: [],
      res: {},
    };
  },
  mounted() {
    this.getMarque();
  }
};
</script>

<style scoped>
.wrap {
  z-index: -1;
  width: 100%;
  height: 100%;
  justify-content: space-evenly;
  background-image: url('../assets/voiture.png');
   background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-color: #464646;
}
.img{
  position: absolute;
  left: 0;
  width: 100%;
}
.logoimg{
  width:200px;
  margin-top: 40px;
}
.logotitle{
  display: flex;
  justify-content: center;
}

h3{

  margin-top: 200px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 600;
  
}
.titre{
  position: relative;
   align-items: center;
  margin-top: 90px;
  }

button{
  
  /* background-color: black;
  color: white;
  border-radius: 5px;
  background-top */


   background: black;
   border-radius: 10px;
   color: #FFFFFF;
   font-family: Arial;
   font-size: 17px;
   font-weight: 700;
  height: 40px;
  width: 130px;
   
  
   /* box-shadow: 1px 1px 6px 0 rgb(228, 230, 237); */
   
 
   cursor: pointer;
  
}
/* 
.button:hover {

} */
  



.block {
  z-index: 10;
  display: flex;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 210px;
  /* background: blue; */
}
.find {
  display: flex;
  justify-content: center;
  /* border: 5px solid red; */
  width: 100%;
  height: 556px;

}
.result {
  /* border: 5px solid blue; */
  width: 280px;
  height: 100%;
}

.container{

  display: flex;
  justify-content: center;
  width: 100%;
  height: 40px;
  margin-top: 20px;
  position: relative;
}


/* .container-fluid{
  margin-top: 400px;
} */
</style>
