<template>
  <div class="wrap">
    <div class="About"></div>
    <section class="premiere">
      <img src="../assets/section.png" name="voiture" width="100%" height="100%">
    </section>
    <!----------------2 section--------------->
    <section class="choix">
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
    </section>
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
      <h3>Pourquoi choisir Auto Clé Rapide
        Nous vous proposons un service de qualitée rapide
        pour vos doubles de clé.
        Ainsi que des solutions si vous avez perdues toutes vos clées
        sur tout l'ile de France
        rendez vous sur notre page contact . </h3>
    </section>

    <section class="femme">
      <img src="../assets/femme.png" alt="">
    </section>







  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  .choix {
    margin-top: 100px;
    margin-bottom: 200px;

  }


  select.select-input.select-brand {
    color: white;
    font: 18px Scope;
    background: black;
    padding: 0px 0px 0px 50px;

  }

  select.select-input.select-model {
    color: white;
    font: 18px Scope;
    background: black;
    padding: 0px 0px 0px 50px;
  }

  select.select-input.select-year {
    color: white;
    font: 18px Scope;
    background: black;
    padding: 0px 0px 0px 50px;
  }

  .granp {
    display: flex;
  }



  .text {
    margin-top: 100px;
    background: greenyellow;
    width: 50%;
  }
</style>