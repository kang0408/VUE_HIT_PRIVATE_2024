<script setup>
import { defineEmits, reactive, ref } from "vue";
const emits = defineEmits(["login-handler"]);

const account = reactive({
  email: "",
  password: "",
});
function loginHandler() {
  emits("login-handler", account);
}
</script>
<template>
  <form action="">
    <p>{{ account.email }}</p>
    <p>{{ account.password }}</p>
    <label for="account">Account</label> <br />
    <input type="text" id="account" v-model="account.email" /> <br />
    <label for="password">Password</label> <br />
    <input type="password" id="password" v-model="account.password" /> <br />
    <button @click.prevent="loginHandler">Log in</button>
  </form>
</template>
<style></style>
