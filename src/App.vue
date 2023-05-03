<script>
import NavElement from "./components/Elements/NavElement.vue";

export default {
    name: "App",
    components: {
        NavElement,
    },
};
</script>

<template>
    <div id="app">
        <NavElement />
        <router-view></router-view>
    </div>
</template>

<style lang="scss">
@import "https://fonts.googleapis.com/css?family=Nunito+Sans";
@import "scss/custom.scss";

@import "~bootstrap/scss/bootstrap.scss";
@import "~bootstrap-vue/src/index.scss";
</style>
