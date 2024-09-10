<template>
    <nav class="navbar navbar-expand-lg bg-dark sticky-top">
        <div class="container-fluid">
            <router-link class="navbar-brand" to="/">
                <img src="https://danielumetor.github.io/Capstone-Images/Logo.png" loading="lazy" alt="logo">
            </router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
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
                            <router-link class="nav-link" to="/signup">Register</router-link>
                        </li>
                    </ul>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style>
.navbar {
  background-color: #212121; /* dark gray background */
  border-bottom: 2px solid #333; /* dark gray border */
}

.navbar-brand {
  font-size: 24px;
  font-weight: bold;
  color: #ff69b4; /* bright pink color */
}

.navbar-brand img {
  width: 40px;
  height: 40px;
  margin-right: 10px;
}

.nav-link {
  color: #fff; /* white text color */
  transition: color 0.2s ease; /* smooth hover effect */
}

.nav-link:hover {
  color: #ff69b4; /* bright pink hover color */
  border-bottom: 2px solid #ff69b4; /* add border on hover */
}

.navbar-toggler-icon {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3E%3Cpath stroke='%23ff69b4' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
  background-size: 20px 20px;
}

.navbar-toggler-icon:hover {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3E%3Cpath stroke='%23fff' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
}

.userAccount {
  margin-left: 20px;
}

.userAccount .nav-link {
  color: #fff;
  border-bottom: 2px solid transparent;
}

.userAccount .nav-link:hover {
  border-bottom: 2px solid #ff69b4;
}

/* add this to fix the color bleeding onto the video issue */
.full-screen-video {
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  object-fit: cover;
}
</style>