import Vue from 'vue';
import Vuex from 'vuex';

import getters from './getters';

import app from './modules/app';
import errorLog from './modules/errorLog';


Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    app,
    errorLog,
  },
  getters,
});

export default store;
