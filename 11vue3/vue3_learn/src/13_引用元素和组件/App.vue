<template>
    <div ref="title">hhhh</div>
    <NavBarVue ref="NavBarVue"></NavBarVue>
    <button @click="Btnclick">获取元素</button>
</template>

<script>
import NavBarVue from "./NavBar.vue";
export default {
    components: {
        NavBarVue
    },
    methods: {
        Btnclick() {
            console.dir(this.$refs.NavBarVue.message);
            console.log(this.$refs);
        }
    },
    
}
</script>

<style scoped>
</style>