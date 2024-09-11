<template>
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
          <div class="icon-row">
            <a href="https://facebook.com" target="_blank" aria-label="Facebook">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" target="_blank" aria-label="Twitter">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank" aria-label="Instagram">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="https://youtube.com" target="_blank" aria-label="YouTube">
              <i class="fab fa-youtube"></i>
            </a>
          </div>
          <div class="icon-row">
            <a href="https://discord.com" target="_blank" aria-label="Discord">
              <i class="fab fa-discord"></i>
            </a>
            <a href="https://twitch.tv" target="_blank" aria-label="Twitch">
              <i class="fab fa-twitch"></i>
            </a>
            <a href="https://store.steampowered.com" target="_blank" aria-label="Steam">
              <i class="fab fa-steam"></i>
            </a>
          </div>
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
</template>


<script>
export default {
  name: "FooterComp"
}
</script>

<style scoped>


html, body {
  margin: 0;
  padding: 0;
  height: 100%;
}

.footer-container {
  background-color: #1e1e1e;
  padding: 20px;
  color: #dcdcdc;
  border-top: 2px solid #ff69b4;
}

.lead {
  font-size: 16px;
  font-weight: bold;
}

.text-muted {
  color: #a0a0a0;
}

.social-media-links {
  text-align: center;
}

.social-media-links h5 {
  margin-bottom: 10px;
  font-size: 18px;
}

.icons {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.icon-row {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.icons a {
  color: #dcdcdc;
  font-size: 24px; /* Increased size for better visibility */
  transition: color 0.3s, transform 0.3s;
}

.icons a:hover {
  color: #ff69b4;
  transform: scale(1.1);
}

.quick-links {
  margin-top: 10px;
}

.quick-links h5 {
  margin-bottom: 10px;
  font-size: 18px;
}

.quick-links ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.quick-links li {
  margin-bottom: 5px;
}

.quick-links a {
  color: #dcdcdc;
  text-decoration: none;
}

.quick-links a:hover {
  color: #ff69b4;
}

.newsletter h5 {
  margin-bottom: 10px;
  font-size: 18px;
}

.newsletter form {
  display: flex;
  gap: 10px;
}

.newsletter input {
  padding: 6px;
  border: 1px solid #333;
  border-radius: 4px;
  flex: 1;
}

.newsletter button {
  padding: 6px 12px;
  border: none;
  border-radius: 4px;
  background-color: #ff69b4;
  color: #fff;
  cursor: pointer;
  font-size: 14px;
}

.newsletter button:hover {
  background-color: #e55b8b;
}

</style>
