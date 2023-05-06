<script>
export default {
    name: "SearchInputUnit",
    data() {
        return {
            searchWord: "",
        };
    },
    mounted() {
        this.searchWord = this.$store.state.searchWord;
    },
    watch: {
        searchWord(searchWord) {
            this.$store.state.searchWord = searchWord;
            this.$store.commit("UPDATE_SORTED_COUNTRIES");
        },
    },
};
</script>

<template>
    <div class="input-group shadow-sm py-0 rounded">
        <span class="input-group-prepend">
            <div
                class="input-group-text border-0 px-3 text-secondary"
                :class="{
                    'bg-white': !$store.state.isDarkMode,
                    'general-dark ': $store.state.isDarkMode,
                }"
            >
                <i
                    class="fa fa-search"
                    :class="{
                        'font-light ': $store.state.isDarkMode,
                    }"
                ></i>
            </div>
        </span>
        <b-form-input
            v-model="searchWord"
            type="search"
            debounce="500"
            class="py-2 pl-0 border-0 text-mid"
            :class="{ 'general-dark font-light': $store.state.isDarkMode }"
            placeholder="Search for a country..."
        ></b-form-input>
    </div>
</template>

<style scoped></style>
