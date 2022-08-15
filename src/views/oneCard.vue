<template>
     <div class="onecard">
    <div v-if="product">
      <div class="d-flex justify-content-center">
        <div class="card" style="width: 30rem">
          <img v-bind:src="product.imgURL" class="img-fluid" style="width: 30rem"  />
          <div class="card-body">
            <p class="card-text">{{ product.title }}</p>
            <p class="card-text">{{ product.category }}</p>
            <p class="card-text">R{{ product.price }}</p>
            <p class="card-text">{{ product.description }}</p>
            <p class="card-text">{{ product.gender}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["id"],
  data() {
    return {
      product: null,
    };
  },
  mounted() {
    fetch("http://localhost:9000/products/" + this.id)
      .then((res) => res.json())
      .then((data) => (this.product = data));
  },
};
</script>
<style>
    
</style>