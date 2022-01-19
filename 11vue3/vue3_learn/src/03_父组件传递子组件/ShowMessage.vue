<template>
  <div>
    {{ title }}
    {{ content }}
  </div>
</template>

<script>
export default {
  // props:['title','content']
  inheritAttrs: false,
  props: {
    title: String,
    content: {
      type: String,
      required: true,
      default: "hhh",
    },
    info: {
      type: Object,
      default() {
        return { name: "11" };
      },
    },
    propF: {
      validator(value) {
        return ["success", "warning", "danger"].includes(value);
      },
    },
  },
};
</script>

<style scoped></style>
