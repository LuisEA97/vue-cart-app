<template>
  <div class="cart-component">
    <div class="cart-container">
      <EmptyCart v-if="!cart.length" />
      <div class="cart" v-for="item in cart" :key="item.id">
        <CartItem :item="item" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CartItem from "../components/CartItem/CartItem.vue";
import EmptyCart from "../components/EmptyCart/EmptyCart.vue";
export default {
  name: "Cart",
  components: {
    CartItem,
    EmptyCart,
  },
  computed: {
    ...mapGetters({
      cart: "getCart",
    }),
  },
};
</script>

<style scoped>
.cart-component {
  display: flex;
  justify-content: center;
}

.cart-container {
  margin-top: 85px;
  width: 100%;
}
.cart {
  width: 100%;
}
@media only screen and (min-width: 768px) {
  .cart-container {
    width: 600px;
  }
}
@media only screen and (min-width: 1024px) {
  .cart-container {
    width: 800px;
  }
}
</style>
