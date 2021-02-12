<template>
<div classe="wrap">
<div class="text">
    <h1>A Propos</h1>
 <p>Nous sommes une entreprise compétitive qui a pour vocation de trouver des solutions en cas

-perte de clé
-réparation télécommande 

dans les meilleurs délais et au meilleur tarif</p>

<p>
Nous avons un champ d'action qui s'étend sur toute l'île-de-france

Nous pouvons aussi nous déplacer au-delà pour cela veuillez bien l'indiquer lors de notre prise de contact au téléphone 06 07 89 89 89

ou sur le devis que nous vous proposons ici gratui</p>

  
</div>
</div>
</template>

<script>



export default {
  components: {
  
  },
  methods: {
  
  },
  data() {
    return {
     
    };
  },
  mounted() {
  
  }
};
  



</script>
<style scoped>

h1{
  color:#0091CA;
  font-size: 50px;
  font-family: initial;
  
}
.wrap {

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

.text {

/* margin-top: 80px; */
  width: 860px;
  /* margin: 0 auto; */
  
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  /* background-color: rgba(0, 0, 0, 0.5); */
  padding: 40px;
  border-radius: 3%;
  border: 1px, solid #444242;
  color: black;
  font-size: 22px;
}

</style>
