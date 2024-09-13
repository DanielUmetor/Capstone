<template>
  <div class="about-page">
    <section class="hero-section">
      <h1>Welcome to GameVaults</h1>
      <p>Your ultimate destination for the latest and greatest games. Explore, play, and experience gaming like never before.</p>
    </section>

    <section class="about-content">
      <div class="about-card">
        <h2>Our Mission</h2>
        <p>At GameVaults, we provide gamers with a premium selection of games that cater to all tastes, delivered through a seamless shopping experience.</p>
      </div>
      <div class="about-card">
        <h2>Our Vision</h2>
        <p>We aim to be the go-to gaming store for passionate gamers, offering the latest titles and an engaging community for every type of gamer.</p>
      </div>
    </section>


  </div>
</template>

<script>
export default {
  name: 'AboutView',
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@500&family=Poppins:wght@400&display=swap');

.about-page {
  background-color: #0d0d0d; /* Dark, sleek background */
  color: #ffffff;
  font-family: 'Poppins', sans-serif;
  padding: 50px 20px;
  text-align: center;
}

/* Hero Section */
.hero-section {
  padding: 100px 20px;
  background: linear-gradient(135deg, #121212, #1e1e1e);
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.3);
  margin-bottom: 60px;
}

.hero-section h1 {
  font-family: 'Orbitron', sans-serif;
  font-size: 4rem;
  color: #00ffff; /* Neon cyan text */
  margin-bottom: 20px;
}

.hero-section p {
  font-size: 1.5rem;
  color: #e0e0e0;
  max-width: 800px;
  margin: 0 auto;
}

/* About Content Section */
.about-content {
  display: flex;
  justify-content: space-around;
  gap: 30px;
  flex-wrap: wrap;
  margin-bottom: 60px;
}

.about-card {
  background-color: #1e1e1e;
  border: 2px solid #00ffff; /* Neon border */
  border-radius: 15px;
  padding: 40px 30px;
  width: 45%;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease, background-color 0.3s ease;
}

.about-card h2 {
  font-size: 2rem;
  margin-bottom: 15px;
  color: #ff69b4; /* Neon pink heading */
}

.about-card p {
  font-size: 1.2rem;
  line-height: 1.8;
  color: #d1d1d1;
}

.about-card:hover {
  background-color: #292929;
  transform: translateY(-10px);
}


</style>
