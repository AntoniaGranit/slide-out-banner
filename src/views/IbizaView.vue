<template>
  <div class="banner-div">
    <SlidingBanner />
  </div>
</template>

<script setup lang="ts">
import SlidingBanner from '../components/SlidingBanner.vue'
</script>

<style>
@media (min-width: 1024px) {
  .banner-div {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>