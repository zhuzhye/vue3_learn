<template>
  <div>
    <HomeVue></HomeVue>
    <button @click="add">add</button>
  </div>
</template>

<script>
import HomeVue from "./Home.vue";
import { computed } from "vue";
export default {
  components: {
    HomeVue,
  },
  provide() {
    return {
      myname: "why",
      age: 18,
      length: computed(() => this.names.length),
    };
  },
  data() {
    return {
      names: ["abc", "vba"],
    };
  },
  methods: {
    add() {
      this.names.push("11");
    },
  },
};
</script>

<style scoped></style>
