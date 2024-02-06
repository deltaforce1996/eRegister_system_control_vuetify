// store/index.js
import { createStore } from 'vuex';

const store = createStore({
  state: {
    count: 0,
    vendor_rsp : []
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
    add_vendor_rsp(state, todo) {
      state.vendor_rsp.push(todo);
    },
    remove_vendor_rsp(state, todo) {
      state.vendor_rsp.push(todo);
    }
  },
  actions: {
    incrementAsync({ commit }) {
      setTimeout(() => {
        commit('increment');
      }, 1000);
    },
    decrementAsync({ commit }) {
      setTimeout(() => {
        commit('decrement');
      }, 1000);
    },
  },
  getters: {
    getCount: state => {
      return state.count;
    },
    GET_VENDOR_RSP: state => {
      return state.vendor_rsp;
    },
  }
});

export default store;
