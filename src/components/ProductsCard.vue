<template>
  <div class="col-md-3">
    <div class="card m-3" style="width: 18rem" id="whole-card">
      <img :src="product.imgURL" class="img-fluid" id="product-img" />
      <div class="card-body">
        <router-link
          :to="{ name: 'oneCard', params: { id: product.product_id } }"
        >
          <div id="pro-btn">
            <button class="product-btn">View Product</button>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["product"],
};
</script>
<style>
#product-img {
  width: 18rem;
  height: 18rem;
  border-radius: 5px;
}

#pro-btn {
  display: flex;
  justify-content: center;
}

.product-btn {
  background: transparent;
  border-radius: 5px;
  padding: 5px;
}

.product-btn:hover {
  transform: scale(1.3);
  background-color: rgb(255, 255, 255);
}

.img-fluid:hover {
  transform: scale(1.1);
}

#whole-card {
  background: transparent;
  border: none;
}
</style>
