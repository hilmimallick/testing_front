import { createStore } from "vuex";

export default createStore({
  state: {
    users: null,
    token: null,
    products: null,
    product: null,
  },
  getters: {},

  mutations: {
    setToken: (state, token) => {
      state.token = token;
    },
    setusers: (state, users) => {
      state.users = users;
    },
    setproducts: (state, products) => {
      state.products = products;
    },
    setproduct: (state, product) => {
      state.product = product;
    },
  },
  actions: {
    logout: async (context) => {
      context.commit("setusers", null);
      window.location = "/login";
    },
    login: async (context, data) => {
      const { email, password } = data;
      const response = await fetch(
        `https://bg-footwear.herokuapp.com/users/login`,
        {
          method: "POST",
          body: JSON.stringify({
            email: data.email,
            password: data.email,
          }),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          context.commit("setToken", data);
        });

      const usersData = await response.json();
      console.log(usersData);
      context.commit("setusers", usersData[0]);
      router.push({
        name: "",
      });
    },
    register: async (context, data) => {
      const { FullName, email, password } = data;
      fetch("https://bg-footwear.herokuapp.com/users", {
        method: "POST",
        body: JSON.stringify({
          FullName: FullName,
          email: email,
          password: password,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => context.commit("setusers", json));
    },

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
