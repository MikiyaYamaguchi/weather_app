// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import axios from "axios";
import Vue from "vue";
import VueAxios from "vue-axios";
import VueHead from "vue-head";
import Vuex from "vuex";
import App from "./App";
import router from "./router";

Vue.config.productionTip = false;

Vue.use(Vuex);

Vue.use(VueHead);

Vue.use(VueAxios, axios);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
