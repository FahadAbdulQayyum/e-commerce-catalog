import { createStore } from 'vuex';
const store = createStore({
    state() {
        return {
            products: [], // Store the products array
            searchQuery: '',
        };
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
            const response = await fetch('https://fakestoreapi.com/products');
            const products = await response.json();
            commit('setProducts', products);
        },
    },
});
export default store;
