<template>
  <div class="navbar">
    <router-link to="/" exact class="element" active-class="active"
      >Crear artículo</router-link
    >
    <div class="cart-items">
      <router-link
        to="/shopping-cart"
        exact
        class="element"
        active-class="active"
        >Ver carrito</router-link
      >
      <router-link to="/resumen" exact class="element" active-class="active"
        >Resumen</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #0c4a6e;
  width: -webkit-fill-available;
  height: 80px;
  padding: 0 3rem;
}
.element {
  text-decoration: none;
  color: white;
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
}

.active {
  border-bottom: 2px solid #d97706;
}
.element:hover {
  background-color: #075985;
}
.cart-items {
  display: inline-flex;
}
</style>
