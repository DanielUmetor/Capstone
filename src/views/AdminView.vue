<template>
    <div class="admin-container">
      <h2 class="display-2 text-center gaming-title">Admin Panel</h2>
      
      <!-- Products Table -->
      <div class="table-container">
        <h3>Manage Products</h3>
        <button @click="openProductModal" class="btn btn-primary">Add Product</button> <!-- Button for adding products -->
        <table class="table table-dark table-striped" v-if="products && products.length">
          <thead>
            <tr>
              <th>ID</th>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Category</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in products" :key="product.prodID">
              <td>{{ product.prodID }}</td>
              <td>{{ product.prodName }}</td>
              <td>{{ product.quantity }}</td>
              <td>R{{ product.amount }}</td>
              <td>{{ product.Category }}</td>
              <td>
                <button @click="deleteProduct(product.prodID)" class="btn btn-danger">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
        <p v-else>No products available.</p>
      </div>
  
      <!-- Users Table -->
      <div class="table-container">
        <h3>Manage Users</h3>
        <button @click="openUserModal" class="btn btn-primary">Add User</button> <!-- Button for adding users -->
        <table class="table table-dark table-striped" v-if="users && users.length">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Profile</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in users" :key="user.userID">
              <td>{{ user.userID }}</td>
              <td>{{ user.firstName }} {{ user.lastName }}</td>
              <td>{{ user.emailAdd }}</td>
              <td>{{ user.userPass }}</td>
              <td><img :src="user.userProfile" alt="Profile Image" class="profile-image" /></td>
              <td>
                <button @click="deleteUser(user.userID)" class="btn btn-danger">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
        <p v-else>No users available.</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { onMounted, computed } from 'vue'
  import { useStore } from 'vuex'
  
  // Access the Vuex store
  const store = useStore()
  
  // Computed properties to get users and products from Vuex state
  const products = computed(() => store.state.products)
  const users = computed(() => store.state.users)
  
  // Fetch products and users when the component is mounted
  onMounted(() => {
    store.dispatch('fetchProducts')
    store.dispatch('fetchUsers')
  })
  
  // Action for deleting a product
  const deleteProduct = (prodID) => {
    store.dispatch('deleteProduct', prodID)
  }
  
  // Action for deleting a user
  const deleteUser = (userID) => {
    store.dispatch('deleteUser', userID)
  }
  
  // Dummy functions for opening modals to add products and users (implement modals later)
  const openProductModal = () => {
    console.log("Open product modal")
  }
  const openUserModal = () => {
    console.log("Open user modal")
  }
  </script>
  
  <style scoped>
  .admin-container {
    padding: 50px;
    background-color: #141823;
    min-height: 100vh;
  }
  
  .gaming-title {
    font-family: 'Orbitron', sans-serif;
    color: #00ffea;
    text-transform: uppercase;
    margin-bottom: 30px;
  }
  
  .table-container {
    margin-bottom: 50px;
  }
  
  .table {
    width: 100%;
    margin: 20px 0;
  }
  
  .profile-image {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  </style>
  