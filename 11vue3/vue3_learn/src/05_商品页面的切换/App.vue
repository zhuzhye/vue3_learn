<template>
  <div>
    <TabControlVue :titles="titles" @titleclick="titleclick"></TabControlVue>
    {{contents[currentIndex]}}
  </div>
</template>

<script>
import TabControlVue from "./TabControl.vue";
export default {
  components: {
    TabControlVue,
  },
  data() {
    return {
      titles: ["衣服", "鞋子", "裤子"],
      contents: ["衣服页面", "鞋子页面", "裤子页面"],
      currentIndex:0
    };
  },
  methods: {
    titleclick(index){
      this.currentIndex=index
    }
  },
};
</script>

<style scoped></style>
