import Vue from 'vue';
import Vuex from 'vuex';

import getters from './getters';

import app from './modules/app';
import user from './modules/user';
import errorLog from './modules/errorLog';
import permission from './modules/permission'
import tagsView from './modules/tagsView'

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    app,
    errorLog,
    permission,
    tagsView,
    user
  },
  getters,
});

export default store;
