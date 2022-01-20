<template>
  <div>
    <button
      v-for="item in tabs"
      :key="item"
      @click="itemClick(item)"
      :class="{ active: currentTab === item }"
    >
      {{ item }}
    </button>
    <keep-alive include="CategoryVue,about">
      <component :is="currentTab" name="zzy" :age="18" @pageClick="pageClick"> </component>
    </keep-alive>
  </div>
</template>

<script>
import Home from "./pages/Home.vue";
import CategoryVue from "./pages/CategoryVue.vue";
import About from "./pages/About.vue";
export default {
  components: {
    Home,
    CategoryVue,
    About,
  },
  data() {
    return {
      tabs: ["home", "about", "CategoryVue"],
      currentTab: "home",
    };
  },
  methods: {
    itemClick(item) {
      this.currentTab = item;
    },
    pageClick() {
      console.log("page内部点击");
    },
  },
};
</script>

<style scoped>
.active {
  color: red;
  font-weight: bold;
}
</style>
