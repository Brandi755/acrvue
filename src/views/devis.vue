<template>
  <div class="wrap">
    <div class="form">
      <h2 class="titre">Mon Profil</h2>
      <form action="##" method="post">
        <p>nom :</p>
        <input type="text" name="nom" id="nom" placeholder="Entrer votre nom"/>
        <p>prenom :</p>
        <input type="text" name="prenom" id="prenom" placeholder="Entrer votre prenom"/>
        <p>adresse e-mail :</p>
        <input type="email" name="mail" id="mail" placeholder="Entrer votre adresse E-mail"/>
        <p>adresse:</p>
        <input type="text" name="adresse" id="adresse" placeholder="Entrer votre adresse"/>
        <p>cp :</p>
        <input type="number" name="cp" id="cp" placeholder="Entrer votre code postal"/>
        <p>pays :</p>
        <input type="text" name="pays" id="pays" placeholder="Entrer votre pays"/>
        <br /><br />
        <input type="submit" value="Valider"/>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
  mounted() {}
};
</script>

<style scoped>
.wrap {
  z-index: -1;
  width: 100%;
  height: 100%;
  justify-content: space-evenly;
  background-image: url("../assets/voiture.png");
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  /* background-color: #464646; */
}

.form {
  width: 460px;
  margin: 0 auto;
  margin-top: 50px;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 40px;
  border-radius: 3%;
  border: 1px, solid #444242;
}
.titre {
  margin: 0;
  padding: 0 0 20px;
  font-weight: bold;
  color: white;
  /* color:#0091CA; */
  /* color:#000000; */
}

.form p{
    margin: 7px;
    padding: 0;
    /* color:white; */
    color:#000000;
}

.form input,select{
    margin-bottom: 20px;
    width: 70%;
}
.form input[type=text], .form input[type=number], .form input[type=email]{
     /* bords des carres blanc text */
    border: none;
   
    border-bottom: 1px solid #fff;
    background-color: transparent;
    outline: none;
    height: 40px;
    display: 16px;
    color: #fff;


}

::placeholder{
    color:rgb(203, 190, 190);
}

.form select{
    margin-top: 20px;
    padding: 10px, 0;
}
.form input[type=submit]{
    /* border: none;
    height: 40px;
    outline: none;
    font-size: 15px;
    background-color: rgb(4, 6, 5);
    color: #fff; */
      background: black;
   border-radius: 10px;
   color: #FFFFFF;
   font-family: Arial;
   font-size: 17px;
   font-weight: 700;
  height: 40px;
  width: 130px;
}
</style>
