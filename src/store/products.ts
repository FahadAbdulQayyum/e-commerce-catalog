import { createStore } from 'vuex';

export default createStore({
  state: {
    products: [],
    searchQuery: '',
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
    setSearchQuery(state, query) {
      state.searchQuery = query;
    },
  },
  actions: {
    async fetchProducts({ commit }) {
      // Simulate an API call
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      commit('setProducts', data);
    },
  },
  getters: {
    products: (state) => state.products,
    searchQuery: (state) => state.searchQuery,
  },
});
