<script setup>
import { reactive, ref, defineEmits } from "vue";

const newAccount = reactive({
  fullName: "",
  email: "",
  password: "",
});

const emits = defineEmits(["register-handler"]);

function registerHandler() {
  emits("register-handler", newAccount);
}
</script>
<template>
  <form action="">
    <p>{{ newAccount.fullName }}</p>
    <p>{{ newAccount.email }}</p>
    <p>{{ newAccount.password }}</p>
    <label for="name">Full name</label> <br />
    <input
      id="name"
      placeholder="Enter your full name"
      v-model="newAccount.fullName"
    />
    <br />
    <p class="form-error"></p>
    <label for="email">Email</label> <br />
    <input
      id="email"
      placeholder="Enter your email"
      v-model="newAccount.email"
    />
    <br />
    <p class="form-error"></p>
    <label for="password">Password</label> <br />
    <input
      type="password"
      placeholder="Enter password"
      v-model="newAccount.password"
      id="password"
      required
    />
    <br />
    <p class="form-error"></p>
    <ul class="password-required">
      Password required:
      <li>At least 8 characters</li>
      <li>At least 1 letter character (uppercase or lowercase)</li>
      <li>At least 1 numeric character.</li>
    </ul>
    <p class="form-feature">Have an account?</p>
    <input type="button" value="REGISTER" @click.prevent="registerHandler" />
  </form>
</template>
<style></style>
