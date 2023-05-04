import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        screenWidth: 0,
        isLoading: false,
        isError: false,
        countries: [],
        shownCountries: [],
        shownCounter: 0,
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
            console.log(state.countries);
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
            // state.shownCountries = [...state.shownCountries, ...state.countries.slice(state.shownCounter, num)];
            state.shownCounter += num;
        },
    },
});

export default store;
