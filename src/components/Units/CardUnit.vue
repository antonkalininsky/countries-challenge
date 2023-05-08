<script>
export default {
    name: "CardUnit",
    props: {
        data: {
            Type: Object,
        },
    },
    methods: {
        readCapital(data) {
            if (data) {
                return data[0];
            }
            return "-";
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

<template>
    <b-card
        tag="article"
        class="mb-2 border-0 shadow-sm card-size"
        no-body
        :class="{ 'general-dark': $store.state.isDarkMode }"
    >
        <div class="card-img-box rounded-top">
            <b-card-img
                :src="data.flags.svg"
                alt="Image"
                top
                class="card-img disable-bottom-round"
                rounded="top"
            ></b-card-img>
        </div>
        <div class="px-3">
            <b-card-title
                class="text-mid text-w-800 pt-3"
                :class="{ 'font-light': $store.state.isDarkMode }"
            >
                {{ data.name.common }}
            </b-card-title>
            <b-card-text class="text-small">
                <b-list-group
                    class="pb-3"
                    :class="{ 'font-light': $store.state.isDarkMode }"
                >
                    <b-list-group-item
                        class="border-0 p-0"
                        :class="{ 'general-dark': $store.state.isDarkMode }"
                    >
                        <span class="font-weight-bold">Population: </span>
                        {{ populationDivider(String(data.population)) }}
                    </b-list-group-item>
                    <b-list-group-item
                        class="border-0 p-0"
                        :class="{ 'general-dark': $store.state.isDarkMode }"
                    >
                        <span class="font-weight-bold">Region: </span>
                        {{ data.region }}
                    </b-list-group-item>
                    <b-list-group-item
                        class="border-0 p-0"
                        :class="{ 'general-dark': $store.state.isDarkMode }"
                    >
                        <span class="font-weight-bold">Capital: </span>
                        {{ readCapital(data.capital) }}
                    </b-list-group-item>
                </b-list-group>
            </b-card-text>
        </div>
        <b-link
            class="stretched-link"
            :to="{ path: '/country', query: { id: data.cca3 } }"
        ></b-link>
    </b-card>
</template>

<style scoped></style>
