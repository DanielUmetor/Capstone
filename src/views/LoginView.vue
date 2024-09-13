<template>
    <div class="login-container">
      <div class="login-form">
        <h2 class="login-title">Login</h2>
        <form @submit.prevent="login">
          <div class="form-group">
            <label for="email" class="form-label">Email Address</label>
            <input
              type="email"
              id="email"
              class="form-input"
              placeholder="Enter your email"
              v-model="payload.emailAdd"
              pattern="^[A-Za-z0-9]+@[a-z0-9]+\.[a-z]{2,4}$"
              required
            />
          </div>
          <div class="form-group">
            <label for="password" class="form-label">Password</label>
            <input
              type="password"
              id="password"
              class="form-input"
              placeholder="Enter your password"
              v-model="payload.userPass"
              minlength="4"
              required
            />
          </div>
          <div class="form-buttons">
            <button type="submit" class="submit-btn">Login</button>
          </div>
          <div class="form-links">
            <button type="button" class="forgot-password-btn" @click="forgotPassword">Forgot Password</button>
            <button type="button" class="signup-btn" @click="goToSignUp">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
  import { reactive } from 'vue';
  import axios from 'axios';
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  
  const payload = reactive({
    emailAdd: '',
    userPass: '' // Changed from pwd to userPass
  });
  
  const API_URL = 'https://capstone-i0ct.onrender.com/users/login'; // Update to your login endpoint
  
  async function login() {
    try {
      // Perform login request
      await axios.post(API_URL, payload);
      alert('Login successful!');
      router.push('/products'); // Redirect to ProductsView.vue after successful login
    } catch (error) {
      console.error('There was an error logging in!', error);
      alert('Login failed. Please check your credentials and try again.');
    }
  }
  
  function forgotPassword() {
    // Handle forgot password logic
    alert('Forgot password functionality not implemented.');
  }
  
  function goToSignUp() {
    router.push('/signup'); // Redirect to SignUp.vue
  }
  </script>
  
  <style scoped>
  .login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: linear-gradient(135deg, #1e1e1e, #333);
    padding: 20px;
  }
  
  .login-form {
    background: rgba(0, 0, 0, 0.8);
    padding: 30px;
    border-radius: 15px;
    width: 100%;
    max-width: 400px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.7);
  }
  
  .login-title {
    font-family: 'Roboto', sans-serif;
    font-size: 2.5rem;
    color: #ff69b4;
    text-align: center;
    margin-bottom: 20px;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  .form-label {
    display: block;
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    color: #fff;
    margin-bottom: 5px;
  }
  
  .form-input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    background: #222;
    color: #fff;
  }
  
  .form-buttons {
    display: flex;
    justify-content: center;
  }
  
  .submit-btn {
    background-color: #ff69b4;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    width: 100%;
  }
  
  .submit-btn:hover {
    background-color: #e55b9d;
  }
  
  .form-links {
    margin-top: 10px;
    text-align: center;
  }
  
  .forgot-password-btn,
  .signup-btn {
    background-color: #333;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    margin: 5px;
    width: 48%;
  }
  
  .forgot-password-btn:hover,
  .signup-btn:hover {
    background-color: #555;
  }
  </style>
  