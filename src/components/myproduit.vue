<template>
<div class="test">
  <!-- bare recherche -->
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous" />

<div class="container">
  <form class="form-inline" action="/recherche/" method="get">
    <fieldset>    
      <div class="input-group">
        <div class="input-group-prepend">
          <select id="oCategorie" name="oCategorie" class="form-control">
            <option selected="selected" value="0">Catégorie</option>
            <option value="1">...</option>
          </select>
        </div>
        <input id="oSaisie" name="oSaisie" type="text" class="form-control" aria-label="Saisie de mots clés" required="required">
        <div class="input-group-append">
          <button class="btn btn-primary" type="submit">Recherche</button>
        </div>
      </div>
    </fieldset> 
  </form>
</div>

  <!-- fin barre de recherche -->

  <section class="our-publication pt-100 pb-70">
    <div class="container">
      <div class="section-header">
        <!-- <h2>Nos Produit</h2> -->
      </div>
      <div class="row">
        <div
          class="col-sm-6 col-lg-3"
          v-for="produit in produits"
          :key="produit.id"
        >
          <div class="single-publication">
            <figure>
              <a>
                <img
                  v-if="produit.images[0] !== undefined"
                  :src="require(`@/assets/${produit.images[0].Image}.jpeg`)"
                  alt="Publication Image"
                  width="100%"
                  height="300"
                />
              </a>
            </figure>

            <div class="publication-content">
              <h3>
                <a href="">{{ produit.marque }}</a>
                <a href="">{{ produit.modele }}</a>
                <a href="">{{ produit.ref }}</a>
              </h3>
              <p class="text-block">{{ produit.description }}</p>
              <h4 class="price">{{ produit.prix }}</h4>
            </div>

            <div class="add-to-cart">
              <a
                @click="ajouter(
                  produit.id, 
                  produit.nom, 
                  produit.prix,
                  produit.images[0].Image)"
                class="default-btn"
                >Ajouter au panier</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
</template>

<script>
export default {
  name: "myproduit",
  props: ["produits"],
  data() {
    return {
      Panier: [],
    };
  },
  created() {
    console.log(this.produits);
    this.getLocalStorage();
  },
  methods: {
    ajouter: function(id, nom, prix, image) {
      alert(` le produit ${nom}`);
      this.Panier = this.Panier || [];
      localStorage.removeItem("panier");

      if (this.Panier.length === 0) {
        let quantite = 1;
        this.Panier.push({
          produitId: id,
          nom: nom,
          quantite: quantite,
          prix_unitaire: prix,
          soustotal: quantite * prix,
          image: image,
        });
      } else {
        let alreadyProduit = false;
        this.Panier.forEach((item) => {
          if (item.produitId === id) {
            item.quantite++;
            item.soustotal = item.quantite * prix;
            alreadyProduit = true;
          }
        });
        if (alreadyProduit === false) {
          let quantite = 1;
          this.Panier.push({
            produitId: id,
            nom: nom,
            quantite: quantite,
            prix_unitaire: prix,
            soustotal: quantite * prix,
            image: image,
          });
        }
      }
      localStorage.setItem("panier", JSON.stringify(this.Panier));
    },

    getLocalStorage() {
      let getlocalSt = localStorage.getItem("panier");
      if (getlocalSt != null || getlocalSt !== undefined) {
        this.Panier = JSON.parse(getlocalSt);
        console.log(this.Panier);
      }
    },
  },
};
</script>

<style scoped>
.text-block {
  height: 80px;
  overflow: auto;
}
.pt-100 {
  padding-top: 100px;
}
.pb-70 {
  padding-bottom: 70px;
}
.section-header {
  margin-bottom: 60px;
  text-align: center;
}
.section-header i {
  color: blue;
  font-size: 50px;
  display: inline-block;
  margin-bottom: 10px;
}
.section-header h2 {
  font-weight: bold;
  font-size: 34px;
  margin: 0;
}
.section-header p {
  max-width: 500px;
  margin: 20px auto 0;
}
.single-publication {
  border: 1px solid #f2eee2;
  margin-bottom: 30px;
  position: relative;
  overflow: hidden;
}
.single-publication figure {
  position: relative;
  margin: 0;
  text-align: center;
}
.single-publication figure > a {
  background-color: #fafafa;
  display: block;
}

.single-publication .publication-content {
  text-align: center;
  padding: 20px;
}

.single-publication .publication-content h3 {
  font-weight: 600;
  margin: 8px 0 10px;
  font-size: 20px;
}
.single-publication .publication-content h3 a {
  color: #1f2d30;
}
.single-publication .publication-content h3 a:hover {
  color: #ff007d;
}

.single-publication .publication-content .price {
  font-size: 18px;
  color: #0FA3B1;
}
.single-publication .publication-content .price h4 {
  color: #6f6f6f;
  text-decoration: line-through;
  padding-left: 5px;
  font-weight: 300;
}
.single-publication .add-to-cart {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  background: #fff;
  opacity: 0;
  visibility: hidden;
  text-align: center;
  -webkit-transform: scale(0.7);
  transform: scale(0.7);
  height: 105px;
  -moz-transition: 0.4s;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}
.single-publication:hover .add-to-cart {
  visibility: visible;
  transform: scale(1);
  -webkit-transform: scale(1);
  opacity: 1;
}
.single-publication .add-to-cart .default-btn {
  margin-top: 28px;
  padding: 8px 25px;
  font-size: 14px;
}

.single-publication .add-to-cart .default-btn {
  margin-top: 28px;
  padding: 8px 25px;
  font-size: 14px;
}
.default-btn {
  background-color: cyan;
  color: #fff;
  border: 1px solid black;
  display: inline-block;
  padding: 10px 30px;
  border-radius: 30px;
  text-transform: uppercase;
  font-weight: 600;
  font-family: "Open Sans", sans-serif;
}
a:hover {
  color: #fff;
  text-decoration: none;
}
</style>
