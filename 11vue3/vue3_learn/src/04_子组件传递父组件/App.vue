<template>
  <div>
    <h2>当前计数：{{ counter }}</h2>
    <CounterOperationVue @add="addone" @sub="subone" @addN="addNNum"></CounterOperationVue>
  </div>
</template>

<script>
import CounterOperationVue from "./CounterOperation.vue";
export default {
  components: {
    CounterOperationVue,
  },
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    addone() {
      this.counter++;
    },
    subone() {
      this.counter--;
    },
    addNNum(num) {
      this.counter += num;
    },
  },
};
</script>

<style scoped></style>
