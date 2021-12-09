<template>
  <div class="item-card">
    <button class="close" @click="deleteFromCart">
      <i class="fas fa-times"></i>
    </button>
    <div class="card-title">
      <span v-if="!editMode" class="title"
        >{{ item.name }}
        <button @click="editar" class="edit-button edit-on-sm">
          <span>Edit</span>
        </button>
      </span>
      <div v-if="editMode" class="input-title">
        <label for="name">Name:</label>
        <input type="text" name="name" id="name" v-model="editObject.name" />
      </div>
      <div class="price-holder">
        <span v-if="!editMode" class="price"
          >${{ `${item.price.toFixed(2)} MXN` }}</span
        >
        <button
          v-if="!editMode"
          @click="editar"
          class="edit-button edit-on-mobile"
        >
          <span>Edit</span>
        </button>
      </div>
      <div v-if="editMode" class="input-title">
        <label for="price">Price:</label>
        <input
          class="input-price"
          type="number"
          step="0.5"
          name="price"
          id="price"
          v-model="editObject.price"
        />
        <span>MXN</span>
      </div>
    </div>
    <div v-if="editMode" class="action-buttons">
      <button @click="editInfo" class="button save">
        <span>Save</span>
      </button>
      <button @click="cancelEdit" class="button cancel">
        <span>Cancel</span>
      </button>
    </div>
    <div v-if="!editMode" class="card-details">
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
          name: "Product name here",
          price: 0,
          currency: "...",
          qty: 0,
        };
      },
    },
  },
  data() {
    return {
      editMode: false,
      editObject: { ...this.item },
    };
  },
  methods: {
    ...mapActions({
      edit: "editItem",
      deleteItem: "removeItem",
    }),
    editar: function () {
      this.editMode = true;
      this.editObject = { ...this.item };
    },
    editInfo: function () {
      const payload = {
        id: this.item.id,
        data: this.editObject,
      };
      this.edit(payload);
      this.editMode = false;
      this.editObject = { ...this.item };
    },
    cancelEdit: function () {
      this.editObject = { ...this.item };
      this.editMode = false;
    },
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
    deleteFromCart: function () {
      this.deleteItem(this.item.id);
    },
  },
};
</script>

<style scoped>
.item-card {
  position: relative;
  background-color: #f6faff;
  border-bottom: solid 1px #9ca3af;
  display: flex;
  width: -webkit-fill-available;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}
.input-title {
  display: inline-flex;
  flex-direction: row;
}
.input-title span {
  font-weight: 600;
}
input {
  width: 8rem;
  align-self: center;
  background-color: transparent;
  outline: 0;
  border: 0;
  border-bottom: 3px solid #0c4a6e;
  font-size: 1.12rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}
input:focus {
  border-bottom: 3px solid #d97706;
}

label {
  align-self: center;
  margin-right: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
}
.input-price {
  width: 6rem;
}
.price-holder {
  display: flex;
  flex-direction: row;
}
.edit-on-sm {
  display: none;
}
.edit-on-mobile {
  display: inline-block;
}
.edit-button {
  font-size: 0.9rem;
  align-self: center;
  margin-left: 1rem;
  border-radius: 9999px;
  background-color: #e0f2fe;
  font-weight: 600;
  color: #0c4a6e;
  padding: 0.2rem 1rem;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}
.edit-button:hover {
  background-color: #0c4a6e;
  color: white;
}
.button {
  display: inline-flex;
  padding: 0.125rem 1rem;
  border-radius: 9999px;
  font-weight: 500;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}
@media only screen and (min-width: 640px) {
  input {
    width: 15rem;
  }
  .edit-on-sm {
    display: inline-block;
  }
  .edit-on-mobile {
    display: none;
  }
}
.save {
  background-color: #065f46;
  color: white;
}
.save:hover {
  background-color: #064e3b;
}
.cancel {
  margin-top: 0.2rem;
  background-color: #b91c1c;
  color: white;
}
.cancel:hover {
  background-color: #991b1b;
}
.close {
  position: absolute;
  top: 5px;
  right: 3px;
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
  display: inline-flex;
}
.price {
  font-size: 1rem;
  font-weight: 600;
  margin-top: 0.2rem;
  color: #1d4ed8;
}
.card-details,
.action-buttons {
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
}
.qty-info {
  color: #6b7280;
  font-weight: 600;
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
  opacity: 40%;
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
