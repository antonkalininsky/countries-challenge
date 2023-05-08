<script>
import DescriptionElement from "../Elements/DescriptionElement.vue";

export default {
    name: "CountryPage",
    data() {
        return {
            columns: 5,
        };
    },
    components: {
        DescriptionElement,
    },
    computed: {
        data() {
            return this.$store.getters.getCountryByCode(this.$route.query.id);
        },
        screenWidth() {
            return this.$store.state.screenWidth;
        },
    },
    watch: {
        screenWidth: {
            handler(value) {
                this.columns = 6;
                if (value < 768) {
                    this.columns = 12;
                    return;
                }
            },
            immediate: true,
        },
    },
};
</script>

<template lang="">
    <b-container>
        <b-row>
            <b-col class="py-5">
                <b-button
                    variant="black,link"
                    class="px-4 shadow-custom text-small disable-transition"
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
            <b-col :cols="columns" class="py-0">
                <b-img :src="data.flags.svg" fluid class="mb-4"></b-img>
            </b-col>
            <b-col :cols="12 - columns" class="py-0">
                <DescriptionElement :data="data" />
            </b-col>
        </b-row>
    </b-container>
</template>

<style scoped></style>
