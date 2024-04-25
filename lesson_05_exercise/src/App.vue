<script setup>
import { $api } from "./api";
import { reactive, onBeforeMount } from "vue";
import loginForm from "./components/login.vue";
import registerForm from "./components/register.vue";
import profileForm from "./components/profile.vue";

function changColorTitle(name) {
  console.log("Name: ", name);
}

const user = reactive({});

onBeforeMount(async () => {
  try {
    const res = await $api.get("user/me");
    Object.assign(user, res.data.data);
  } catch (error) {}
});

async function loginHandler(account) {
  try {
    const res = await $api.post("auth/login", account);
    console.log(res.data);
    localStorage.setItem("hit14-vuejs:access-token", res.data.data.accessToken);

    const userRes = await $api.get("user/me");
    Object.assign(user, userRes.data.data);
    console.log(user);
  } catch (error) {}
}

async function registerHandler(newAccount) {
  try {
    const res = await $api.post("/auth/register", newAccount);
    console.log(res);
  } catch (error) {}
}
</script>

<template>
  <div>
    <loginForm @login-handler="loginHandler" />
    <hr />
    <registerForm @register-handler="registerHandler" />
    <hr />
    <profileForm
      :fullName="user.fullName"
      :email="user.email"
      :avatar="user.avatar"
    />
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
