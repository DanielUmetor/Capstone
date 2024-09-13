<template>
    <div class="signup-container">
      <div class="signup-form">
        <h2 class="signup-title">Register</h2>
        <form @submit.prevent="register">
          <div class="form-group">
            <label for="firstName" class="form-label">First Name</label>
            <input
              type="text"
              id="firstName"
              class="form-input"
              placeholder="Enter your first name"
              v-model="payload.firstName"
              required
            />
          </div>
          <div class="form-group">
            <label for="lastName" class="form-label">Last Name</label>
            <input
              type="text"
              id="lastName"
              class="form-input"
              placeholder="Enter your last name"
              v-model="payload.lastName"
              required
            />
          </div>
          <div class="form-group">
            <label for="age" class="form-label">Age</label>
            <input
              type="number"
              id="age"
              class="form-input"
              placeholder="Enter your age"
              v-model="payload.age"
              required
            />
          </div>
          <div class="form-group">
            <label for="email" class="form-label">Email Address</label>
            <input
              type="email"
              id="email"
              class="form-input"
              placeholder="Enter your email"
              v-model="payload.emailAdd"
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
              required
            />
          </div>
          <div class="form-group">
            <label for="profileURL" class="form-label">Profile Link</label>
            <input
              type="url"
              id="profileURL"
              class="form-input"
              placeholder="Enter your profile URL"
              v-model="payload.profileURL"
              required
            />
          </div>
          <div class="form-buttons">
            <button type="submit" class="submit-btn">Submit</button>
            <button type="reset" class="reset-btn">Reset</button>
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
    firstName: '',
    lastName: '',
    age: '',
    emailAdd: '',
    userPass: '',
    profileURL: 'https://i.postimg.cc/3rZ0H0D8/profile-Image.png'
  });
  
  const API_URL = 'https://capstone-i0ct.onrender.com/users/register';
  
  async function register() {
    try {
      await axios.post(API_URL, payload);
      alert('Registration successful!');
      router.push('/login'); // Redirect to Login page after successful registration
    } catch (error) {
      console.error('There was an error registering!', error);
      alert('Registration failed. Please try again.');
    }
  }
  </script>
  
  <style scoped>
  .signup-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: linear-gradient(135deg, #1e1e1e, #333);
    padding: 20px;
  }
  
  .signup-form {
    background: rgba(0, 0, 0, 0.8);
    padding: 30px;
    border-radius: 15px;
    width: 100%;
    max-width: 400px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.7);
  }
  
  .signup-title {
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
    justify-content: space-between;
  }
  
  .submit-btn {
    background-color: #ff69b4;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    width: 48%;
  }
  
  .submit-btn:hover {
    background-color: #e55b9d;
  }
  
  .reset-btn {
    background-color: #333;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    width: 48%;
  }
  
  .reset-btn:hover {
    background-color: #555;
  }
  </style>
  