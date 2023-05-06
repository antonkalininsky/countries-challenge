<script>
import DescriptionElement from "../Elements/DescriptionElement.vue";

export default {
    name: "CountryPage",
    components: {
        DescriptionElement,
    },
    computed: {
        data() {
            return this.$store.getters.getCountryById(this.$route.query.id);
        }
    }
};
</script>

<template lang="">
    <b-container>
        <b-row>
            <b-col class="py-5">
                <b-button
                    variant="black,link"
                    class="px-4 shadow-sm text-small disable-transition"
                    :class="{
                        'general-dark font-light': $store.state.isDarkMode,
                    }"
                    to="/"
                >
                    <i class="fa-solid fa-arrow-left pr-2"></i>
                    Back
                </b-button>
            </b-col>
        </b-row>
        <b-row>
            <b-col cols="5">
                <b-img :src="data.flags.svg" fluid></b-img>
            </b-col>
            <b-col><DescriptionElement :data="data" /></b-col>
        </b-row>
    </b-container>
</template>

<style scoped></style>
