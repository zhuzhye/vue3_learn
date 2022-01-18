<template>
  <h2>我是vue</h2>
  <h2>{{title}}</h2>
  <hello-word></hello-word>
</template>
<script>
import HelloWord from './HelloWord.vue'
export default {
  components: { HelloWord },
  data(){
    return{
      title:"nihao1"
    }
  }
}
</script>
<style scoped>
  h2{color:red}
</style>