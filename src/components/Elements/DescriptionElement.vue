<script>
import CountryButton from "../Units/CountryButton.vue";

export default {
    name: "DescriptionElement",
    components: {
        CountryButton,
    },
    data() {
        return {
            columns: 6,
        };
    },
    props: {
        data: {
            Type: Object,
        },
    },
    computed: {
        screenWidth() {
            return this.$store.state.screenWidth;
        },
    },
    watch: {
        screenWidth(value) {
            this.columns = 6;
            if (value < 768) {
                this.columns = 12;
                return;
            }
        },
    },
    methods: {
        readCapital(data) {
            if (data) {
                return data[0];
            }
            return "-";
        },
        readNames(names) {
            const namesList = new Set();
            for (let name of Object.values(names)) {
                namesList.add(name.common);
            }

            let rslt = "";
            for (let name of namesList) {
                rslt += `${name}`;
                namesList.delete(name);
                if (namesList.size !== 0) {
                    rslt += `, `;
                }
            }

            return rslt;
        },
        readLanguages(languages) {
            let rslt = "";
            for (let lang of Object.values(languages)) {
                rslt += `${lang}`;
                if (lang !== Object.values(languages).at(-1)) {
                    rslt += ", ";
                }
            }
            return rslt;
        },
        readCurrencies(currencies) {
            let rslt = "";
            for (let curr of Object.values(currencies)) {
                rslt += `${curr.name}`;
                if (curr !== Object.values(currencies).at(-1)) {
                    rslt += ", ";
                }
            }
            return rslt;
        },
        populationDivider(num) {
            if (num.length <= 3) {
                return num;
            }
            return `${this.populationDivider(num.slice(0, -3))},${num.slice(
                -3
            )}`;
        },
    },
};
</script>

<template lang="">
    <b-container
        :class="{
            'font-light': $store.state.isDarkMode,
        }"
    >
        <b-row>
            <b-col cols="12" class="pb-3">
                <h2 class="text-w-800 text-large">
                    {{ data.name.common }}
                </h2>
            </b-col>
            <b-col cols="12" class="pb-5">
                <b-container>
                    <b-row>
                        <b-col :cols="columns" class="text-small px-0 pb-1">
                            <span class="text-w-800">Native Name: </span>
                            {{ readNames(data.name.nativeName) }}
                        </b-col>
                        <b-col :cols="columns" class="text-small px-0 pb-1">
                            <span class="text-w-800">Top Level Domain: </span>
                            {{ data.tld[0] }}
                        </b-col>
                        <b-col :cols="columns" class="text-small px-0 pb-1">
                            <span class="text-w-800">Population: </span>
                            {{ populationDivider(String(data.population)) }}
                        </b-col>
                        <b-col :cols="columns" class="text-small px-0 pb-1">
                            <span class="text-w-800">Currencies: </span>
                            {{ readCurrencies(data.currencies) }}
                        </b-col>
                        <b-col :cols="columns" class="text-small px-0 pb-1">
                            <span class="text-w-800">Region: </span>
                            {{ data.region }}
                        </b-col>
                        <b-col :cols="columns" class="text-small px-0 pb-1">
                            <span class="text-w-800">Language: </span>
                            {{ readLanguages(data.languages) }}
                        </b-col>
                        <b-col :cols="columns" class="text-small px-0 pb-1">
                            <span class="text-w-800">Sub Region: </span>
                            {{ data.subregion }}
                        </b-col>
                        <b-col :cols="columns" class="text-small px-0 pb-1">
                            <span class="text-w-800">Capital: </span>
                            {{ readCapital(data.capital) }}
                        </b-col>
                    </b-row>
                </b-container>
            </b-col>
            <b-col cols="12" class="text-w-800 text-small">
                Border Countries
                <span class="p-1" v-for="code in data.borders" :key="code">
                    <CountryButton :code="code" />
                </span>
            </b-col>
        </b-row>
    </b-container>
</template>

<style scoped></style>
