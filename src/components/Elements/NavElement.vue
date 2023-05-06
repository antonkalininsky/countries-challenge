<script>
export default {
    name: "NavElement",
    data() {
        return {
            isDarkMode: false,
        };
    },
    watch: {
        isDarkMode(mode) {
            document.body.classList.toggle("body-dark");
            this.$store.state.isDarkMode = mode;
        },
    },
};
</script>

<template>
    <b-navbar
        toggleable="lg"
        type="light"
        class="px-0 py-3 shadow-sm"
        :class="{ 'general-dark': isDarkMode, 'general-light': !isDarkMode }"
    >
        <b-container class="px-3">
            <b-navbar-brand
                tag="h1"
                class="text-w-800 text-header m-0"
                :class="{ 'font-light': isDarkMode }"
            >
                Where in the world?
            </b-navbar-brand>
            <b-button
                :pressed.sync="isDarkMode"
                variant="link,white"
                class="ml-auto text-w-600 text-small px-0 disable-transition"
                :class="{ 'font-light': isDarkMode }"
            >
                <i class="fa-regular fa-moon fa-lg"></i>
                Dark Mode
            </b-button>
        </b-container>
    </b-navbar>
</template>

<style scoped></style>
