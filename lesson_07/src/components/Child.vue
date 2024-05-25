<script setup>
import { ref } from "vue";
import { useCounterOptionStore } from "../stores/counter";

const couterOptionStore = useCounterOptionStore();
</script>
<template>
  <div>
    <h1>Child</h1>
    <h4 v-if="couterOptionStore.toggle">Hello World~</h4>
    <h3>{{ couterOptionStore.name }}</h3>
    <h1>{{ couterOptionStore.count }}</h1>
    <button @click="couterOptionStore.count--">Add</button>
  </div>
</template>
