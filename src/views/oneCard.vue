<template>
  <div class="onecard">
    <div v-if="product">
      <div
        v-for="item in product"
        :key="item.product_id"
        class="d-flex justify-content-center"
      >
        <div class="col-md-6" id="one-img">
          <img v-bind:src="item.imgURL" class="img-fluid" id="one-pic" />
        </div>

        <div id="one-text">
          <div class="col-md-6">
            <p class="card-text">{{ item.title }}</p>
            <p class="card-text">{{ item.category }}</p>
            <p class="card-text">R{{ item.price }}</p>
            <p class="card-text">{{ item.description }}</p>
            <p class="card-text">{{ item.gender }}</p>
          </div>
        </div>
        <!-- <div class="card" style="width: 30rem">
          <img
            v-bind:src="item.imgURL"
            class="img-fluid"
            style="width: 30rem"
          />
          <div class="card-body">
            <p class="card-text">{{ item.title }}</p>
            <p class="card-text">{{ item.category }}</p>
            <p class="card-text">R{{ item.price }}</p>
            <p class="card-text">{{ item.description }}</p>
            <p class="card-text">{{ item.gender }}</p>
          </div>
        </div> -->
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
    fetch("https://bg-footwear.herokuapp.com/products/" + this.$route.params.id)
      .then((res) => res.json())
      .then((data) => {
        this.product = data;
        console.log(product);
      });
  },
  // computed: {
  //   product() {
  //     return this.$store.state.product;
  //   },
  // },
};
</script>
<style>
.onecard {
  padding-top: 8em;
  background: linear-gradient(to right, #1a2980, #26d0ce);
  height: 100vh;
}

#one-img {
  padding-left: 10em;
}

#one-text {
  font-size: 1.2em;
  display: flex;
  justify-content: center;
  align-items: center;
}

#one-pic {
  height: 30em;
  width: 30em;
  border-radius: 5px;
  box-shadow: 10px 25px 25px 10px rgba(25, 25, 25, 0.6);
}
</style>
