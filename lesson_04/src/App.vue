<script setup>
import { $api } from './api';
import { reactive } from 'vue';

const user = reactive({});
onBeforeMount(async() => {
  try {
    const res = await $api.get('')
  } catch (error) {
    
  }
})
</script>

<template>
  <div>
    <h1>Full name: {{ user?.fullName }}</h1>
    <p>Email: {{ user?.email }}</p>
  </div>
</template>

<style scoped>

</style>
