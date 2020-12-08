<template>
  <div>
<button @click="validermail" value="test"></button>
  </div>
</template>

<script>
export default {
  data() {
    return {
    email: "",
  };
},
  name: "validemail",

  methods: {
    validermail: function(){
      this.axios.post("http://localhost:3000/client/validemail", {
         email: this.$route.params.email,
         })
    .then((result) => {
      alert(result);
      })
    .catch((err) => {
      alert(err);
    });
  },
  },

};
</script>

<style>

</style>