<template>
  <form @submit="createProduct" class="form">
    <h1 class="title">Agregar artículo al carrito</h1>
    <div class="fields-holder">
      <div class="product-name">
        <Input
          v-model="article.name"
          type="text"
          name="name"
          label="Producto:"
          placeholder="Nombre del producto"
        />
      </div>
      <div class="price-qty">
        <div class="input">
          <Input
            name="cantidad"
            v-model="article.qty"
            type="number"
            label="Cantidad:"
            placeholder="Cantidad"
          />
        </div>
        <div class="input">
          <Input
            name="precio"
            v-model="article.price"
            type="number"
            label="Precio:"
            placeholder="Precio"
          />
        </div>
      </div>
    </div>
    <div class="submit-holder">
      <button :disabled="disableSubmit" type="submit" class="submit">
        <span>Agregar al carrito</span>
      </button>
    </div>
  </form>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Input from "../Input/Input.vue";
// @ is an alias to /src
export default {
  name: "CreateItem",
  components: {
    Input,
  },
  data() {
    return {
      article: {
        name: "",
        price: "",
        qty: "",
      },
      disabled: true,
    };
  },
  methods: {
    ...mapActions({
      add: "addToCart",
    }),
    createProduct(e) {
      e.preventDefault();
      this.article.id = this.cart.length + 1;
      this.add(this.article);
      this.article = {
        name: "",
        price: "",
        qty: "",
      };
    },
  },
  computed: {
    ...mapGetters({
      cart: "getCart",
    }),
    disableSubmit() {
      const fields = Object.keys(this.article);
      if (fields.some((field) => !this.article[field])) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style scoped>
.form {
  margin: 1rem;
  display: flex;
  width: -webkit-fill-available;
  border-radius: 10px;
  padding: 2rem;
  text-align: left;
  flex-direction: column;
  background-color: white;
  box-shadow: 2px 2px 24px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 2px 2px 24px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 2px 2px 24px rgba(0, 0, 0, 0.2);
}
.fields-holder {
  display: flex;
  flex-direction: column;
}
.price-qty {
  display: flex;
  flex-direction: column;
}
.submit-holder {
  display: flex;
  flex-direction: row-reverse;
}
.submit {
  display: inline-flex;
  background-color: #1e40af;
  color: white;
  padding: 0.5rem 1rem;
  font-weight: 500;
  font-size: 1.12rem;
  border-radius: 7px;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}
.submit:hover {
  background-color: #1e3a8a;
  box-shadow: 2px 2px 24px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 2px 2px 24px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 2px 2px 24px rgba(0, 0, 0, 0.1);
}
.submit:disabled {
  opacity: 50%;
}
.submit:disabled:hover {
  background-color: #1e40af;
  color: white;
}
.submit:active {
  user-select: none;
}

@media only screen and (min-width: 768px) {
  .form {
    padding: 2rem 3rem;
  }
  .price-qty {
    flex-direction: row;
    justify-content: space-between;
  }
}
@media only screen and (min-width: 1024px) {
  .fields-holder {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .product-name {
    width: 33%;
  }
  .price-qty {
    width: 66%;
  }
  .price-qty .input {
    width: 49%;
  }
}
</style>
