<script>
import CardUnit from "../Units/CardUnit.vue";

export default {
    name: "ResultsElement",
    data() {
        return {
            num: 8,
            columns: 4,
            screenWidth: 0,
            countries: []
        };
    },
    components: {
        CardUnit,
    },
    created() {
        // this.$store.commit('ADD_SHOWN_COUNTRIES', 8);
        // console.log(this.$store.countries);
        this.countries = this.$store.countries;

        setInterval(() => {
            this.screenWidth = window.innerWidth;
        }, 100);
    },
    computed: {
        shownCountries() {
            return this.$store.state.countries
        }
    },
    watch: {
        screenWidth(value) {
            this.columns = 4;
            if (value < 580) {
                this.columns = 1;
                return;
            }
            if (value < 768) {
                this.columns = 2;
                return;
            }
            if (value < 992) {
                this.columns = 3;
                return;
            }
        },
    },
};
</script>

<template>
    <b-container class="px-0">
        <b-row :cols="columns">
            <b-col class="pb-4" v-for="country in shownCountries" :key="country.ccn3">
                <CardUnit :data="country" class="mx-auto" />
            </b-col>
        </b-row>
    </b-container>
</template>

<style scoped></style>
