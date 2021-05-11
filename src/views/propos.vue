<template>
  <div class="wrap">
    <img src="../assets/logost.png" class="logoimg" />
    <div class="titre">
      <h2>À propos de nous</h2>
    </div>
    <div class="text">
      <p>
        Notre société, AutoClérapide, est fondée sur l’idée de faciliter l’accès
        aux télécommandes de déverrouillage d’origine. Nous nous spécialisons
        dans la distribution de télécommandes de déverrouillage authentiques et
        des clés à transpondeur d’origine. Grâce à notre réseau important de
        partenaires réparti à travers le pays, nous pouvons fournir les produits
        et le soutien technique qui répondront à tous vos besoins en sécurité
        automobile.
      </p>
      <!-- <p>Nous sommes une entreprise compétitive qui a pour vocation de trouver des solutions en cas de perte de clé, de réparation télécommande dans les meilleurs délais et au meilleur tarif</p>
      <p>Nous avons un champ d'action qui s'étend sur toute l'île-de-france Nous pouvons aussi nous déplacer au-delà pour cela veuillez bien l'indiquer lors de notre prise de contact au téléphone 06 07 89 89 89 ou sur le devis que nous vous proposons ici gratuit</p> -->
    </div>
    <div class="paris">
      <img src="../assets/cle.png" alt="" width="500px" />
    </div>
    <MyFooter />
  </div>
</template>

<script>
import MyFooter from "../components/MyFooter";

export default {
  components: { MyFooter },

  data() {
    return {};
  },
  mounted() {}
};
</script>

<style scoped>
.wrap {
  width: 100%;
  height: 100vh;
}
.logoimg {
  width: 300px;
  margin-top: 80px;
}
.titre {
  margin-top: 5vh;
}
h2 {
  color: #0091ca;
  font-family: 'Times New Roman', Times, serif;
  font-weight: bold;
}


.text {

  /* padding: 10px 10px 20px; */
  /* border: #0091ca solid 3px; */
  margin: 5vh 15vh;
  padding: 40px 50px;
  /* 1 TOP 2 COTE */
  font-weight: bolder;
}

.paris {
  top: 5%;
}
.paris img {
  width: 25%;
  border-radius: 2%;
  margin-bottom: 5%;
  /* border: 3px solid #b2b2b2; */
}
/* si l'écran est inférieur ou égal */

/* 1) grand PC */
@media screen and (min-width: 1280px) {
}

/* 2) Pc normal */
@media screen and (min-width: 1024px) and (max-width: 1279.9px) {
  .text {
    position: relative;
    /* padding: 10px 10px 20px; */
    border: #0091ca solid 3px;
    margin: 5vh 3vh;
    padding: 1px 1px;
    /* 1 TOP 2 COTE */
  }

  .paris {
    top: 5%;
  }
}

/* 3) Tablette */
@media screen and (min-width: 768px) and (max-width: 1023.9px) {
  .text {
    position: relative;
    /* padding: 10px 10px 20px; */
    border: #0091ca solid 3px;
    margin: 5vh 3vh;
    padding: 1px 1px;
    /* 1 TOP 2 COTE */
  }

  .paris {
    top: 5%;
  }
}

@media screen and (min-width: 480px) and (max-width: 767.9px) {
  .text {
    position: relative;
    /* padding: 10px 10px 20px; */
    border: #0091ca solid 3px;
    margin: 5vh 3vh;
    padding: 1px 1px;
    /* 1 TOP 2 COTE */
  }
  .paris img {
    top: 5%;
    width: 50%;
  }
}

@media screen and (min-width: 320px) and (max-width: 479.9px) {
  .paris img {
    top: 5%;
    width: 60%;
  }
  .text {

  /* padding: 10px 10px 20px; */
  /* border: #0091ca solid 3px; */
  margin: 1vh 3vh;
  padding: 5px 10px;
  /* 1 TOP 2 COTE */
  font-weight: bolder;
}
}
</style>
