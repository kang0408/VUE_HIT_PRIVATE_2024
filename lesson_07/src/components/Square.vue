<script setup>
import { useCounterOptionStore } from "../stores/counter";
const couterOptionStore = useCounterOptionStore();
</script>

<template>
  <div class="square" v-if="couterOptionStore.toggle"></div>
</template>
<style>
.square {
  width: 100px;
  height: 100px;
  background-color: red;
}
</style>
