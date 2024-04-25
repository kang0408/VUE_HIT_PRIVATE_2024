<script setup>
import { defineProps } from "vue";
const props = defineProps(["fullName", "email", "avatar"]);
</script>
<template>
  <div>
    <p class="name">{{ props.fullName }}</p>
    <p class="email">{{ props.email }}</p>
    <div class="avatar">
      <img :src="props.avatar" alt="" />
    </div>
  </div>
</template>
<style>
.avatar {
  width: 100px;
  height: 100px;
}
.avatar img {
  width: 100%;
  object-fit: cover;
}
</style>
