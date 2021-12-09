<template lang="">
  <div class="resumen">
    <EmptyCart v-if="!cart.length" />
    <div v-if="cart.length" class="resumen-table">
      <div class="resumen-item product-heade">
        <span class="item-name">Product</span>
        <div class="product-info">
          <span class="item-name item-qty">Quantity</span>
          <span class="item-name item-price">Price</span>
        </div>
      </div>
      <div class="resumen-item" v-for="item in cart" :key="item.id">
        <span class="item-name">{{ item.name }}</span>
        <div class="product-info">
          <span class="item-qty">{{ item.qty }}</span>
          <span class="item-price">${{ item.price.toFixed(2) }} MXN</span>
        </div>
      </div>
      <div class="resumen-item resumen-general">
        <div class="list">
          <span class="resume-info"
            ><span class="resume-title">Subtotal:</span> ${{
              subtotal.toFixed(2)
            }}
            MXN</span
          >
          <span class="resume-info"
            ><span class="resume-title">TAX (16%):</span> ${{
              iva.toFixed(2)
            }}
            MXN</span
          >
          <span class="resume-info"
            ><span class="resume-title">Total:</span> ${{
              total.toFixed(2)
            }}
            MXN</span
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import EmptyCart from "../components/EmptyCart/EmptyCart.vue";
export default {
  name: "Resumen",
  components: {
    EmptyCart,
  },
  computed: {
    ...mapGetters({
      cart: "getCart",
    }),
    subtotal: function () {
      return this.cart.reduce((sum, item) => sum + item.qty * item.price, 0);
    },
    iva: function () {
      return this.subtotal * 0.16;
    },
    total: function () {
      return this.subtotal + this.iva;
    },
  },
};
</script>
<style scoped>
.resumen {
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
  justify-content: center;
  align-items: center;
}
.resumen-table {
  width: -webkit-fill-available;
  display: flex;
  flex-direction: column;
  padding: 2rem 0;
  background-color: white;
  border-radius: 10px;
}
.resumen-item {
  font-size: 1rem;
  display: flex;
  flex-direction: row;
  padding: 1.5rem 1rem 0.5rem 1rem;
  justify-content: space-between;
  border-bottom: 1px solid #e2e8f0;
}
.resumen-general {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  border-bottom: 0;
}
.list {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.resume-info {
  margin-bottom: 0.5rem;
}
.resume-title {
  font-weight: 600;
}
@media only screen and (min-width: 640px) {
  .resumen-table {
    padding: 2rem 1rem;
  }
}
@media only screen and (min-width: 768px) {
  .resumen-item {
    font-size: 1.25rem;
  }
  .resumen-table {
    padding: 2rem 3rem;
  }
}
.product-heade {
  border-bottom: 0;
  background-color: #f9fafb;
}
.item-name {
  color: #0c4a6e;
  font-weight: 600;
}
.item-qty {
  margin-right: 5rem;
}
</style>
