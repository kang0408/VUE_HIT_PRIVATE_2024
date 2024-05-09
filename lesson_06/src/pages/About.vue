<script>
import { useRouter } from "vue-router";
const router = useRouter();
</script>
<template>
  <div>
    <h1>ABOUT PAGE</h1>
    <!-- <router-link to="detail">To detail</router-link> -->
    <button @click="router.push('/detail')">Click to go Detail</button>
    <router-link to="/hello-world">To Hello World</router-link>
    <router-link :to="{ name: 'profile', params: { username: 'khang' } }"
      >Go Khang</router-link
    >
    <router-link :to="{ name: 'profile', params: { username: 'dung' } }"
      >Go Dung</router-link
    >
    <router-link :to="{ name: 'profile', params: { username: 'phuong' } }"
      >Go Phuong</router-link
    >
    <router-view />
  </div>
</template>
