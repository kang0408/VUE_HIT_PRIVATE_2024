<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
</script>
<template>
  <div>
    <h1>Username: {{ route.params.username }}</h1>
  </div>
</template>
