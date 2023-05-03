<script>
export default {
    name: "SearchFilterUnit",
    data() {
        return {
            selected: null,
            options: [
                { value: null, text: "Filter by Region" },
                { value: "Africa", text: "Africa" },
                { value: "America", text: "America" },
                { value: "Asia", text: "Asia" },
                { value: "Europe", text: "Europe" },
                { value: "Oceania", text: "Oceania" },
            ],
        };
    },
};
</script>

<template>
    <b-form-select
        class="border-0 shadow-sm text-mid"
        v-model="selected"
        :options="options"
    ></b-form-select>
</template>

<style scoped></style>
