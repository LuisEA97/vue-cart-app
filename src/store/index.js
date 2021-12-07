import { createStore } from "vuex";
import { ADD_TO_CART, EDIT_ITEM } from "./mutation-types";

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
  },
  actions: {
    addToCart({ commit }, item) {
      commit(ADD_TO_CART, item);
    },
    editItem({ commit }, id, data) {
      commit(EDIT_ITEM, id, data);
    },
  },
  getters: {
    getCart: (state) => {
      return state.shoppingCart;
    },
  },
});
