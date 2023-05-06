<script>
export default {
    name: "SearchFilterUnit",
    data() {
        return {
            searchFilter: null,
            filterOptions: [
                { value: null, text: "Filter by Region" },
                { value: "Africa", text: "Africa" },
                { value: "Americas", text: "Americas" },
                { value: "Asia", text: "Asia" },
                { value: "Europe", text: "Europe" },
                { value: "Oceania", text: "Oceania" },
            ],
        };
    },
    watch: {
        searchFilter(filter) {
            this.$store.state.searchFilter = filter;
            this.$store.commit("UPDATE_SORTED_COUNTRIES");
        },
    },
};
</script>

<template>
    <b-form-select
        class="border-0 shadow-sm text-mid disable-transition"
        :class="{'general-dark font-light' : $store.state.isDarkMode }"
        v-model="searchFilter"
        :options="filterOptions"
    ></b-form-select>
</template>

<style scoped></style>
