<template></template>

<script>
import emitter from "./utils/eventbus";
export default {
  created() {
    function infomethod(info) {
      console.log(info);
    }
    emitter.on("why", infomethod);
    //监听所有的
    emitter.on("*", (type, info) => {
      console.log(type, info);
    });
    setTimeout(() => {
      emitter.off("why", infomethod);
    }, 2000);
  },
};
</script>

<style scoped></style>
