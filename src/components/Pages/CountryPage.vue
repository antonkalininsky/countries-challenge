<script>
import DescriptionElement from "../Elements/DescriptionElement.vue";

export default {
    name: "CountryPage",
    components: {
        DescriptionElement,
    },
};
</script>

<template lang="">
    <b-container>
        <b-row>
            <b-col class="py-5">
                <b-button
                    variant="black,link"
                    class="px-4 shadow-sm text-small"
                    to="/"
                >
                    <i class="fa-solid fa-arrow-left pr-2"></i>
                    Back
                </b-button>
            </b-col>
        </b-row>
        <b-row>
            <b-col cols="5">Флаг</b-col>
            <b-col><DescriptionElement /></b-col>
        </b-row>
    </b-container>
</template>

<style scoped></style>
