<template>
    <div class="main-container">
      <div class="row">
        <h2 class="display-2 text-center gaming-title">GameVault Products</h2>
      </div>
      <div class="row gap-3 justify-content-center my-4" v-if="products">
        <Card v-for="product in products" :key="product.prodID" class="product-card">
          <template #cardHeader>
            <div class="card-header">
              <img :src="product.prodURL" loading="lazy" class="img-fluid product-image" :alt="product.prodName" />
            </div>
          </template>
          <template #cardBody>
            <div class="card-body">
              <h5 class="card-title fw-bold gaming-font">{{ product.prodName }}</h5>
              <p class="lead text-light"><span class="text-success fw-bold">Amount</span>: R{{ product.amount }}</p>
              <div class="button-wrapper d-flex justify-content-between">
                <router-link :to="{ name: 'product', params: { id: product.prodID } }">
                  <button class="btn action-btn view-btn">View</button>
                </router-link>
                <button class="btn action-btn cart-btn">
                  <i class="fas fa-shopping-cart"></i>
                </button>
              </div>
            </div>
          </template>
        </Card>
      </div>
      <div v-else>
        <Spinner />
      </div>
    </div>
  </template>
  
  <script setup>
  import { useStore } from 'vuex'
  import { computed, onMounted } from 'vue'
  import Spinner from '@/components/Spinner.vue'
  import Card from '@/components/Card.vue'
  
  const store = useStore()
  const products = computed(() => store.state.products)
  
  onMounted(() => {
    store.dispatch('fetchProducts')
  })
  </script>
  
  <style scoped>
  /* Ensure the entire page has the background color */
  html, body {
    height: 100%;
    margin: 0;
    background: radial-gradient(circle, #0b0e13, #141823);
  }
  
  .main-container {
    padding-top: 100px;
    min-height: 100vh;
    background: radial-gradient(circle, #0b0e13, #141823);
    padding-bottom: 40px;
  }
  
  .gaming-title {
    font-family: 'Orbitron', sans-serif;
    color: #00ffea;
    text-transform: uppercase;
    margin-bottom: 30px;
  }
  
  /* Product Card Styling */
  .product-card {
    background: #1e1e2f;
    border: none;
    border-radius: 10px;
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.6);
    transition: transform 0.3s ease;
    overflow: hidden;
    width: 300px;
    color: white;
  }
  
  .product-card:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.8);
  }
  
  .card-header {
    background: linear-gradient(45deg, #009dff, #0f2027);
    padding: 10px;
  }
  
  .product-image {
    width: 100%;
    border-radius: 10px;
  }
  
  .card-body {
    padding: 20px;
  }
  
  .gaming-font {
    font-family: 'Press Start 2P', cursive;
    color: #00ffea;
  }
  
  p.lead {
    color: #a0aec0;
  }
  
  /* Button Wrapper */
  .button-wrapper {
    margin-top: 10px;
    gap: 10px;
    display: flex;
    justify-content: space-between;
  }
  
  /* Button Styling */
  .btn {
    font-family: 'Orbitron', sans-serif;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 120px; /* Fixed width for both buttons */
    height: 40px; /* Fixed height for both buttons */
  }
  
  /* View Button */
  .view-btn {
    background-color: #00ffea;
    color: #141823;
    font-size: 15px; /* Adjust font size if needed */
  }
  
  .view-btn:hover {
    background-color: #009dff;
    color: white;
  }
  
  /* Cart Button */
  .cart-btn {
    background-color: #ff007a;
    color: white;
  }
  
  .cart-btn i {
    font-size: 18px;
  }
  
  .cart-btn:hover {
    background-color: #ff3f96;
  }
  
  </style>
  