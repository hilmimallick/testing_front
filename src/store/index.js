import { createStore } from "vuex";

export default createStore({
  state: {
    products: null,
    product: null,
  },
  getters: {},

  mutations: {
    setproducts: (state, products) => {
      state.products = products;
    },
    setproduct: (state, product) => {
      state.product = product;
    },
  },
  actions: {
    getproducts: async (context) => {
      fetch("https://bg-footwear.herokuapp.com/products")
        .then((res) => res.json())
        .then((products) => context.commit("setproducts", products));
    },
  },
  getproduct: async (context, id) => {
    fetch("https://bg-footwear.herokuapp.com/products/" + id)
      .then((res) => res.json())
      .then((product) => context.commit("setproduct", product));
    console.log(res);
  },
  deleteProduct: async (context, id) => {
    fetch("https://node-pair.herokuapp.com/products/" + id, {
      method: "DELETE",
    }).then(() => context.dispatch("getProducts"));
  },
  createProduct: async (context, Product) => {
    fetch("https://node-pair.herokuapp.com/products/", {
      method: "POST",
      body: JSON.stringify(Product),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then(() => context.dispatch("getProducts"));
  },
  updateProduct: async (context, Product) => {
    fetch("https://node-pair.herokuapp.com/products/" + Product.id, {
      method: "PUT",
      body: JSON.stringify(Product),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then(() => context.dispatch("getProducts"));
  },

  modules: {},
});
