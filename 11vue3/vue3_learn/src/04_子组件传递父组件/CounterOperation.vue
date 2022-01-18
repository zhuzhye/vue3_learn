<template>
  <div>
    <button @click="increatement">+1</button>
    <button @click="decreatement">-1</button>
    <input type="text" v-model.number="num" />
    <button @click="increatementN">+n</button>
  </div>
</template>

<script>
export default {
  // emits: ["add", "sub", "addN"],
  emits: {
    add: null,
    sub: null,
    addN: (payload) => {
      console.log(payload);
      if (payload > 5) {
        return true;
      } else {
        return false;
      }
    },
  },
  data() {
    return {
      num: 0,
    };
  },
  methods: {
    increatement() {
      this.$emit("add");
    },
    decreatement() {
      this.$emit("sub");
    },
    increatementN() {
      this.$emit("addN", this.num);
    },
  },
};
</script>

<style scoped></style>
