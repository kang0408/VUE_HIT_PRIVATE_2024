<script setup>
import { useRouter } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";

const router = useRouter();
</script>

<template>
  <div>
    <router-link to="/">Go Home</router-link>
    <router-link to="/about">Go About</router-link>
    <!-- <button @click="router.push('/about')">Click to go about</button> -->
    <!-- <button @click="router.push('/')">Click to go home</button> -->
    <RouterView />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
