<script>
import SearchInputUnit from "../Units/SearchInputUnit.vue";
import SearchFilterUnit from "../Units/SearchFilterUnit.vue";

export default {
    name: "SearchElement",
    components: {
        SearchInputUnit,
        SearchFilterUnit,
    },
};
</script>

<template>
    <b-container fluid class="p-4">
        <b-row align-h="between">
            <b-col md="*"><SearchInputUnit /></b-col>
            <b-col md="*"><SearchFilterUnit /></b-col>
        </b-row>
    </b-container>
</template>

<style scoped></style>
