<template>
    <h2>App</h2>
    <HelloWordVue></HelloWordVue>
</template>

<script>
import HelloWordVue from "./HelloWord.vue";
export default {
  components: {
    HelloWordVue,
  },
};
</script>

<style scoped>
h2 {
  color: red;
}
</style>
