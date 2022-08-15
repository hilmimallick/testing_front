import { createStore } from 'vuex'

export default createStore({
  state: {
    Products: null,
    Product: null,
  },
  getters: {
  },

  mutations: {
    setProducts: (state, Products) => {
      state.Products = Products;
    },
    setEvent: (state, Product) => {
      state.Product = Product;
    },
  },
  actions: {
    getProducts: async (context) => {
      fetch("http://localhost:9000/products")
        .then((res) => res.json())
        .then((Products) => context.commit("setProducts", Products));
    },
  },

  getProduct: async (context, id) => {
    fetch("http://localhost:9000/products/" + id)
      .then((res) => res.json())
      .then((Product) => context.commit("setProduct", Product));
  },
  deleteProduct: async (context, id) => {
    fetch("http://localhost:9000/products/" + id, {
      method: "DELETE",
    }).then(() => context.dispatch("getProducts"));
  },
  createProduct: async (context, Product) => {
    fetch("http://localhost:9000/products/", {
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
    fetch("http://localhost:9000/products/" + Product.id, {
      method: "PUT",
      body: JSON.stringify(Product),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then(() => context.dispatch("getProducts"));
  },


  modules: {
  }
})
