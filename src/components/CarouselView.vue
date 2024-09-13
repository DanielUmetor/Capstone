<template>
    <div class="carousel">
      <div class="carousel-inner">
        <div class="carousel-item" v-for="(image, index) in images" :key="index">
          <img :src="image" alt="Coming Soon Image" />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CarouselView',
    data() {
      return {
        images: [
          'https://danielumetor.github.io/Capstone-Images/grand-theft-auto-v-cover-art.jpg',
          'https://danielumetor.github.io/Capstone-Images/GOW.jpg'
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  .carousel {
    position: relative;
    width: 80%;
    margin: auto;
    overflow: hidden;
    border-radius: 10px;
  }
  
  .carousel-inner {
    display: flex;
    width: 100%;
    transition: transform 0.5s ease-in-out;
  }
  
  .carousel-item {
    min-width: 100%;
    box-sizing: border-box;
  }
  
  .carousel img {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }
  
  @keyframes slide {
    0% { transform: translateX(0); }
    100% { transform: translateX(-100%); }
  }
  </style>
  