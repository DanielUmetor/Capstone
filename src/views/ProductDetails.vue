<template>
  <div class="container">
    <div class="row">
      <h2 class="display-2 text-center product-title">Product Details</h2>
    </div>
    <div class="row justify-content-center" v-if="product">
      <Card class="product-card">
        <template #cardHeader>
          <img :src="product.prodURL" loading="lazy" class="img-fluid product-image" :alt="product.prodName">
        </template>
        <template #cardBody>
          <h5 class="card-title product-name">{{ product.prodName }}</h5>
          <p class="product-description">
            {{ product.prodDescription }}
          </p>
          <p class="product-amount">
            <span class="text-success fw-bold">Amount</span>: R{{ product.amount }}
          </p>
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
import Card from '@/components/Card.vue'
import Spinner from '@/components/Spinner.vue'
import { useRoute } from 'vue-router'

const store = useStore()
const route = useRoute()
const product = computed(() => store.state.product)

onMounted(() => {
  store.dispatch('fetchProduct', route.params.id)
})
</script>

<style scoped>
/* Ensure the entire page has the background color */
html, body {
  height: 100%;
  margin: 0;
  background: radial-gradient(circle, #0b0e13, #141823);
}

/* Container styling to ensure it takes the full height */
.container {
  padding: 20px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

/* Product Details Header */
.product-title {
  font-family: 'Orbitron', sans-serif;
  color: #00ffea;
  text-transform: uppercase;
  margin-bottom: 30px;
  font-weight: bold;
}

/* Product Card Styling */
.product-card {
  background: #1e1e2f;
  border: none;
  border-radius: 12px;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.7);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  width: 100%;
  max-width: 800px;
  color: white;
}

.product-card:hover {
  transform: scale(1.03);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.9);
}

.product-image {
  border-radius: 12px 12px 0 0;
  max-height: 400px;
  object-fit: cover;
}

.card-body {
  padding: 20px;
}

/* Product Details Styling */
.product-name {
  font-family: 'Press Start 2P', cursive;
  color: #00ffea;
  margin-bottom: 10px;
}

.product-description {
  font-size: 16px;
  color: #a0aec0;
  margin-bottom: 15px;
}

.product-amount {
  font-size: 18px;
  color: #00ffea;
}
</style>
