<template>
  <div class="video-container">
    <video src="../assets/home page.mp4" class="full-screen-video" autoplay muted loop></video>
  </div>
  <nav class="navbar">
    <!-- navbar content -->
  </nav>

  <section class="recent-products">
    <h2>Recent Products</h2>
    <div class="card-container">
      <div v-for="product in recentProducts" :key="product.id" class="card">
        <img :src="product.image" :alt="product.name">
        <h3>{{ product.prodName }}</h3>
        <p>{{ product.prodDescription }}</p>
        <div class="card-buttons">
          <button class="add-to-cart">Add to Cart</button>
          <button class="view-more">View More</button>
        </div>
      </div>
    </div>
  </section>

  <footer class="footer-container">
    <!-- footer content -->
  </footer>
</template>

<script>
export default {
  name: 'HomeView',
  components: {
    // Card,
    // Spinner
  },
  data() {
    return {
      recentProducts: []
    }
  },
  async mounted() {
    const response = await fetch('https://capstone-i0ct.onrender.com/products');
    const data = await response.json();
    this.recentProducts = data;
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap');

html, body {
  margin: 0;
  padding: 0;
  height: 100%;
}

.video-container {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.full-screen-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}

.navbar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
}

.recent-products {
  background-color: #1e1e1e;
  padding: 40px 20px;
  text-align: center;
}

.recent-products h2 {
  font-family: 'Roboto', sans-serif;
  font-size: 2.5rem;
  font-weight: bold;
  color: #ff69b4; /* Vibrant color for the heading */
  margin: 0;
  position: relative;
}

.recent-products h2::before {
  content: '';
  position: absolute;
  left: 50%;
  bottom: -10px;
  width: 60px;
  height: 5px;
  background-color: #ff69b4;
  transform: translateX(-50%);
  border-radius: 5px;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px; /* Space between cards */
  margin-top: 40px; /* Space between heading and cards */
}

.card {
  width: 250px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  position: relative;
}

.card img {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
}

.card h3 {
  margin-top: 10px;
}

.card-buttons {
  display: flex;
  flex-direction: column;
  gap: 10px; /* Space between buttons */
  margin-top: 10px;
}

.add-to-cart, .view-more {
  background-color: #ff69b4;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.add-to-cart:hover, .view-more:hover {
  background-color: #e55b9d; /* Slightly darker shade on hover */
}

.footer-container {
  background-color: #1e1e1e;
  padding: 20px;
  color: #dcdcdc;
  border-top: 2px solid #ff69b4;
  max-height: 100px; /* Set a maximum height for the footer */
}
</style>