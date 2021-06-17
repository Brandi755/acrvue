<template>
  <div class="wrap">
    <div class="acceuil-wrap">
      <div class="logo">
        <img src="../assets/logost.png" class="logoimg" />
      </div>
      <div class="titre">
        <h4>Trouver votre clé en quelques clics</h4>
      </div>
      <div class="block">
        <div class="container">
          <div class="col-md-4 search-form">
            <div class="form-group">
              <vSelect
                class="vSelect"
                :options="optionsMarque"
                v-model=  "marque"
                @input="afterMarque"
              />
            </div>
            <div class="form-group">
              <vSelect
                class="vSelect"
                :options="optionsModele"
                v-model="modele"
                v-if="marque"
                @input="afterModele"
              />
              <!-- v-if="marque" si marque existe -->
            </div>
            <div class="form-group">
              <vSelect
                class="vSelect"
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
      </div>
      <!-------------- composant qui s'affiche une fois le prduit trouvé---------->
      <div class="find" v-if="res.prix">
        <div class="result">
          <MyProduit :produit="res" />
        </div>
      </div>
    </div>
    <MyFooter />
  </div>
</template>

<script>
// api = http/localhost3000 qui est le lien de mon api
import api from "./../server.js";
// importation ici , si je veux global je met dans main.js
import vSelect from "vue-select";
// importation du composant produit pr utiliser dans le template comme le reste
import MyProduit from "./../components/myproduit";
import MyFooter from "./../components/MyFooter";
import "vue-select/dist/vue-select.css";

// fonction qui va envoyer nos choix marque, modele, annnee cette fonction va s'executer quand clik sur TROUVER
// api est une variable contenant l'url de mon API dans server.js
function sendForm() {
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
    .get(api + "/produit/findBy/" + this.marque)
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

// ici dans la fonction j'utilise la route produit/all pour afficher toutes mes marques présente dans ma BD
function getMarque() {
  this.axios
    .get(api + "/produit/all/")
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
// tous cela est exporté pour être utiliser dans le template
export default {
  components: {
    vSelect,
    MyProduit,
    MyFooter
  },
  // OBJETS
  methods: {
    // raccourcis car meme nom, dans une clé et une valeur
    //  sendForm :sendForm
    sendForm,
    afterModele,
    afterMarque,
    getMarque
  },
  // FONCTION qui retourne des Objet 'par contre'
  data() {
    return {
      marque: "",
      modele: "",
      annee: "",
      optionsMarque: [],
      optionsModele: [],
      optionsYear: [],
      res: {}
    };
  },
  // FONCTIONS CYClE de vie
  mounted() {
    this.getMarque();
    // setTimeout(() => {
    //   console.log('typeof res.prix :>> ', typeof  this.res.prix);
    //   console.log(" §§§§ this.res", this.res);
    // }, 6000);
    // console.log('typeof res.prix :>> ', typeof  this.res.prix);
    // console.log(" §§§§ this.res", this.res);
  }
};
</script>

<style scoped >
.wrap {
  display: flex;
  flex-direction: column;
  z-index: -1;
  width: 100%;
  height: auto;
  justify-content: space-between;
}
.acceuil-wrap {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  background-image: url("../assets/voiture.png");
  background-position: right top;
  background-repeat: no-repeat;
  /*background-attachment: fixed;*/
  background-size: auto 100%;
  background-color: white;
}
.img {
  position: absolute;
  left: 0;
  width: 100%;
}
.logoimg {
  width: 300px;
  margin-top: 30px;
}
.logotitle {
  display: flex;
  justify-content: center;
}

h3 {
  margin-top: 200px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 600;
}
.titre {
  position: relative;
  align-items: center;
  margin-top: 90px;
}

button {
  background: black;
  border-radius: 10px;
  color: #ffffff;
  font-family: Arial;
  font-size: 17px;
  font-weight: 700;
  height: 40px;
  width: 130px;
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
}
.vSelect {
  border-radius: 4px;
  background: white;
}
.find {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 556px;
  margin-bottom: 20px;
}

.result {
  width: 280px;
  height: 100%;
}

.container {
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

@media screen and (min-width: 480px) and (max-width: 768px) {
  .acceuil-wrap {
    background-image: none;
  }
  .wrap img {
    width: 300px;
  }
}

@media screen and (max-width: 479.9px) {
  .acceuil-wrap {
    background-image: none;
  }
  .wrap,
  img {
    z-index: -1;
    width: 100%;
  }
  h4 {
    padding: 10px 10px;
  }
  .logoimg {
    width: 300px;
    margin-top: 80px;
  }
}
</style>
