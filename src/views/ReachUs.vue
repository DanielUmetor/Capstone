<template>
    <div class="contact-container">
      <div class="contact-form">
        <h2 class="contact-title">Reach Us</h2>
        <form 
          action="https://formspree.io/f/mpwaerkg" 
          method="POST" 
          class="form">
          <label for="name" class="form-label">Name:</label>
          <input type="text" id="name" name="name" class="form-input" required />
  
          <label for="email" class="form-label">Email:</label>
          <input type="email" id="email" name="email" class="form-input" required />
  
          <label for="message" class="form-label">Message:</label>
          <textarea id="message" name="message" class="form-textarea" rows="4" required></textarea>
  
          <button type="submit" class="submit-btn">Send Message</button>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
    // You can add additional JavaScript or composition API logic here if needed
  </script>
  
  <style scoped>
  .contact-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #1e1e1e;
    padding: 20px;
  }
  
  .contact-form {
    background-color: #333;
    padding: 20px;
    border-radius: 10px;
    width: 100%;
    max-width: 600px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }
  
  .contact-title {
    font-family: 'Roboto', sans-serif;
    font-size: 2rem;
    color: #ff69b4;
    text-align: center;
    margin-bottom: 20px;
  }
  
  .form-label {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    color: #fff;
    margin-top: 10px;
  }
  
  .form-input, .form-textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    margin-top: 5px;
  }
  
  .form-textarea {
    resize: vertical;
  }
  
  .submit-btn {
    background-color: #ff69b4;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    margin-top: 20px;
    width: 100%;
  }
  
  .submit-btn:hover {
    background-color: #e55b9d;
  }
  </style>
  