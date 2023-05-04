<script>
export default {
    name: "NavElement",
    data() {
        return {
            isDarkMode: false,
        };
    },
};
</script>

<template>
    <b-navbar
        toggleable="lg"
        type="white"
        variant="light shadow-sm"
        class="px-0 py-3"
    >
        <b-container class="px-3">
            <b-navbar-brand tag="h1" class="text-w-800 text-header m-0">
                Where in the world?
            </b-navbar-brand>
            <b-button
                :pressed.sync="isDarkMode"
                variant="link,dark"
                class="ml-auto text-w-600 text-small px-0"
            >
                <i class="fa-regular fa-moon fa-lg"></i>
                Dark Mode
            </b-button>
        </b-container>
    </b-navbar>
</template>

<style scoped></style>
