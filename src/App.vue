<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/login">login</router-link> |
    <router-link to="/myhome">MY home</router-link> |
    <router-link to="/contact">Contact</router-link> |
    <router-link to="/products">Products</router-link>
  </nav>
  <router-view/> -->
  <div><Navbar /></div>
  <router-view />
  <v-footer>
    <Footer />
  </v-footer>
</template>

<script>
import Footer from "./components/Footer.vue";
import Navbar from "./components/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: linear-gradient(to right, #1a2980, #26d0ce);
}
</style>
