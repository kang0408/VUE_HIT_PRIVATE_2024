<script setup>
import { defineEmits, reactive, watch } from "vue";
const emits = defineEmits(["change-password-handler"]);

const password = reactive({
  currentPassword: "",
  newPassword: "",
});

const changePasswordStatus = reactive({
  success: false,
  error: false,
  errorMsg: "",
});

function changePassword() {
  emits("change-password-handler", password, changePasswordStatus);
}

const passwordRequired = reactive({
  "least-8-chars": false,
  "least-1-letter": false,
  "least-1-numberic": false,
});

watch(password, () => {
  const regexLetter = /^(?=.*[a-z])(?=.*[A-Z]).+$/;
  const regexNumber = /^(?=.*\d).+$/;

  if (password.newPassword.length >= 8)
    passwordRequired["least-8-chars"] = true;
  else passwordRequired["least-8-chars"] = false;

  if (regexLetter.test(password.newPassword))
    passwordRequired["least-1-letter"] = true;
  else passwordRequired["least-1-letter"] = false;

  if (regexNumber.test(password.newPassword))
    passwordRequired["least-1-numberic"] = true;
  else passwordRequired["least-1-numberic"] = false;
});
</script>
<template>
  <form action="">
    <div class="form-wrap">
      <label for="password">Password</label> <br />
      <input type="password" id="password" v-model="password.currentPassword" />
      <br />
      <label for="new-password">New password </label> <br />
      <input type="password" id="new-password" v-model="password.newPassword" />
      <br />
      <p v-if="changePasswordStatus.error" class="form-error">
        {{ changePasswordStatus.errorMsg }}
      </p>
      <ul class="password-required">
        Password required:
        <li :class="{ done: passwordRequired['least-8-chars'] }">
          At least 8 characters
        </li>
        <li :class="{ done: passwordRequired['least-1-letter'] }">
          At least 1 letter character (uppercase or lowercase)
        </li>
        <li :class="{ done: passwordRequired['least-1-numberic'] }">
          At least 1 numeric character.
        </li>
      </ul>

      <p v-if="changePasswordStatus.success" class="change-pasword-success">
        Change password succesfully
      </p>
      <input type="button" value="CHANGE" @click.prevent="changePassword" />
    </div>
  </form>
</template>
