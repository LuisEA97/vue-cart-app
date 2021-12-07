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
    [EDIT_ITEM](state, id, payload) {
      state.shoppingCart = state.shoppingCart.map((item) => {
        if (item.id === id) {
          item = payload;
        }
        console.log(item);
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
