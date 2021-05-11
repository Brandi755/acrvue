<template>
  <div class="single-publication">
    <figure>
      <a>
        <img v-if="produit.images[0] !== undefined"
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
        <br />
        <a href="">{{ produit.modele }}</a>
      <br/>
        <a href="">{{ produit.annee }}</a>

        
      </h3>
      <p class="text-block">{{ produit.description }}</p>
      <h4 class="price">{{ produit.prix }}</h4>
    </div>
<!-- la snackbar -->
    <div class="add-to-cart">
      <a @click="ajouter(produit.id, produit.nom, produit.prix, produit.images[0].Image)"
        class="default-btn">Ajouter au panier </a>
    </div>
     <v-snackbar v-model="snackbar">
      Le produit a bien été ajouté au panier
      <template v-slot:action="{ attrs }">
        <v-btn color="pink"
          text
          v-bind="attrs"
          @click="snackbar = false">
          Fermer
        </v-btn>
      </template>
        </v-snackbar>
  </div>
</template>


<script>

export default {
  props: ["produit"],
  data() {
    return {
      Panier: [],
      snackbar: false,
    };
  },
  methods: {
    ajouter: function(id, nom, prix, image) {
      this.getLocalStorage();     
      localStorage.removeItem("panier");
      if (this.Panier.length === 0) { // si panier vide ajoute produit
        
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
        if (alreadyProduit === false) { //
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
      // ici
      
        this.snackbar = true;
    },
    getLocalStorage() {
      let getlocalSt = localStorage.getItem("panier");
      if (getlocalSt != null && getlocalSt != undefined) {
        this.Panier = JSON.parse(getlocalSt);
      }
    },
  },
  created() {
    console.log('this.produit :>> ', this.produit);
  }
};

</script>

<style scoped>
.text-block {
  height: 80px;
  overflow: auto;
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
  background: white;
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
  color: #2200ff;
  text-decoration: none;
}

.single-publication .publication-content .price {
  font-size: 18px;
  color: black;
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
  /* transform: scale(1);
  -webkit-transform: scale(1); */
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
  background-color: #007BFF;
  color: #FFFFFF !important;
  display: inline-block;
  padding: 10px 30px;
  border-radius: 10px;
  text-transform: uppercase;
  font-weight: 600;
  font-family: "Open Sans", sans-serif;
  cursor: pointer;
}
/* a:hover {
  color: #fff;
  text-decoration: none;
} */
</style>
