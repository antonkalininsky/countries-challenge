<script>
export default {
    name: "CountryButton",
    data() {
        return {
            name: null,
            id: null,
        };
    },
    props: {
        code: {
            Type: String,
        },
    },
    created() {
        const country = this.$store.getters.getCountryByCode(this.$props.code);
        this.name = country.name;
        this.id = country.cca3;
    },
    methods: {
        changeCountry() {
            this.$router.push({ path: "/country", query: { id: this.id } });
        },
    },
};
</script>

<template lang="">
    <b-button
        variant="black,link"
        class="px-4 shadow-custom text-small disable-transition my-1"
        :class="{
            'general-dark font-light': $store.state.isDarkMode,
        }"
        @click="changeCountry()"
    >
        {{ name.common }}
    </b-button>
</template>

<style scoped></style>
