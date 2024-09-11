<template>
  <div id="app">
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
          <img :src="product.image" :alt="product.prodName">
          <h3>{{ product.prodName }}</h3>
          <p>{{ product.prodDescription }}</p>
          <div class="card-buttons">
            <button class="add-to-cart">Add to Cart</button>
            <button class="view-more">View More</button>
          </div>
        </div>
      </div>
    </section>

    <FooterComp/>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      recentProducts: [] // Array to hold the specific products
    }
  },
  async mounted() {
    // Array of specific product IDs you want to fetch
    const prodID = [1, 2]; // Replace these with the actual IDs

    // Fetch products by their IDs
    const productPromises = prodID.map(id => 
      fetch(`https://capstone-i0ct.onrender.com/products/${id}`)
        .then(response => response.json())
    );

    // Wait for all product fetches to complete
    const products = await Promise.all(productPromises);

    // Set the fetched products to the data property
    this.recentProducts = products;
  }
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap');
/* Global styles for body and app */
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Ensure the app takes full viewport height */
}

/* Full-Screen Video Section */
.video-container {
  position: relative;
  width: 100%;
  height: 100vh; /* Full viewport height */
  overflow: hidden;
  flex-shrink: 0;
}

.full-screen-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensures the video covers the entire container */
  z-index: -1;
}

/* Navbar */
.navbar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
}

/* Recent Products Section */
.recent-products {
  background-color: #1e1e1e;
  padding: 40px 20px;
  text-align: center;
}

.recent-products h2 {
  font-family: 'Roboto', sans-serif;
  font-size: 2.5rem;
  font-weight: bold;
  color: #ff69b4;
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

/* Cards */
.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 40px;
}

.card {
  width: 250px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
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
  gap: 10px;
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
  background-color: #e55b9d;
}

/* Footer */
footer {
  flex-shrink: 0;
  margin-top: auto; /* Ensures the footer stays at the bottom */
}
</style>
