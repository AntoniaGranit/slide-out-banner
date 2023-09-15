<template>
  <div class="banner" :class="{ 'slide-in': showBanner }">
    <img alt="close banner" class="x-icon" src="@/assets/x.svg" @click="closeBanner()">
      <h3>You're invited to our {{ decodedLocation }} Facebook group!</h3>
      <p>Stay updated on new <span class="bold">{{ decodedLocation }}</span> properties for sale via our <span class="bold">private Facebook group.</span></p>
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
      showBanner: false,
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
      setTimeout(() => {
        this.showBanner = true;
      }, 1000);
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
    closeBanner() {
    this.showBanner = false;
  }
  }
});
</script>

<style scoped>
.banner {
  width: 100%;
  border: 1px solid rgb(221, 219, 219);
  background-color: #fff;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: -50%; /* Initially hidden off-screen at the bottom */
  /* top: -50%; IN CASE OF CHAT BOT */
  padding: 1.3rem;
  gap: 20px;
}

.slide-in {
  animation: slide-in 2.5s ease-in-out forwards; /* I thought this was a good sliding speed */
}

@keyframes slide-in {
  0% {
    bottom: -100%; /* Start off-screen */
  }
  100% {
    bottom: 0rem; /* Slide up the screen to the bottom */
  }
}

/* IN CASE OF CHAT BOT: /*
/* @keyframes slide-in {
  0% {
    top: -100%; 
 }
  100% {
    top: 0rem; 
 }
} */

.x-icon {
  width: 15px;
  height: 15px;
  align-self: flex-end;
  cursor: pointer;
  position: absolute;
  margin: -0.5rem;
}

h3 {
  font-size: 1.15rem;
  font-weight: bold;
  color: #004589;
}

p {
  color: #8d8c8c;
  font-size: 1rem;
}

.bold {
  font-weight: bold;
  color: #575656;
}

button {
  border: none;
  background-color: #004589;
  color: #fff;
  font-size: 0.9rem;
  padding: 12px;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
}

@media (min-width: 660px) and (max-width: 1023px) {
  button {
  width: 60%;
  display: flex;
  justify-content: center;
  margin: auto;
}

.banner {
  gap: 15px;
}
}

@media (min-width: 1024px) {
  .banner {
  width: 285px;
  border: 1px solid rgb(221, 219, 219);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 2rem;
  left: -40%; /* Initially hidden off-screen to the left */
  padding: 1.3rem;
  gap: 8px;
}

  @keyframes slide-in {
  0% {
    left: -100%; /* Start off-screen to the left */
  }
  100% {
    left: 2rem; /* Slide in to the current position at the left-hand corner */
  }
}
}
</style>
