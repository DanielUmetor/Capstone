<template>
  <NavBar />
  <main>
    <router-view />
  </main>
  <Footer/>
</template>
<script>
import NavBar from './components/NavbarView.vue'
import Footer from '@/components/Footer.vue'
export default {
  components: {
    NavBar,
    Footer
  }
}
</script>
<style src="@/assets/css/style.css">
</style>
