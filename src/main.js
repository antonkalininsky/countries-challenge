import Vue from "vue";
import App from "./App.vue";
import "./plugins/bootstrap-vue";
import router from "./plugins/router";
import store from "./plugins/store";

Vue.config.productionTip = false;

new Vue({
    render: (h) => h(App),
    router,
    store
}).$mount("#app");
