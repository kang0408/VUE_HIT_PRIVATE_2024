<script setup>
import { ref } from "vue";
import { useCounterOptionStore } from "../stores/counter";
import Child from "./Child.vue";

const couterOptionStore = useCounterOptionStore();
</script>
<template>
  <div>
    <h1>Parent</h1>
    <h3>{{ couterOptionStore.name }}</h3>
    <h1>{{ couterOptionStore.count }}</h1>
    <button @click="couterOptionStore.count++">Add</button>
    <button @click="couterOptionStore.toggle = !couterOptionStore.toggle">
      Toggle
    </button>
    <Child class="border" />
  </div>
</template>
<style>
.border {
  border: 1px solid;
  padding: 5px;
}
</style>
