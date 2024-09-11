<template>
  <nav class="navbar navbar-expand-lg sticky-top" :class="{ 'scrolled': isScrolled }">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">
        <img src="https://danielumetor.github.io/Capstone-Images/Logo.png" loading="lazy" alt="logo" />
      </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" aria-current="page" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/products">Games</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/checkout">Cart</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/admin">Admin</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/reachUs">Support</router-link>
          </li>
          <ul class="userAccount navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/login">Login</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/register">Register</router-link>
            </li>
          </ul>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavbarView',
  data() {
    return {
      isScrolled: false
    };
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 50; // Adjust the scroll position as needed
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
};
</script>

<style scoped>
/* Importing the Google Font 'Poppins' */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap');

body {
  font-family: 'Poppins', sans-serif; /* Applying font to entire page */
}

.navbar {
  background-color: rgba(33, 33, 33, 0.7); /* Transparent dark background */
  padding: 10px 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s, box-shadow 0.3s;
}

.navbar.scrolled {
  background-color: rgba(33, 33, 33, 0.9); /* Less transparent when scrolled */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
}

.navbar-brand img {
  width: 50px;
  height: 50px;
  transition: transform 0.3s ease;
}

.navbar-brand img:hover {
  transform: rotate(10deg) scale(1.1);
}

.navbar-toggler-icon {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3E%3Cpath stroke='%23fff' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
}

.nav-link {
  color: #fff;
  padding: 10px 15px;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
}

.nav-link:hover {
  color: #ff69b4;
  background-color: rgba(255, 105, 180, 0.2);
  border-radius: 5px;
}

.nav-link.active {
  color: #ff69b4;
}

.nav-item {
  position: relative;
}

.nav-item::before {
  content: "";
  position: absolute;
  left: 50%;
  bottom: 0;
  width: 0;
  height: 2px;
  background-color: #ff69b4;
  transition: all 0.3s ease;
}

.nav-item:hover::before {
  width: 100%;
  left: 0;
}

.userAccount .nav-link {
  font-size: 16px;
}

.userAccount .nav-link:hover {
  color: #ff69b4;
  text-decoration: underline;
}
</style>
