<script>
import CardUnit from "../Units/CardUnit.vue";

export default {
    name: "ResultsElement",
    data() {
        return {
            columns: 4,
            timerScroll: null,
        };
    },
    components: {
        CardUnit,
    },
    created() {
        // infinite results scroll
        window.addEventListener("scroll", () => {
            if (this.timerScroll) return;
            this.timerScroll = setTimeout(() => {
                const scrollTop = window.scrollY;
                const clientHeight = document.documentElement.clientHeight;
                const scrollHeight = document.documentElement.scrollHeight;
                if (scrollHeight <= scrollTop + clientHeight + 100) {
                    this.$store.commit("ADD_SHOWN_COUNTRIES", 12);
                }
                clearTimeout(this.timerScroll);
                this.timerScroll = null;
            }, 300);
        });
    },
    computed: {
        shownCountries() {
            return this.$store.state.shownCountries;
        },
        screenWidth() {
            return this.$store.state.screenWidth;
        },
    },
    watch: {
        screenWidth: {
            handler(value) {
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
            immediate: true,
        },
    },
};
</script>

<template>
    <b-container class="px-0" id="inf-scroll">
        <b-row :cols="columns">
            <b-col
                class="pb-4"
                v-for="country in shownCountries"
                :key="country.cca3"
            >
                <CardUnit :data="country" class="mx-auto" />
            </b-col>
        </b-row>
    </b-container>
</template>

<style scoped></style>
