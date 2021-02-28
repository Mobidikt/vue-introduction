import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    list: [
      {
        value: 'Russia',
        capital_city: 'Moskow',
        description: ' ',
        img:
          'https://avatars.mds.yandex.net/get-zen_doc/44972/pub_5c86671d5168ec00b5905482_5c86695ae064fd00b26729bb/scale_1200',
      },
      {
        value: 'France',
        capital_city: 'Paris',
        description: '',
        img: 'https://www.1zoom.ru/big2/302/273702-alexfas01.jpg',
      },
      { value: 'Finland', capital_city: 'Helsinki', description: '' },
      { value: 'Germany', capital_city: 'Berlin', description: '' },
    ],
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
      console.log(state.list);
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
