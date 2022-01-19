<template>
  <div>
    <!-- <ChildCpnVue>
      <button>hhh</button>
    </ChildCpnVue> -->

    <ShowNamesVue :names="names">
      <template v-slot:ii="slotProps">
        <button>
          {{ slotProps.item }}
          {{ slotProps.index }}
        </button>
      </template>
    </ShowNamesVue>
    
    <!-- 独占默认插槽的缩写 -->
    <!-- <ShowNamesVue :names="names" v-slot="slotProps">
      <button>
        {{ slotProps.item }}
        {{ slotProps.index }}
      </button>
    </ShowNamesVue> -->
  </div>
</template>

<script>
import ChildCpnVue from "./ChildCpn.vue";
import ShowNamesVue from "./ShowNames.vue";
export default {
  components: {
    ChildCpnVue,
    ShowNamesVue,
  },
  data() {
    return {
      names: ["kobe", "james"],
    };
  },
};
</script>

<style scoped></style>
