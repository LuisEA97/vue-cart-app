import { createStore } from "vuex";
import { ADD_TO_CART, EDIT_ITEM, REMOVE_ITEM } from "./mutation-types";

export default createStore({
  state: {
    shoppingCart: [],
  },
  mutations: {
    [ADD_TO_CART](state, payload) {
      state.shoppingCart = [...state.shoppingCart, payload];
    },
    [EDIT_ITEM](state, payload) {
      const info = payload;
      state.shoppingCart = state.shoppingCart.map((item) => {
        console.log("payload", info);
        if (item.id === info.id) {
          return info.data;
        }
        return item;
      });
    },
    [REMOVE_ITEM](state, payload) {
      state.shoppingCart = state.shoppingCart.filter(
        (item) => item.id !== payload
      );
    },
  },
  actions: {
    addToCart({ commit }, item) {
      commit(ADD_TO_CART, item);
    },
    editItem({ commit }, id, data) {
      commit(EDIT_ITEM, id, data);
    },
    removeItem({ commit }, id) {
      commit(REMOVE_ITEM, id);
    },
  },
  getters: {
    getCart: (state) => {
      return state.shoppingCart;
    },
  },
});
