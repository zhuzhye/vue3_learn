<template>
  <div>
    <button @click="btnclick">按钮点击</button>
  </div>
</template>

<script>
import emitter from "./utils/eventbus";
export default {
  methods: {
    btnclick() {
      emitter.emit("why", { name: "why", age: 18 });
    },
  },
};
</script>

<style scoped></style>
