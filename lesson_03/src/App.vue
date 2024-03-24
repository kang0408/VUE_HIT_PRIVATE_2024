<script setup>
import HelloWorld from './components/HelloWorld.vue'
import {ref, computed} from 'vue';
const items = ref([{message: "Foo"}, {message: "Bar"}])

const students = {
  name: "Khang",
  age: 20
}

const arr = ref([5, 6, 2, 4, 1, 8]);

const sortedArr = computed(() => {
  return [...arr.value].sort();
})

const addArr = () => {
  let num = Math.round((Math.random() * 10));
  arr.value.push(num);
}

const flag = ref(false);
const message = ref();
const alertMessage = () => {
  alert(`Chao ${message.value} den day!`);
  if (message.value === "Tôi bị điên") return flag.value = true;
}

const checked = ref(false);
const gender = ref();
const selected = ref("");
</script>

<template>
  <div>
    <!-- List rendering -->
    <ul>
      <span v-for="(number, index) in arr" :key="index">{{ number }}, </span> <br>
      <span v-for="(number, index) in sortedArr" :key="index">{{ number }}, </span>
    </ul>
    <button @click="addArr">Add</button>

    <div v-for="(value, key, index) in students" :key="key">{{ index }} - {{ key }} : {{ value }}</div>

    <div v-if="!flag">
      <p>Your name: {{ message }}</p>
      <input type="text" v-model="message" placeholder="Enter your name"> 
      <button @click="alertMessage">Click me!!!</button>
    </div>
    <h1 v-if="flag" class="fade">Hehehe!!! 😂</h1>

    <input type="checkbox" id="checkbox" v-model="checked">
    <label for="checkbox">{{ checked }}</label>

    <p>Gender: {{ gender }}</p>
    <input type="radio" id="female" value="female" v-model="gender">
    <label for="female">female</label>
    <input type="radio" id="male" value="male" v-model="gender">
    <label for="male">male</label>

    <p>Seleted: {{ selected }}</p>
    <select v-model="selected">
      <option disabled value="">Pls select one</option>
      <option value="A">A</option>
      <option value="B">B</option>
      <option value="C">C</option>
    </select>
  </div>
</template>

<style scoped>
@keyframes fade {
  0% {opacity: 0;}
  100% {opacity: 1;}
}

.fade {
  animation: fade 1s;
}

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
