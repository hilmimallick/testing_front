<template>
    <div class="col-md-3">
    <router-link class="router-text" :to="{ name: 'oneCard', params: { id: product.id } }">
      <div class="card m-3" style="width: 18rem">
        <img v-bind:src="product.imgURL" class="img-fluid" />
        <div class="card-body">
          <p class="card-text-event">{{ product.title }}</p>
          <p class="card-text-event">{{ product.category }}</p>
          <p class="card-text-event">R{{ product.price }}</p>
          <p class="card-text-event">{{ product.description }}</p>
          <p class="card-text-event">{{ product.gender }}</p>
        </div>
      </div>
    </router-link>
  </div>
</template>
<script>
 export default {
        props: ["product"],
    };
</script>
<style>
    
</style>