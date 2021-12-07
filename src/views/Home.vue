<template>
  <div class="home">
    <CreateItem />
    <div class="cart" v-for="item in cart" :key="item.id">
      <CartItem :item="item" />
    </div>
  </div>
</template>

<script>
CreateItem;
import { mapGetters } from "vuex";
import CartItem from "../components/CartItem/CartItem.vue";
import CreateItem from "../components/CreateItem/CreateItem.vue";
// @ is an alias to /src

export default {
  name: "Home",
  components: {
    CartItem,
    CreateItem,
  },
  data() {
    return {
      doritos: {
        name: "Doritos nacho",
        price: 15.0,
        currency: "MXN",
        stock: 10,
        qty: 1,
      },
    };
  },
  computed: {
    ...mapGetters({
      cart: "getCart",
    }),
  },
};
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow-y: auto;
}
.cart {
  width: 100%;
}
@media only screen and (min-width: 768px) {
  .home {
    padding: 0 2rem;
  }
}
@media only screen and (min-width: 1024px) {
  .home {
    padding: 0 5rem;
  }
}
@media only screen and (min-width: 1280px) {
  .home {
    padding: 0 8rem;
  }
}
@media only screen and (min-width: 1536px) {
  .home {
    padding: 0 11rem;
  }
}
</style>
