<template>
  <div>
    <MySlotCpnVue>
      <MyButtomVue></MyButtomVue>
    </MySlotCpnVue>
  </div>
</template>

<script>
import MySlotCpnVue from "./MySlotCpn.vue"
import MyButtomVue from "./MyButtom.vue"
export default {
  components: {
    MySlotCpnVue,
    MyButtomVue
  }
}
</script>

<style scoped>
</style>