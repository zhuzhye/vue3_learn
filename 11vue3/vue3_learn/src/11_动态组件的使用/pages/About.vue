<template>
  <div>About组件</div>
  <button @click="addcount">{{ count }} {{ name }} {{ age }}</button>
</template>

<script>
export default {
  name:"about",
  props: {
    name: {
      type: String,
      default: "",
    },
    age: {
      type: Number,
      default: 0,
    },
  },
  emits: ["pageClick"],
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    addcount() {
      this.count++;
    },
  },
};
</script>

<style scoped></style>
