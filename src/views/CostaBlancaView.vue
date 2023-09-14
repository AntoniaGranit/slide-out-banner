<template>
    <div class="costa-blanca">
      <SlidingBanner />
    </div>
  </template>
  
  <script setup lang="ts">
  import SlidingBanner from '../components/SlidingBanner.vue'
  </script>
  
  <style>
  @media (min-width: 1024px) {
    .costa-blanca {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  }
  </style>