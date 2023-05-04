<script>
export default {
    name: "DescriptionElement",
    data() {
        return {
            items: 8,
        };
    },
};
</script>

<template lang="">
    <b-container>
        <b-row>
            <b-col cols="12" class="pb-3">
                <h2 class="text-w-800 text-large">Country</h2>
            </b-col>
            <b-col cols="12" class="pb-5">
                <b-container>
                    <b-row>
                        <b-col
                            cols="6"
                            v-for="item in items"
                            :key="item"
                            class="text-small px-0 pb-1"
                        >
                            <span class="text-w-800">header: </span> data
                        </b-col>
                    </b-row>
                </b-container>
            </b-col>
            <b-col cols="12" class="text-w-800 text-small"> buttons </b-col>
        </b-row>
    </b-container>
</template>

<style lang=""></style>
