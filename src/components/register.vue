<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-6 mx-auto p-0">
        <div class="card">
          <div class="login-box">
            <div class="login-snip">
              <input
                id="tab-1"
                type="radio"
                name="tab"
                class="sign-in"
                checked
              />
              <label for="tab-1" class="tab">Se connecter</label>
              <input id="tab-2" type="radio" name="tab" class="sign-up" />
              <label for="tab-2" class="tab">S'inscrire</label>
              <div class="login-space">
                <div class="login">
                  <div class="group">
                    <label for="user" class="label">Nom d'utilisateur</label>
                    <input
                      id="user"
                      type="text"
                      class="input"
                      placeholder="Entrez votre nom d'utilisateur"
                      v-on:keyup.enter="dologin"
                      v-model="emaillogin"/>
                  </div>
                  <div class="group">
                    <label for="pass" class="label">Mot de passe</label>
                    <input
                      id="pass"
                      type="password"
                      class="input"
                      data-type="password"
                      placeholder="Entrez votre mot de passe"
                      v-on:keyup.enter="dologin"
                      v-model="passwordlogin"/>
                  </div>
                  <div class="group">
                    <input id="check" type="checkbox" class="check" checked />
                    <label for="check"
                      ><span class="icon"></span> Gardez-moi connecté</label
                    >
                  </div>
                  <div class="group">
                    <button
                      class="button"
                      value="Sign In"
                      v-on:click="dologin">
                      Se connecter
                    </button>
                  </div>
                  <div class="hr"></div>
                  <div class="foot"><a href="#">Mot de passe oublier?</a></div>
                </div>
                <div class="sign-up-form">
                  <div class="group">
                    <label for="pass" class="label">adresse e-mail</label>
                    <input
                      v-on:keyup.enter="doregister"
                      v-model="email"
                      id="pass"
                      type="text"
                      class="input"
                      placeholder="Entrez votre adresse e-mail"
                    />
                  </div>
                  <div class="group">
                    <label for="pass" class="label">Mot de passe</label>
                    <input
                      v-on:keyup.enter="doregister"
                      v-model="password"
                      id="pass"
                      type="password"
                      class="input"
                      data-type="password"
                      placeholder="Créez votre mot de passe"
                    />
                  </div>
                  <div class="group">
                    <label for="pass" class="label"
                      >Répéter le mot de passe</label
                    >
                    <input
                      v-on:keyup.enter="doregister"
                      v-model="repassword"
                      id="pass"
                      type="password"
                      class="input"
                      data-type="password"
                      placeholder="Répétez votre mot de passe"
                    />
                  </div>
                  <div class="group">
                    <button
                      class="button"
                      value="Sign Up"
                      v-on:click="doregister"
                    >
                      S'incrire
                    </button>
                  </div>
                  <div class="hr"></div>
                  <div class="foot">
                    <label for="tab-1">Déjà membre ?</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

