<template>
  <div class="wrap">
    <div class="About"></div>
    <section class="premiere">
      <img src="../assets/section.png" name="voiture" width="100%" height="100%">
    </section>
    <!----------------2 section--------------->
    <div class="block">
      <!-- debut -->
      <div class="col-md-4 search-form">
        <form class="filter-form">
          <div class="form-group">
            <select class="select-input select-brand">
              <option>Marque</option>
              <option data-id="1131">Acura</option>
              <option data-id="1131">Acura</option>
              <option data-id="1131">Acura</option>
              <option data-id="1131">Acura</option>
            </select>
          </div>
          <div class="form-group">
            <select class="select-input select-model">
              <option>Modele</option>
              <option value="1330">CL</option>
              <option value="1330">CL</option>
              <option value="1330">CL</option>
              <option value="1330">CL</option>
            </select>
          </div>
          <div class="form-group">
            <select class="select-input select-year" disabled>
              <option>Annee</option>
            </select>
          </div>
          <button class="select-form-btm find">TROUVER</button>
        </form>
      </div>
    
    </div>
    <!-- fin choix option -->

    <!-------------- 3 ---------->
    <section class="granp">

      

        <div class="parent1">
          <img src="../assets/logo/audi copie.jpg" width="100" alt="">
        </div>

        <div class="parent1">
          <img src="../assets/logo/chevrolet.jpg" width="100" alt="">
        </div>

        <div class="parent1">
          <img src="../assets/logo/chrysler.jpg" width="100" alt="">
        </div>
        
        <div class="parent1">
          <img src="../assets/logo/citroen copie.jpg" width="100" alt="">
        </div>

     
    </section>

    <section class="text">
      <div class="responsivetext">
        <h2>Test</h2>
      <p>
        Pourquoi choisir Auto Clé Rapide
        Nous vous proposons un service de qualitée rapide
        pour vos doubles de clé.
        Ainsi que des solutions si vous avez perdues toutes vos clées
        sur tout l'ile de France
        rendez vous sur notre page contact . 
        </p>
          
      </div>
    </section>

    <section class="femme">
      <img src="../assets/femme.png" name="femme" width="100%" height="100%">
    </section>







  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>
 

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

.block{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  margin-bottom: 200px;
  
}


.text{
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-family: 'Poppins', sans-serif;
}

.responsivetext{
  padding: 8vh;

}



/* section texte
  .text {
    border: 20px 100px 100px;
    margin-top: 100px;
   
    background: greenyellow;
    width: 100%;
  /*  */
</style>