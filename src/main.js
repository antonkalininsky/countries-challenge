import Vue from "vue";
import App from "./App.vue";
import "./plugins/bootstrap-vue";
import router from "./plugins/router";

Vue.config.productionTip = false;

new Vue({
    render: (h) => h(App),
    router,
}).$mount("#app");
