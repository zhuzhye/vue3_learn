<template>
  <div></div>
  <!-- <AsyncCategory></AsyncCategory> -->
    <suspense>
      <template #default>
        <AsyncCategory></AsyncCategory>
      </template>
      <template #fallback>loading.....</template>
    </suspense>
</template>
<script>
import Home from "./Home.vue";
import { defineAsyncComponent } from "vue";
import loadingVue from "./loading.vue";
// const AsyncCategory = defineAsyncComponent({
//   loader: () => import("./AsyncCategory.vue"),
//   loadingComponent: loadingVue,
//   // errorComponent
//   //在显示loadingcompoent之前等待多长事件
//   delay: 2000
// })
export default {
  components: {
    Home,
    AsyncCategory: defineAsyncComponent(() => import("./AsyncCategory.vue")),
  },
};
</script>

<style scoped></style>
