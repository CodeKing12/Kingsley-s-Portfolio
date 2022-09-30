<template>
  <IndexPage />
</template>

<script setup>
  import IndexPage from './components/IndexPage.vue';
  import AOS from "aos";
  import 'aos/dist/aos.css';

  AOS.init({
    offset: 300
  });
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Capriola&family=Epilogue:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Metrophobic&family=Space+Grotesk:wght@300;400;500;600;700&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap');

  html {
    scroll-behavior: smooth;
    overflow-x: hidden;
  }

  body {
    min-height: 100vh;
    overflow-x: hidden;
    background-color: #0C0C0C;
  }
</style>