function dologin() {
  console.log(this.login);
  this.axios
    .post("http://localhost:3000/user/login", {
      email: this.emaillogin,
      password: this.passwordlogin,
    })
    .then((res) => {
      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        this.$router.push({ name: "Home" });
        window.location.reload();
      } else {
        this.$router.push({
          name: "login",
          params: { msg: "non connecté" },
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

function doregister() {
  if (this.password !== this.repassword) {
    alert("Les 2 mots de passes sont incorrecte merci de recommencer !");
    return;
  }
  this.axios
    .post("http://localhost:3000/user/register", {
      email: this.email,
      password: this.password,
    })
    .then((res) => {
      console.log(res);
      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        /* une fois les donnes recperer et stockés il va nous renvoyer sur home */
        this.$router.push({ name: "login" });
        window.location.reload();
      } else {
        this.$router.push({
          name: "register",
          params: { msg: "non connecté" },
        });
      }
    })
    .catch((err) => {
      console.log("err:", err);
    });
}

export default {
  name: "register",
  data() { // <--- Variable Data
    return {
      // REGISTER VARAIBLE
      email: "",
      password: "",
      repassword: "",
      // Login VARAIBLE
      emaillogin: "",
      passwordlogin: "",
    };
    
  },
  components: {},
  methods: {
    dologin,
    doregister,

  },
  created() {
    const mytoken = localStorage.getItem('token');
    if (mytoken) {
      this.$router.push({ name: "Home" });
    }
  },
  mounted() {
    const signUpButton = document.getElementById("tab-2");
    if (window.location.pathname == "/register") {
      console.log("On est dans le / register")
        signUpButton.checked = true;
    }
  },
};
</script>
<style scoped>
@import url("https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");

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

.login-snip .login,
.login-snip .sign-up-form {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  transform: rotateY(180deg);
  backface-visibility: hidden;
  transition: all 0.4s linear;
}

.login-snip .sign-in,
.login-snip .sign-up,
.login-space .group .check {
  display: none;
}

.login-snip .tab,
.login-space .group .label,
.login-space .group .button {
  text-transform: uppercase;
}

.login-snip .tab {
  font-size: 22px;
  margin-right: 15px;
  padding-bottom: 5px;
  margin: 0 15px 10px 0;
  display: inline-block;
  border-bottom: 2px solid transparent;
}

.login-snip .sign-in:checked + .tab,
.login-snip .sign-up:checked + .tab {
  color: #fff;
  border-color: #1161ee;
}

.login-space {
  min-height: 345px;
  position: relative;
  perspective: 1000px;
  transform-style: preserve-3d;
}

.login-space .group {
  margin-bottom: 15px;
}

.login-space .group .label,
.login-space .group .input,
.login-space .group .button {
  width: 100%;
  color: #fff;
  display: block;
}

.login-space .group .input,
.login-space .group .button {
  border: none;
  padding: 15px 20px;
  border-radius: 25px;
  background: rgba(184, 24, 24, 0.1);
}

.login-space .group input[data-type="password"] {
  -webkit-text-security: circle;
}

.login-space .group .label {
  color: #aaa;
  font-size: 12px;
}

.login-space .group .button {
  background: #1161ee;
}

.login-space .group label .icon {
  width: 15px;
  height: 15px;
  border-radius: 2px;
  position: relative;
  display: inline-block;
  background: rgba(255, 255, 255, 0.1);
}

.login-space .group label .icon:before,
.login-space .group label .icon:after {
  content: "";
  width: 10px;
  height: 2px;
  background: #fff;
  position: absolute;
  transition: all 0.2s ease-in-out 0s;
}

.login-space .group label .icon:before {
  left: 3px;
  width: 5px;
  bottom: 6px;
  transform: scale(0) rotate(0);
}

.login-space .group label .icon:after {
  top: 6px;
  right: 0;
  transform: scale(0) rotate(0);
}

.login-space .group .check:checked + label {
  color: #fff;
}

.login-space .group .check:checked + label .icon {
  background: #1161ee;
}

.login-space .group .check:checked + label .icon:before {
  transform: scale(1) rotate(45deg);
}

.login-space .group .check:checked + label .icon:after {
  transform: scale(1) rotate(-45deg);
}

.login-snip .sign-in:checked + .tab + .sign-up + .tab + .login-space .login {
  transform: rotate(0);
}

.login-snip .sign-up:checked + .tab + .login-space .sign-up-form {
  transform: rotate(0);
}

*,
:after,
:before {
  box-sizing: border-box;
}

.clearfix:after,
.clearfix:before {
  content: "";
  display: table;
}

.clearfix:after {
  clear: both;
  display: block;
}

a {
  color: inherit;
  text-decoration: none;
}

.hr {
  height: 2px;
  margin: 60px 0 50px 0;
  background: rgba(255, 255, 255, 0.2);
}

.foot {
  text-align: center;
}

.card {
  width: 500px;
  left: 100px;
}

::placeholder {
  color: #b3b3b3;
}

.tab{
  cursor: pointer;
}
</style>
