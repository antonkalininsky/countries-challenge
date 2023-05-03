<script>
import SearchElement from "../Elements/SearchElement.vue";
import ResultsElement from "../Elements/ResultsElement.vue";

export default {
    name: "MainPage",
    components: {
        SearchElement,
        ResultsElement,
    },
};
</script>

<template>
    <b-container>
        <SearchElement />
        <ResultsElement />
    </b-container>
</template>

<style scoped></style>
