<template>
  <header>

    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/costa-almería">Costa Almería</RouterLink>
        <RouterLink to="/costa-blanca">Costa Blanca</RouterLink>
        <RouterLink to="/costa-cálida">Costa Cálida</RouterLink>
        <RouterLink to="/costa-del-sol">Costa del Sol</RouterLink>
        <RouterLink to="/gran-canaria">Gran Canaria</RouterLink>
        <RouterLink to="/ibiza">Ibiza</RouterLink>
        <RouterLink to="/lanzarote">Lanzarote</RouterLink>
        <RouterLink to="/mallorca">Mallorca</RouterLink>
        <RouterLink to="/menorca">Menorca</RouterLink>
        <RouterLink to="/tenerife">Tenerife</RouterLink>
      </nav>
    </div>
  </header>
  <div class="main-section">
  <RouterView />
</div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}


.main-section {
  height: 100vh;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;
    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
