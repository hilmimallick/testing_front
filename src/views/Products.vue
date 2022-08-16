<template>
  <div class="product-body">
    <div class="row">
      <ProductsCard
        v-for="product in products"
        :key="product.id"
        :product="product"
      ></ProductsCard>
    </div>
  </div>
</template>
<script>
import ProductsCard from "../components/ProductsCard.vue";
export default {
  components: { ProductsCard },
  data() {
    return {
      search: "",
      products: [],
    };
  },

  computed: {
    filteredProducts() {
      return this.$store.state.products?.filter((product) => {
        return product.Type?.toLowerCase().includes(this.search.toLowerCase());
      });
    },
    products() {
      return this.$store.state.products;
    },
  },
  mounted() {
    this.$store.dispatch("getproducts");
  },
};
</script>
<style>
.product-body {
  background: linear-gradient(to right, #1a2980, #26d0ce);
  padding-top: 4em;
}
</style>
