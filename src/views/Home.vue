<template>
  <div class="home">
    <CreateItem />
    <div v-if="cart.length" class="notify">
      <i class="fas fa-info-circle"></i>
      <span>{{ cart.length }} items in your cart</span>
      <router-link to="/shopping-cart" exact class="link" active-class="active"
        >View cart</router-link
      >
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CreateItem from "../components/CreateItem/CreateItem.vue";
// @ is an alias to /src

export default {
  name: "Home",
  components: {
    CreateItem,
  },
  computed: {
    ...mapGetters({
      cart: "getCart",
    }),
  },
};
</script>

<style scoped>
.notify {
  background-color: #eef2ff;
  color: #312e81;
  padding: 0.5rem 1.5rem;
  font-weight: 600;
  border-radius: 5px;
  -webkit-box-shadow: 0px 2px 8px 0px rgba(50, 50, 50, 0.3);
  -moz-box-shadow: 0px 2px 8px 0px rgba(50, 50, 50, 0.3);
  box-shadow: 0px 2px 8px 0px rgba(50, 50, 50, 0.3);
}
.notify > i {
  margin-right: 0.5rem;
}
.link {
  margin-left: 0.5rem;
  text-decoration: none;
  color: #312e81;
  border-bottom: 2px solid #312e81;
}
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow-y: auto;
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
