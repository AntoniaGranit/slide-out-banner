<template>
  <div class="costa-calida">
    <SlidingBanner msg="You're invited to our Costa Cálida Facebook group!" />
  </div>
</template>

<script setup lang="ts">
import SlidingBanner from '../components/SlidingBanner.vue'
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
