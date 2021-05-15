<template>
  <div class="wrap">
    <div class="logo">
      <img src="../assets/logost.png" class="logoimg" />
    </div>

    <div class="titre">
      <h4>Acheter votre clé en quelques clics</h4>
    </div>

    <span>
      <br /><br />
      <b>Rechercher une marque spécifique</b>
    </span>
    <!-- barre recherche -->
    <div class="searchtest">
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
        crossorigin="anonymous"
      />
      <div class="containerS">
        <fieldset>
          <div class="input-group">
            <div class="input-group-prepend"></div>
            <!-- lien barre recherche -->
            <input
              id="oSaisie"
              name="oSaisie"
              type="text"
              v-model="marque"
              class="form-control"
              aria-label="Saisie de mots clés"
              required="required"
              v-on:keyup.enter="sendForm"
            />
            <div class="input-group-append">
              <button class="btn btn-primary" @click="sendForm">
                Recherche
              </button>
            </div>
          </div>
        </fieldset>
      </div>
    </div>
    <!-- fin barre de recherche -->
    <section class="our-publication pt-10 pb-70">
      <div class="container">
        <div class="section-header">
          <!-- <h2>Nos Produits</h2> -->
        </div>
        <div class="row">
          <div
            class="col-sm-6 col-lg-3"
            v-for="produit in produits"
            :key="produit.id"
          >
            <MyProduit :produit="produit" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import MyProduit from "./MyProduit";
import api from "./../server";

function sendForm() {
  if (!this.marque) {
    this.axios
      .get("http://localhost:3000/produit/all")
      .then(res => {
        this.produits = res.data.produits;
      })
      .catch(err => {
        alert(err);
      });
  }
  const url = api + "/produit/findBy/" + this.marque;
  this.axios.get(url).then(response => {
    this.produits = response.data.produits;
  });
}

export default {
  props: ["produits"],
  components: {
    MyProduit
  },
  data() {
    return {
      marque: ""
    };
  },
  methods: {
    sendForm
  },
  mounted() {}
};
</script>

<style scoped>
.logo img {
  width: 300px;
  margin-top: 30px;
}

.imgp {
  width: 2%;
}
.text-block {
  height: 80px;
  overflow: auto;
}
.pt-10 {
  padding-top: 10px;
}
.pb-70 {
  padding-bottom: 70px;
}
.section-header {
  margin-bottom: 60px;
  text-align: center;
}
.section-header i {
  color: blue;
  font-size: 50px;
  display: inline-block;
  margin-bottom: 10px;
}
.section-header h2 {
  font-weight: bold;
  font-size: 34px;
  margin: 0;
}
.section-header p {
  max-width: 500px;
  margin: 20px auto 0;
}
.searchtest {
  /* border: 5px solid red; */
  display: flex;
  justify-content: center;

  width: 100%;
  height: 40px;
  margin-top: 20px;
}
.titre {
  align-items: center;
  margin-top: 90px;
}
@media screen and (max-width: 479.9px) {
  .logo img {
    width: 300px;
    margin-top: 80px;
  }

  .titre {
    margin-top: 60px;
  }
}
</style>
