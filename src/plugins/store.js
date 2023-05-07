import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        // screen
        screenWidth: 0,
        isDarkMode: false,
        // async
        isLoading: false,
        isError: false,
        countries: [],
        shownCountries: [],
        shownCounter: 0,
        // search
        searchWord: "",
        searchFilter: null,
        filteredCountries: [],
        searchedCountries: [],
        sortedCountries: [],
    },
    actions: {
        fetchAllCountries() {
            this.commit("SET_LOADING", true);
            this.commit("SET_ERROR", false);
            try {
                console.log("fetching");
                fetch("https://restcountries.com/v3.1/all")
                    .then((response) => response.json())
                    .then((data) => {
                        this.commit("SET_ALL_COUNTRIES", data);
                        this.commit("ADD_SHOWN_COUNTRIES", 12);
                    });
            } catch (error) {
                console.log(error);
                this.commit("SET_ERROR", true);
            } finally {
                this.commit("SET_LOADING", false);
            }
        },
        setScreenWidthReader() {
            setInterval(() => {
                this.state.screenWidth = window.innerWidth;
            }, 100);
        },
    },
    mutations: {
        SET_ALL_COUNTRIES(state, data) {
            state.countries = data;
        },
        SET_LOADING(state, isLoading) {
            state.isLoading = isLoading;
            if (isLoading) {
                console.log("loading...");
            } else {
                console.log("done loading");
            }
        },
        SET_ERROR(state, isError) {
            state.isError = isError;
            if (isError) {
                console.log("error");
            } else {
                console.log("no error");
            }
        },
        ADD_SHOWN_COUNTRIES(state, num) {
            let data = null;
            if (state.searchFilter || state.searchWord) {
                data = state.sortedCountries;
            } else {
                data = state.countries;
            }

            state.shownCountries = [
                ...state.shownCountries,
                ...data.slice(state.shownCounter, state.shownCounter + num),
            ];
            state.shownCounter += num;
        },
        RESET_SHOWN_DATA(state) {
            state.shownCountries = [];
            state.shownCounter = 0;
        },
        UPDATE_SORTED_COUNTRIES(state) {
            if (state.searchFilter) {
                state.filteredCountries = state.countries.filter(
                    (country) => country.region === state.searchFilter
                );
            } else {
                state.filteredCountries = state.countries;
            }

            if (state.searchWord) {
                state.searchedCountries = state.filteredCountries.filter(
                    (country) =>
                        country.name.common
                            .toLowerCase()
                            .includes(state.searchWord.toLowerCase())
                );
            } else {
                state.searchedCountries = state.filteredCountries;
            }

            state.sortedCountries = state.searchedCountries;
            this.commit("RESET_SHOWN_DATA");
            this.commit("ADD_SHOWN_COUNTRIES", 12);
        },
    },
    getters: {
        getCountryByCode: (state) => (code) => {
            return state.countries.find((country) => country.cca3 === code);
        },
    },
});

export default store;
