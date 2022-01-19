<template>
  <div>
    <NavBarVue>
      <template v-slot:left>
        <button>左边的按钮</button>
      </template>
      <template  #center>
        <span>我是标题</span>
      </template>
      <template v-slot:[Sname]>
        <button>右边的按钮</button>
      </template>
    </NavBarVue>
  </div>
</template>

<script>
import NavBarVue from "./NavBar.vue";
export default {
  components: {
    NavBarVue,
  },
  data() {
    return {
      Sname:"right"
    }
  },
};
</script>

<style scoped></style>
