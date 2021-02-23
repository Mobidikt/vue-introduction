import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    list: [],
    title: '',
  },
  getters: {
    cnt(state) {
      return state.list.length;
    },
    canAdd(state) {
      return state.title !== '';
    },
  },
  mutations: {
    addTask(state) {
      state.list.push({ value: state.title });
      state.title = '';
    },
    removeTask(state, i) {
      state.list.splice(i, 1);
    },
    setTitle(state, title) {
      state.title = title;
    },
  },
});
