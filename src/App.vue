<template>
    <div id="app">
        <MainPage />
    </div>
</template>

<script>
import MainPage from "./components/Pages/MainPage.vue";

export default {
    name: "App",
    components: {
        MainPage,
    },
};
</script>

<style lang="scss">
@import 'https://fonts.googleapis.com/css?family=Nunito+Sans';
@import 'scss/custom.scss';

@import "~bootstrap/scss/bootstrap.scss";
@import "~bootstrap-vue/src/index.scss";

</style>
