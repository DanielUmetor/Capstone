<template>
  <div class="container">
    <video autoplay muted loop class="header-video">
      <source src="../assets/home page.mp4" type="video/mp4">
    </video>
  </div>
</template>

<script>
// import Card from '@/components/Card.vue'
// import Spinner from '@/components/Spinner.vue'
export default {
  name: 'HomeView',
  components: {
    // Card,
    // Spinner
  },
  computed: {
    recentProducts() {
      return this.$store.state.recentProducts
    }
  },
  mounted() {
    this.$store.dispatch('recentProducts')
  }
}
</script>

<style>
  .container {
    position: relative;
    height: calc(100vh - 70px); /* subtract the navbar height */
    overflow: hidden;
    text-align: center;
    margin-top: 70px; /* Adjust for the fixed nav bar */
  }
  .header-video {
    width: 100%;
    height: 100%; /* take up the full height of the container */
    object-fit: cover;
    border-radius: 10px; /* optional */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); /* optional */
  }
</style>