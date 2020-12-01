<template>
  <div class="container">
    <h1>Mon Profil</h1>
    <div class="row" v-if="message !== null">
      <div class="col-12 text-lg-center">
        {{ message }}
      </div>
    </div>
    <div class="row">
      <div class="col-md-3">
        <div>
          <img
            v-if="client.image !== undefined"
            :src="client.image"
            class="avatar img-fluid"
            alt="avatar"
          />
          <img v-else :src="pic" class="avatar img-fluid" alt="avatar" />
          <h6>Upload a different photo ...</h6>
          <input type="file" accept="image/jpeg" @change="uploadImage" />
        </div>
      </div>

      <div class="col-md-9 form-update">
        <form action="" @submit.prevent="update">
          <div class="form-group">
            <label class="control-label" for="nom"> Nom: </label>
            <div class="col-lg-4">
              <input
                class="form-control"
                type="text"
                name="nom"
                id="nom"
                v-model="client.nom"
              />
            </div>
          </div>
          <div class="form-group">
            <label class="control-label" for="prenom"> Prenom: </label>
            <div class="col-lg-4">
              <input
                class="form-control"
                type="text"
                name="prenom"
                id="prenom"
                v-model="client.prenom"
              />
            </div>
          </div>
          <div class="form-group">
            <label class="col-md-3 control-label" for="email"> Email: </label>
            <div class="col-lg-4">
              <input
                class="form-control"
                type="email"
                name="email"
                id="email"
                v-model="client.email"
              />
            </div>
          </div>
          <div class="form-group">
            <label class="col-md-3 control-label" for="email"> adresse: </label>
            <div class="col-lg-4">
              <input
                class="form-control"
                type="text"
                name="adresse"
                id="adresse"
                v-model="client.adresse"
              />
            </div>
          </div>
          <div class="form-group">
            <label class="col-md-3 control-label" for="email"> cp: </label>
            <div class="col-lg-4">
              <input
                class="form-control"
                type="text"
                name="cp"
                id="cp"
                v-model="client.cp"
              />
            </div>
          </div>
          <div class="form-group">
            <label class="col-md-3 control-label" for="email"> ville: </label>
            <div class="col-lg-4">
              <input
                class="form-control"
                type="text"
                name="ville"
                id="ville"
                v-model="client.ville"
              />
            </div>
          </div>
          <div class="form-group">
            <label class="col-md-3 control-label" for="password">
              password:
            </label>
            <div class="col-lg-4">
              <input
                class="form-control"
                type="password"
                name="password"
                id="password"
                v-model="client.password"
              />
            </div>
          </div>
          <div class="form-group">
            <input
              type="submit"
              class="btn btn-primary"
              value="Mettre a jour"
            />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import VueJwtDecode from "vue-jwt-decode";

export default {
  name: "profil",
  data() {
    return {
      client: {},
      message: null,
      pic: null,
    };
  },
  created: function() {
    if (localStorage.getItem("token") === null) {
      this.$router.push({ name: "Login" });
    } else {
      this.client = VueJwtDecode.decode(localStorage.getItem("token"));
      console.log(this.client);
    }
  },
  methods: {
    uploadImage(e) {
      const image = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = (e) => {
        this.pic = e.target.result;
        this.client.image = e.target.result;
      };
    },
    update: function() {
      this.axios
        .put(
          "http://localhost:3000/client/update/" + this.client.id,
          this.client
        )
        .then((res) => {
          if (res.status === 200) {
            localStorage.setItem("token", JSON.stringify(res.data.token));
            this.message = "votre profil est a jour";
          } else {
            this.message = "error: votre profil n'est pas mis a jour";
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
<style></style>
