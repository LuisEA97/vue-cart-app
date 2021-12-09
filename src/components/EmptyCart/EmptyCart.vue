<template>
  <div class="empty-card">
    <i class="fas fa-cart-plus"></i>
    <span>There's nothing here</span>
  </div>
</template>
<script>
export default {
  name: "EmptyCart",
};
</script>
<style>
.empty-card {
  display: inline-flex;
  flex-direction: column;
  color: #0c4a6e;
  font-weight: 600;
  font-size: 2rem;
}
.empty-card i {
  align-self: center;
  font-size: 10rem;
  margin-bottom: 1rem;
}
</style>
