<template>
  <div class="B">
  
  <!-- test -->
  <div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">NavBar</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="/">Home</b-nav-item>
        <b-nav-item href="/About">A Propos</b-nav-item>
        <b-nav-item href="/panier">Panier</b-nav-item>
        <b-nav-item href="/register">Register</b-nav-item>
        <b-nav-item href="/login">Login</b-nav-item>


       
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>


        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="/register">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
  </div>
</template>

<script>
export default {
  name: "myMenu",
};
</script>
<style scoped>

/* ul {
  position: absolute;
  top: 7%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
}
ul li {
  list-style: none;
}
ul li a {
  position: relative;
  display: block;
  text-transform: uppercase;
  margin: 20px 0;
  padding: 10px 20px;
  text-decoration: none;
  color: #262626;
  font-family: sans-serif;
  font-size: 18px;
  font-weight: 600;
  transition: 0.5s;
  z-index: 1;
}
ul li a:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-top: 2px solid #262626;
  border-bottom: 2px solid #262626;
  transform: scaleY(2);
  opacity: 0;
  transition: 0.3s;
}
ul li a:after {
  content: "";
  position: absolute;
  top: 2px;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #262626;
  transform: scale(0);
  opacity: 0;
  transition: 0.3s;
  z-index: -1;
}
ul li a:hover {
  color: #fff;
}
ul li a:hover:before {
  transform: scaleY(1);
  opacity: 1;
}
ul li a:hover:after {
  transform: scaleY(1);
  opacity: 1;
} */
</style>
