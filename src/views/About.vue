<template>
  <div class="wrap">
    <div class="About"></div>    <section class="premiere">
      <img
        src="../assets/voiture.png"
        name="voiture"
        width="100%"
        height="100%"
      />
    </section>
    <!----------------2 section--------------->
    <div class="block">
      <!-- debut -->
      <div class="col-md-4 search-form">
        <form class="filter-form">
          <div class="form-group">
            <select class="select-input select-brand" v-model="marque">
              <option value="" disabled selected>Marque</option>
              <option>Lepot</option>
              <option>Tesla</option>
              <option>lola</option>
              <option>Toyota</option>
            </select>
          </div>
          <div class="form-group">
            <select class="select-input select-model" v-model="modele" v-if="marque">
              <option value="" disabled selected>Modele</option>
              <option value="CL1">CL1</option>
              <option value="CL2">CL2</option>
              <option value="CL3">CL3</option>
              <option value="CL4">CL4</option>
            </select>
          </div>
          <div class="form-group">
            <select class="select-input select-year" v-model="annee" v-if="modele">
              <option value="" disabled selected>Annee</option>
              <option>2020</option>
              <option>2019</option>
              <option>2018</option>
            </select>
          </div>
          <button class="select-form-btm find" v-on:click="sendForm" v-if="annee">
            TROUVER
          </button>
        </form>
        <h1>test</h1>
    </div>
    <!-- fin choix option -->
    <!-------------- 3 ---------->
    <section class="granp">
      <div class="parent1">
        <img src="../assets/logo/audi copie.jpg" width="100" alt="" />
      </div>

      <div class="parent1">
        <img src="../assets/logo/chevrolet.jpg" width="100" alt="" />
      </div>

      <div class="parent1">
        <img src="../assets/logo/chrysler.jpg" width="100" alt="" />
      </div>

      <div class="parent1">
        <img src="../assets/logo/citroen copie.jpg" width="100" alt="" />
      </div>
    </section>

    <section class="text">
      <div class="responsivetext">
        <h2>Test</h2>
        <p>
          Pourquoi choisir Auto Clé Rapide Nous vous proposons un service de
          qualitée rapide pour vos doubles de clé. Ainsi que des solutions si
          vous avez perdues toutes vos clées sur tout l'ile de France rendez
          vous sur notre page contact .
        </p>
      </div>
    </section>

    <section class="femme">
      <img src="../assets/femme.png" name="femme" width="100%" height="100%" />
    </section>

    <div>
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group
          id="input-group-1"
          label="Email address:"
          label-for="input-1"
          description="We'll never share your email with anyone else."
        >
          <b-form-input
            id="input-1"
            v-model="form.email"
            type="email"
            required
            placeholder="Enter email"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="form.name"
            required
            placeholder="Enter name"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-3" label="Food:" label-for="input-3">
          <b-form-select
            id="input-3"
            v-model="form.food"
            :options="foods"
            required
          ></b-form-select>
        </b-form-group>

        <b-form-group id="input-group-4">
          <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
            <b-form-checkbox value="me">Check me out</b-form-checkbox>
            <b-form-checkbox value="that">Check that out</b-form-checkbox>
          </b-form-checkbox-group>
        </b-form-group>

        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
      </b-form>
      <b-card class="mt-3" header="Form Data Result">
        <pre class="m-0">{{ res }}</pre>
      </b-card>
    </div>
  </div>
  </div>
</template>

<script>
import api from "./../server.js";

export default {
  methods: {
    sendForm(e) {
      e.preventDefault();
      alert(this.marque + " " + this.modele + " " + this.annee);
      const url = api + "/produit/findBy/" + this.marque;
      console.log("La variable url : ", url);
      this.axios.get(url).then((response) => {
        this.res = response.data.produits;
      })
    },
  },
  data() {
      return {
        marque: "",
        modele: "",
        annee: "",
        res: [],
      };
    },
  mounted() {}
};
</script>

<style scoped>
.premiere {
  width: 100%;
  position: absolute;
}

select.select-input.select-brand {
  color: white;
  font: 18px Scope;
  background: black;
  padding: 0px 0px 0px 100px;
}

select.select-input.select-model {
  color: white;
  font: 18px Scope;
  background: black;
  padding: 0px 0px 0px 100px;
}

select.select-input.select-year {
  color: white;
  font: 18px Scope;
  background: black;
  padding: 0px 0px 0px 100px;
}

.granp {
  display: flex;
}
/* section choix */

.block {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  margin-bottom: 200px;
}

.text {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-family: "Poppins", sans-serif;
}

.responsivetext {
  padding: 8vh;
}

.sectiontexte .text {
  border: 20px 100px 100px;
  margin-top: 100px;

  background: greenyellow;
  width: 100%;
  /*  */
}
</style>