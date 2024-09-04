<template>
    <nav class="navbar">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/products">Products</router-link></li>
        <li><router-link to="/admin">Admin</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'NavbarView'
  }
  </script>
  
  <style scoped>
  .navbar {
    background-color: #333;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .navbar ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
  }
  
  .navbar li {
    margin-right: 20px;
  }
  
  .navbar a {
    color: #fff;
    text-decoration: none;
  }
  
  .navbar a:hover {
    color: #ccc;
  }
  
  .navbar a.router-link-exact-active {
    color: #66d9ef;
  }
  </style>