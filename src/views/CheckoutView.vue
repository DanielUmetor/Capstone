<template>
    <div class="checkout-container">
      <h1 class="checkout-title">Your Cart</h1>
  
      <div v-if="cart.length > 0" class="cart-items">
        <div v-for="item in cart" :key="item.prodID" class="cart-item">
          <img :src="item.prodURL" :alt="item.prodName" class="cart-item-image">
          <div class="cart-item-details">
            <h3 class="cart-item-name">{{ item.prodName }}</h3>
            <p class="cart-item-description">{{ item.prodDescription }}</p>
            <div class="cart-item-quantity">
              <button @click="decreaseQuantity(item)" class="quantity-btn">-</button>
              <span>{{ item.quantity }}</span>
              <button @click="increaseQuantity(item)" class="quantity-btn">+</button>
            </div>
            <p class="cart-item-price">R{{ item.amount * item.quantity }}</p>
            <button @click="removeItem(item)" class="remove-btn">Remove</button>
          </div>
        </div>
      </div>
  
      <div v-else>
        <p class="empty-cart">Your cart is empty!</p>
      </div>
  
      <div class="cart-summary" v-if="cart.length > 0">
        <h3>Total: R{{ cartTotal }}</h3>
        <button class="checkout-btn">Proceed to Checkout</button>
      </div>
    </div>
  </template>
  
  <script setup>
import { useCart } from '@/composables/cartFunctions';
import { computed } from 'vue';  // Import computed from Vue

const { cart, addToCart, removeFromCart } = useCart();

const increaseQuantity = (item) => {
  addToCart(item);  // Add one more quantity of the product
};

const decreaseQuantity = (item) => {
  if (item.quantity > 1) {
    item.quantity -= 1;  // Decrease quantity by 1
  }
};

const removeItem = (item) => {
  removeFromCart(item);  // Remove product entirely from cart
};

const cartTotal = computed(() => {
  return cart.value.reduce((total, item) => total + item.amount * item.quantity, 0);
});
</script>

  
  <style scoped>
  /* Overall Container */
  .checkout-container {
    background: linear-gradient(to bottom right, #0b0e13, #141823);
    color: #fff;
    min-height: 100vh;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  /* Title Styling */
  .checkout-title {
    font-family: 'Orbitron', sans-serif;
    font-size: 2.5rem;
    color: #00ffea;
    margin-bottom: 30px;
    text-align: center;
  }
  
  /* Cart Items */
  .cart-items {
    width: 100%;
    max-width: 800px;
  }
  
  .cart-item {
    display: flex;
    align-items: center;
    background-color: #1e1e2f;
    border-radius: 10px;
    padding: 15px;
    margin-bottom: 20px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.6);
  }
  
  .cart-item-image {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 8px;
  }
  
  .cart-item-details {
    flex-grow: 1;
    margin-left: 20px;
  }
  
  .cart-item-name {
    font-size: 1.5rem;
    color: #00ffea;
    font-family: 'Press Start 2P', cursive;
  }
  
  .cart-item-description {
    font-size: 1rem;
    color: #a0aec0;
    margin: 10px 0;
  }
  
  .cart-item-quantity {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  
  .quantity-btn {
    background-color: #00ffea;
    color: #1e1e2f;
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
    font-size: 1rem;
  }
  
  .quantity-btn:hover {
    background-color: #00d1b2;
  }
  
  .cart-item-price {
    font-size: 1.2rem;
    color: #ff69b4;
  }
  
  .remove-btn {
    background-color: #ff69b4;
    color: white;
    padding: 8px 15px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    margin-top: 10px;
  }
  
  .remove-btn:hover {
    background-color: #e55b9d;
  }
  
  /* Empty Cart */
  .empty-cart {
    font-size: 1.5rem;
    color: #ff69b4;
  }
  
  /* Cart Summary */
  .cart-summary {
    width: 100%;
    max-width: 800px;
    background-color: #1e1e2f;
    border-radius: 10px;
    padding: 20px;
    margin-top: 20px;
    text-align: center;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.6);
  }
  
  .cart-summary h3 {
    font-size: 1.8rem;
    color: #00ffea;
  }
  
  .checkout-btn {
    background-color: #ff69b4;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    margin-top: 20px;
    font-size: 1.2rem;
  }
  
  .checkout-btn:hover {
    background-color: #e55b9d;
  }
  </style>
  