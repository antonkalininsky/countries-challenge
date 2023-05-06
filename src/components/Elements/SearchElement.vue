<script>
import SearchInputUnit from "../Units/SearchInputUnit.vue";
import SearchFilterUnit from "../Units/SearchFilterUnit.vue";

export default {
    name: "SearchElement",
    data() {
        return {
            inputCols: 5,
            filterCols: 3,
        };
    },
    components: {
        SearchInputUnit,
        SearchFilterUnit,
    },
    computed: {
        screenWidth() {
            return this.$store.state.screenWidth;
        },
    },
    watch: {
        screenWidth(value) {
            this.inputCols = 5;
            this.filterCols = 3;
            if (value < 768) {
                this.inputCols = 12;
                this.filterCols = 7;
                return;
            }
        },
    },
};
</script>

<template>
    <b-container class="pt-4 px-0">
        <b-row align-h="between">
            <b-col class="pb-4" :cols="inputCols"><SearchInputUnit /></b-col>
            <b-col class="pb-5" :cols="filterCols"><SearchFilterUnit /></b-col>
        </b-row>
    </b-container>
</template>

<style scoped></style>
