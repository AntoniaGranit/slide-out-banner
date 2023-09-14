<template>
  <div class="banner">
      <h3>You're invited to our {{ decodedLocation }} Facebook group!</h3>
      <p>Stay updated on new <span class="bold">{{ decodedLocation }}</span> properties for sale via <br>our <span class="bold">private Facebook group.</span></p>
      <a :href="facebookGroupUrl" target="_blank">
        <button type="button" class="facebook-btn">
          JOIN FACEBOOK GROUP
        </button>
      </a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'SlidingBanner',
  data() {
    return {
      // showBanner: false,
      location: '',
      decodedLocation: '',
      facebookGroupUrl: '',
    };
  },
  mounted() {
    const location = this.parseLocationFromURL();
    if (location) {
      this.location = location;
      console.log("location:", location)
      const capitalizedLocation = this.capitalizedLocation(decodeURIComponent(location));
      this.decodedLocation = capitalizedLocation;
      this.facebookGroupUrl = this.generateFacebookGroupUrl(location);
      // this.showBanner = true;
    }
  },
  methods: {
    capitalizedLocation(location: string) {
      let words = location.split(' ');
      console.log("words array:", words)
      let capitalizedLocation = words.map((word, index) => {
        if (index === 0 || index === words.length - 1) {
          return word.charAt(0).toUpperCase() + word.slice(1);
        } else {
          return word.toLowerCase();
        }
        }).join(' ');
        return capitalizedLocation;
    },
    parseLocationFromURL() {
      const url = window.location.href;
      console.log("url:", url);
      return url.split('/').pop()?.replace(/-/g, ' ');
    },
    generateFacebookGroupUrl(location: string) {
      const sanitizedLocation = location.replace(/%C3%AD/g, 'i').replace(/%C3%A1/g, 'a').replace(/ /g, '');
      console.log("sanitizedLocation:", sanitizedLocation)
      return `https://www.facebook.com/groups/propertiesforsalein${sanitizedLocation}`;
    },
  }
});
</script>

<style scoped>
.banner {
  width: 285px;
  border: 1px solid rgb(221, 219, 219);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 2rem;
  padding: 20px;
  gap: 10px;
}

h3 {
  font-size: 1.1rem;
  font-weight: bold;
  color: #004589;
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
  background-color: #004589;
  color: #fff;
  padding: 12px;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
