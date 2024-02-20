<template>
  <div>
    <Nav />
    <Navigation />
    <Sidebar />
    <router-view />

    <Footer />
  </div>
</template>

<script>
import Nav from "./components/Navbar.vue";
import Navigation from "./components/Navigation.vue";
import Sidebar from "./components/Sidebar.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  components: {
    Nav,
    Navigation,
    Sidebar,
    Footer,
  },
};
</script>
