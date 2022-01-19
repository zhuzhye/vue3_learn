<template>
  <div>
    <HomeVue></HomeVue>
    <AboutVue></AboutVue>
    <button @click="add">add</button>
  </div>
</template>

<script>
import HomeVue from "./Home.vue";
import AboutVue from "./About.vue";
export default {
  components: {
    HomeVue,
    AboutVue,
  },
  data() {
    return {};
  },
  methods: {
    add() {
      this.names.push("11");
    },
  },
};
</script>

<style scoped></style>
