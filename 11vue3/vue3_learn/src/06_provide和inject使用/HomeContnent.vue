<template>
  <div>{{ myname }} --{{ age }} --{{ length.value }}</div>
</template>

<script>
export default {
  inject: ["myname", "age", "length"],
};
</script>

<style scoped></style>
