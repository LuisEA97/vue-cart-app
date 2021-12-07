<template>
  <div class="item-card">
    <div class="card-title">
      <span class="title">{{ item.name }}</span>
      <span class="price">${{ `${item.price.toFixed(2)} MXN` }}</span>
    </div>
    <div class="card-details">
      <div class="qty">
        <button
          @click="decreaseQty"
          :disabled="item.qty === 1"
          class="qty-button"
        >
          <i class="fas fa-minus"></i>
        </button>
        <span class="qty-info">{{ item.qty }}</span>
        <button
          @click="increaseQty"
          :disabled="item.qty === item.stock"
          class="qty-button"
        >
          <i class="fas fa-plus"></i>
        </button>
      </div>
      <div class="stock">
        <span class="stock-qty"
          >{{ item.qty }} X ${{ `${item.price.toFixed(2)} MXN` }}</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "CardItem",
  props: {
    item: {
      type: Object,
      default: function () {
        return {
          name: "Agrega un producto",
          price: 0,
          currency: "-",
          qty: 0,
        };
      },
    },
  },
  methods: {
    ...mapActions({
      edit: "editItem",
    }),
    increaseQty: function () {
      const payload = {
        id: this.item.id,
        data: {
          ...this.item,
          qty: this.item.qty + 1,
        },
      };
      this.edit(payload);
    },
    decreaseQty: function () {
      const payload = {
        id: this.item.id,
        data: {
          ...this.item,
          qty: this.item.qty - 1,
        },
      };
      this.edit(payload);
    },
  },
};
</script>

<style scoped>
.item-card {
  border-bottom: solid 1px #9ca3af;
  display: flex;
  width: -webkit-fill-available;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}
.item-card:hover {
  background-color: #f3f4f6;
}
.card-title {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: start;
}
.title {
  font-size: 2rem;
  color: #1f2937;
  font-weight: 600;
}
.price {
  font-size: 1rem;
  font-weight: 600;
  margin-top: 0.2rem;
  color: #1d4ed8;
}
.card-details {
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
}
.qty-info {
  color: #6b7280;
}
.qty-button {
  display: inline-flex;
  width: 25px;
  height: 25px;
  margin: 0 10px;
  background-color: #ddd6fe;
  color: #312e81;
  border-radius: 9999px;
  font-size: 0.875rem;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.qty-button:hover {
  background-color: #312e81;
  color: white;
}
.qty-button:disabled {
  opacity: 50%;
  cursor: not-allowed;
}
.qty-button:disabled:hover {
  background-color: #ddd6fe;
  color: #312e81;
}
.qty-button > i {
  padding: 0;
  margin: 0;
  align-self: center;
}
.stock {
  border-radius: 5px;
  padding: 0.25rem 1rem;
  margin-top: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  background-color: #dbeafe;
  color: #1e3a8a;
}
.stock-qty {
  margin-left: 0.5rem;
  font-weight: 600;
}
</style>
