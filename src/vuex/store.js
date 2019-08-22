import Vue from "vue";
import Vuex from "vuex";
import mutations from "./mutations.js";
import getters from "./getters";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    navs: []
  },
  mutations: mutations,
  actions: {},
  getters
});
