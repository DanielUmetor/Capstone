<template>
  <div class="container">
    <video autoplay muted loop class="header-video">
      <source src="../assets/home page.mp4" type="video/mp4">
    </video>
  </div>
  <!-- Add your navbar here -->
  <nav>
    <!-- navbar content -->
  </nav>
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
  body {
    margin: 0; /* remove default margin */
  }
  .container {
    position: fixed; /* changed from absolute to fixed */
    top: 0; /* added to position at the top of the page */
    left: 0; /* added to position at the left of the page */
    width: 100%; /* added to take up the full width */
    height: 100vh; /* changed to take up the full height of the viewport */
    overflow: hidden;
    text-align: center;
    z-index: -1; /* added to send the video behind the navbar */
  }
  .header-video {
    width: 100%; /* take up the full width of the container */
    height: 100%; /* take up the full height of the container */
    object-fit: cover;
  }
  nav {
    position: relative; /* added to position the navbar on top of the video */
    z-index: 1; /* added to bring the navbar to the front */
    /* add your navbar styles here */
  }
</style>