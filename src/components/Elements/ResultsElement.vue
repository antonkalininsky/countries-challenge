<script>
import CardUnit from "../Units/CardUnit.vue";

export default {
    name: "ResultsElement",
    data() {
        return {
            num: 8,
            columns: 4,
            screenWidth: 0,
        };
    },
    components: {
        CardUnit,
    },
    mounted() {
        setInterval(() => {
            this.screenWidth = window.innerWidth;
        }, 100);
    },
    watch: {
        screenWidth(value) {
            this.columns = 4;
            if (value < 580) {
                this.columns = 1;
                return
            }
            if (value < 768) {
                this.columns = 2;
                return
            }
            if (value < 992) {
                this.columns = 3;
                return
            }
        },
    },
};
</script>

<template>
    <b-container class="px-0">
        <b-row :cols="columns">
            <b-col class="pb-4" v-for="card in num" :key="card">
                <CardUnit class="mx-auto" />
            </b-col>
        </b-row>
    </b-container>
</template>

<style scoped></style>
