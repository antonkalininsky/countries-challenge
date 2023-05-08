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
            isBreak: false,
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
        screenWidth: {
            handler(value) {
                this.columns = 6;
                this.isBreak = false;
                if (value < 768) {
                    this.columns = 12;
                    this.isBreak = true;
                    return;
                }
            },
            immediate: true,
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
        readDomain(domain) {
            if (domain) {
                return domain[0];
            }
            return "-";
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
            <b-col cols="12" class="pb-3 px-0">
                <h2 class="text-w-800 text-large">
                    {{ data.name.common }}
                </h2>
            </b-col>
        </b-row>
        <b-row>
            <b-col :cols="columns" class="pb-3 px-0">
                <b-list-group class="border-0">
                    <b-list-group-item
                        class="text-small px-0 py-1 border-0 bg-transperent"
                    >
                        <span class="text-w-800">Native Name: </span>
                        {{ readNames(data.name.nativeName) }}
                    </b-list-group-item>
                    <b-list-group-item
                        class="text-small px-0 py-1 border-0 bg-transperent"
                    >
                        <span class="text-w-800">Population: </span>
                        {{ populationDivider(String(data.population)) }}
                    </b-list-group-item>
                    <b-list-group-item
                        class="text-small px-0 py-1 border-0 bg-transperent"
                    >
                        <span class="text-w-800">Region: </span>
                        {{ data.region }}
                    </b-list-group-item>
                    <b-list-group-item
                        class="text-small px-0 py-1 border-0 bg-transperent"
                    >
                        <span class="text-w-800">Sub Region: </span>
                        {{ data.subregion }}
                    </b-list-group-item>
                    <b-list-group-item
                        class="text-small px-0 py-1 border-0 bg-transperent"
                    >
                        <span class="text-w-800">Capital: </span>
                        {{ readCapital(data.capital) }}
                    </b-list-group-item>
                </b-list-group>
            </b-col>
            <b-col :cols="columns" class="pb-5 px-0">
                <b-list-group class="border-0">
                    <b-list-group-item
                        class="text-small px-0 py-1 border-0 bg-transperent"
                    >
                        <span class="text-w-800">Top Level Domain: </span>
                        {{ readDomain(data.tld) }}
                    </b-list-group-item>
                    <b-list-group-item
                        class="text-small px-0 py-1 border-0 bg-transperent"
                    >
                        <span class="text-w-800">Currencies: </span>
                        {{ readCurrencies(data.currencies) }}
                    </b-list-group-item>
                    <b-list-group-item
                        class="text-small px-0 py-1 border-0 bg-transperent"
                    >
                        <span class="text-w-800">Language: </span>
                        {{ readLanguages(data.languages) }}
                    </b-list-group-item>
                </b-list-group>
            </b-col>
        </b-row>
        <b-row>
            <b-col cols="12" class="text-w-800 text-small px-0">
                Border Countries:
                <span v-if="data.borders === undefined" class="text-w-300">
                    none
                </span>
                <br v-if="isBreak" />
                <span class="p-1" v-for="code in data.borders" :key="code">
                    <CountryButton :code="code" />
                </span>
            </b-col>
        </b-row>
    </b-container>
</template>

<style scoped></style>
