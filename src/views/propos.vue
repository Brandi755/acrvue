<template>
  <div class="wrap">
    <img src="../assets/logost.png" class="logoimg" />
    <div class="titre">
      <h2>À propos de nous</h2>
    </div>
    <div class="text">
      <p>
        Notre société, AutoClérapide,vous propose uniquement des télécommandes automobiles de qualité et garantis. <br>
        Notre équipe de professionnels vous conseille dans l'achat de vos pièces. <br> Vous pourrez trouver sur notre site tous les éléments dont vous avez besoin pour réparer ou changer simplement votre télécommande, quel que soit son modèle ou sa marque. <br> Tous les produits présentés sur notre site sont sélectionnés chez nos fournisseurs pour leur qualité. Que vous soyez un particulier ou un professionnel, vous trouverez tous les éléments dont vous avez besoin facilement et sans vous ruiner.<br> Si vous avez la moindre question technique, nos conseillers sont à votre disposition pour vous apporter les conseils et les réponses dont vous aurez besoin.
      </p>
    </div>
    <div class="key">
      <img src="../assets/cle.png" alt="cle" width="500px" />
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
  margin-top: 30px;
}
.titre {
  margin-top: 4vh;
}
h2 {
  color: #0091ca;
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

.key {
 /* margin-top: -50px; */
 margin-bottom: 60px;
}
.key img {
  width: 25%;
  border-radius: 1%;
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
    margin: 5vh 3vh;
    padding: 1px 1px;
    /* 1 TOP 2 COTE */
  }

  .key {
    top: 5%;
  }
}

/* 3) Tablette */
@media screen and (min-width: 768px) and (max-width: 1023.9px) {
  .text {
    position: relative;
    /* padding: 10px 10px 20px; */
    margin: 5vh 3vh;
    padding: 1px 1px;
    /* 1 TOP 2 COTE */
  }

  .key {
    top: 5%;
  }
}

@media screen and (min-width: 480px) and (max-width: 768px) {
  .text {
    position: relative;
    /* padding: 10px 10px 20px; */
    /* border: #0091ca solid 3px; */
    margin: 5vh 3vh;
    padding: 1px 1px;
    /* 1 TOP 2 COTE */
  }
  .key img {
    top: 5%;
    width: 50%;
  }
}

@media screen and (max-width: 479.9px) {
  .key img {
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
  .logoimg {
  width: 300px;
  margin-top: 80px;
}
}
</style>
