<template>
    <div class="content">
      <!-- Your main content goes here -->
      
      <div class="container-fluid footer-container">
          <div class="row">
              <div class="col-md-3">
                  <p class="lead">
                      DanielUmetor &copy; <span id="currYear">2024</span>
                  </p>
                  <p class="text-muted">
                      All rights reserved.
                  </p>
              </div>
              <div class="col-md-3 social-media-links">
                  <h5>Follow us:</h5>
                  <div class="icons">
                      <a href="#" target="_blank">
                          <i class="fab fa-facebook-f"></i>
                      </a>
                      <a href="#" target="_blank">
                          <i class="fab fa-twitter"></i>
                      </a>
                      <a href="#" target="_blank">
                          <i class="fab fa-instagram"></i>
                      </a>
                      <a href="#" target="_blank">
                          <i class="fab fa-youtube"></i>
                      </a>
                      <a href="#" target="_blank">
                          <i class="fab fa-discord"></i>
                      </a>
                      <a href="#" target="_blank">
                          <i class="fab fa-twitch"></i>
                      </a>
                      <a href="#" target="_blank">
                          <i class="fab fa-steam"></i>
                      </a>
                  </div>
              </div>
              <div class="col-md-3 quick-links">
                  <h5>Quick Links:</h5>
                  <ul>
                      <li><a href="#">About Us</a></li>
                      <li><a href="#">Contact Us</a></li>
                      <li><a href="#">FAQs</a></li>
                      <li><a href="#">Terms of Service</a></li>
                      <li><a href="#">Privacy Policy</a></li>
                  </ul>
              </div>
              <div class="col-md-3 newsletter">
                  <h5>Stay Updated:</h5>
                  <p class="text-muted">
                      Subscribe to our newsletter for the latest gaming news, updates, and promotions!
                  </p>
                  <form>
                      <input type="email" placeholder="Enter your email address">
                      <button type="submit">Subscribe</button>
                  </form>
              </div>
          </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
      name: "FooterComp",
  }
  </script>

  <style scoped>
  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
  }
  
  .content {
    min-height: 100vh; /* Ensures the content area takes up at least the viewport height */
    box-sizing: border-box; /* Includes padding in the element's total width and height */
  }
  
  .footer-container {
    background-color: #1e1e1e; /* Dark background for modern look */
    padding: 20px 10px; /* Reduced padding for a smaller footer height */
    color: #dcdcdc; /* Light text color for contrast */
    border-top: 2px solid #ff69b4; /* Slightly thinner border */
    max-height: 250px; /* Set a maximum height for the footer container */
    overflow-y: auto; /* Allow the footer to scroll if content exceeds the maximum height */
  }
  .lead {
    font-size: 16px; /* Slightly smaller font size */
    font-weight: bold;
  }
  
  .text-muted {
    color: #a0a0a0; /* Lighter gray for muted text */
  }
  
  .social-media-links {
    text-align: center;
  }
  
  .social-media-links h5 {
    margin-bottom: 10px; /* Reduced margin */
    font-size: 18px; /* Slightly smaller font size */
  }
  
  .icons {
    display: flex;
    justify-content: center;
    gap: 10px; /* Reduced gap between icons */
  }
  
  .icons a {
    color: #dcdcdc; /* Light color for icons */
    font-size: 20px; /* Slightly smaller icon size */
    transition: color 0.3s, transform 0.3s; /* Smooth hover effect */
  }
  
  .icons a:hover {
    color: #ff69b4; /* Bright pink hover color */
    transform: scale(1.1); /* Slight zoom effect on hover */
  }
  
  .quick-links {
    margin-top: 10px; /* Reduced margin */
  }
  
  .quick-links h5 {
    margin-bottom: 10px; /* Reduced margin */
    font-size: 18px; /* Slightly smaller font size */
  }
  
  .quick-links ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .quick-links li {
    margin-bottom: 5px; /* Reduced margin */
  }
  
  .quick-links a {
    color: #dcdcdc; /* Matching text color */
    text-decoration: none;
  }
  
  .quick-links a:hover {
    color: #ff69b4; /* Bright pink hover color */
  }
  
  .newsletter h5 {
    margin-bottom: 10px; /* Reduced margin */
    font-size: 18px; /* Slightly smaller font size */
  }
  
  .newsletter form {
    display: flex;
    gap: 10px;
  }
  
  .newsletter input {
    padding: 6px; /* Reduced padding */
    border: 1px solid #333;
    border-radius: 4px;
    flex: 1;
  }
  
  .newsletter button {
    padding: 6px 12px; /* Reduced padding */
    border: none;
    border-radius: 4px;
    background-color: #ff69b4;
    color: #fff;
    cursor: pointer;
    font-size: 14px; /* Slightly smaller font size */
  }
  
  .newsletter button:hover {
    background-color: #e55b8b; /* Darker pink for button hover */
  }
  </style>
