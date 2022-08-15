<template>
   <div class="row">
    <ProductsCard
      v-for="product in filteredProducts"
      :key="product.id"
      :product="product"
    />
  </div>
</template>
<script>
import ProductsCard from "../components/ProductsCard.vue";
export default {
  components: { ProductsCard },
  data() {
    return {
      search: "",
      Products: [],
    };
  },

  computed: {
    filteredProducts() {
      return this.$store.state.Products?.filter((product) => {
        return product.Type?.toLowerCase().includes(this.search.toLowerCase());
      });
    },
  },
  mounted() {
    this.$store.dispatch("getProducts");
  },
};
</script>
<style>
    
</style>