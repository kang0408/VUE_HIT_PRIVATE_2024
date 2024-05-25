import { defineStore } from "pinia";

export const useCounterOptionStore = defineStore("counter", {
  state: () => ({ count: 0, name: "Pinia", toggle: false }),
});

// export const useCounterSetupStore = defineStore("counter", () => {
//   const count = ref();
//   const name = "Pinia";
//   let toggle = false;
//   return count;
// });
