<template>
  <div wrap>
    <footer class="blue text-center text-white">
      <!-- Grid container -->
      <div class="container p-4">
        <!-- Section: Social media -->

        <!-- 
        <section class="mb-4">
          <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum
        repellat quaerat voluptatibus placeat nam, commodi optio pariatur est quia magnam
        eum harum corrupti dicta, aliquam sequi voluptate quas.
      </p>
        </section> -->
        <!-- Section: Text -->

        <!-- Section: Links -->
        <section class="">
          <!--Grid row-->
          <div class="row">
            <!--Grid column-->
            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h6 class="text-uppercase"><b>Compte client</b></h6>

              <ul class="list-unstyled mb-0">
                <li>
                  <b>du lundi au vendredi</b>
                </li>
                <li>
                  <b>09:00 - 18:00</b>
                </li>
                <li>
                  <b>07 66 56 75 21</b>
                </li>
                <li>
                  <b>autoclérapide@gmail.fr</b>
                </li>
              </ul>
            </div>
            <!--Grid column-->

            <!--Grid column-->
            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h6 class="text-uppercase"><b>Compte client</b></h6>

              <ul class="list-unstyled mb-0">
                <li>
                  <a href="/register" class="text-white"
                    ><b>Mon compte</b> 
                  </a>
                </li>
                <li>
                   <a href="/profil" class="text-white"
                    ><b>Mon profil</b> 
                  </a>
                </li>
                <li>
                   <a href="/Panier" class="text-white"
                    ><b>Mon panier</b> 
                  </a>
                </li>
                  <li>
                  <a href="/produit" class="text-white"><b>Nos produits</b></a>
                </li>
                <!-- <li>
                  <a href="#!" class="text-white">Ouverture sans destruction</a>
                </li> -->
              </ul>
            </div>
            <!--Grid column-->

            <!--Grid column-->
            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h6 class="text-uppercase"><b>PAIEMENTS SÉCURISÉS</b></h6>

              <ul class="list-unstyled mb-0">
                <li>
                 <b>CB</b>
                </li>
                 <li>
                 <b>Paypal</b>
                </li>
              </ul>
            </div>
            <!--Grid column-->

            <!--Grid column-->
            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h6 class="text-uppercase"><b>ENGAGEMENT QUALITÉ</b></h6>

              <ul class="list-unstyled mb-0">
               
                <li>
                  <b>Autoclérapide s'engage <br> sur la qualité de ses produits</b>
                </li>
              </ul>
            </div>
            <!--Grid column-->
          </div>
          <!--Grid row-->
        </section>

        <section class="mb-4">
          <!-- icones-->
          <a
            class="btn btn-outline-light btn-floating m-1"
            href="https://www.facebook.com/autoclerapide"
            role="button"
            ><i class="fa fa-facebook"></i
          ></a>
          <a
            class="btn btn-outline-light btn-floating m-1"
            href="https://twitter.com/"
            role="button"
            ><i class="fa fa-twitter"></i
          ></a>
          <a
            class="btn btn-outline-light btn-floating m-1"
            href="https://www.youtube.com/"
            role="button"
            ><i class="fa fa-youtube"></i
          ></a>
          <a
            class="btn btn-outline-light btn-floating m-1"
            href="https://www.instagram.com/"
            role="button"
            ><i class="fa fa-instagram"></i
          ></a>
        </section>
        <!-- Section: Links -->
      </div>
      <!-- Grid container -->

      <!-- Copyright -->
      <div
        class="text-center p-3"
        style="background-color: rgba(0, 0, 0, 0.2);"
      >
        © 2021 Copyright: Autoclérapide. Tous les droits sont réservés.
      </div>
      <!-- Copyright -->
    </footer>
  </div>
</template>

<script>
export default {
  name: "MyFooter",
  components: {},
  data() {
    return {};
  },
  methods: {},
  created() {}
};
</script>


<style scoped>
.mb-4 {
  color: #000000;
}
.fa-facebook,
.fa-instagram,
.fa-twitter,
.fa-youtube {
  color: #000000;
}
.list-unstyled {
  color: #ffffff;
}
</style>
