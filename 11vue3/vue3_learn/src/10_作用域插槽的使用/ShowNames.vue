<template>
  <div>
    <template v-for="(item, index) in names" :key="item">
      <slot name="ii" :item="item" :index="index"></slot>
      
    </template>
  </div>
</template>

<script>
export default {
  props: {
    names: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped></style>
