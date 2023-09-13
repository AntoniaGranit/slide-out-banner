<template>
  <div class="banner">
      <h3>{{ msg }}</h3>
      <p>Stay updated on new <span class="bold">Costa Cálida</span> properties for sale via <br>our <span class="bold">private Facebook group.</span></p>
      <button @click="addMore()">JOIN FACEBOOK GROUP</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SlidingBanner',
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
  methods: {
    addMore() {
      this.lol+2;
    }
  },
  data() {
    return {
      lol: 218,
    };
  },
});
</script>

<style scoped>
.banner {
  width: 285px;
  border: 1px solid rgb(221, 219, 219);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 10px;
}

h3 {
  font-size: 1.1rem;
  font-weight: bold;
  color: #0b3a80;
}

p {
  color: #8d8c8c;
  font-size: 0.95rem;
}

.bold {
  font-weight: bold;
  color: #575656;
}

button {
  border: none;
  background-color: #0b3a80;
  color: #fff;
  padding: 12px;
  border-radius: 4px;
  cursor: pointer;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
