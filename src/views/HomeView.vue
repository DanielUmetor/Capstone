<template>
  <div id="app">
    <div class="video-container">
      <video src="../assets/home page.mp4" class="full-screen-video" autoplay muted loop></video>
      <div class="overlay-text">
        <h1>WELCOME TO GAME VAULTS</h1>
        <router-link to="/products" class="shop-now-button">Shop Now</router-link>
      </div>
    </div>

    <nav class="navbar">
      <!-- navbar content -->
    </nav>

    <FooterComp/>
  </div>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap');

html, body {
  margin: 0;
  padding: 0;
  height: 100%;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.video-container {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  flex-shrink: 0;
}

.full-screen-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}

.overlay-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.overlay-text h1 {
  font-family: 'Archivo Black', sans-serif;
  font-size: 4rem;
  color: #ff69b4; /* Matches your theme color */
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.7); /* Adds a shadow to make the text stand out */
  margin: 0;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background for contrast */
  border-radius: 10px;
}

.shop-now-button {
  display: inline-block;
  margin-top: 20px;
  padding: 15px 30px;
  font-size: 1.5rem;
  color: #fff;
  background-color: #ff69b4;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.shop-now-button:hover {
  background-color: #e55b9d;
}

/* Navbar */
.navbar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
}

footer {
  flex-shrink: 0;
  margin-top: auto;
}
</style>
