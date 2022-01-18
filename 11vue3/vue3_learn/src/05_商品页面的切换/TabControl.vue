<template>
  <div class="tab-control">
    <div
      class="tab-control-item"
      v-for="(title, index) in titles"
      :key="title"
      :class="{ active: currentIndex == index }"
      @click="itemclick(index)"
    >
    <span>  {{ title }}</span>
    </div>
  </div>
</template>

<script>
export default {
  emits:["titleclick"],
  props: {
    titles: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    itemclick(index){
      this.currentIndex=index
      this.$emit("titleclick",index)
    }
  },
};
</script>

<style scoped>
.tab-control {
  display: flex;
}
.tab-control-item {
  flex: 1;
  text-align: center;
}
.active{
  color: red;
}
.tab-control-item.active span{
  border-bottom: 3px solid red;
  padding: 5px;
}
</style>
