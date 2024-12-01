import { defineComponent, reactive, computed, onMounted } from 'vue';
import { useStore } from 'vuex'; // Use Vuex for state management
import ProductCard from './ProductCard'; // Import ProductCard component
export default defineComponent({
    name: 'ProductCatalog',
    components: {
        ProductCard, // Register ProductCard component
    },
    setup() {
        const store = useStore(); // Use Vuex store to manage state
        const state = reactive({
            searchQuery: '',
            sortBy: 'price', // Default sorting by price
            currentPage: 1, // Default to page 1
            itemsPerPage: 8, // Items per page
        });
        // Fetch products when component is mounted
        onMounted(() => {
            store.dispatch('fetchProducts'); // Dispatch Vuex action to fetch products
        });
        // Filter products based on search query
        const filteredProducts = computed(() => {
            const products = store.state.products.filter((product) => product.title.toLowerCase().includes(state.searchQuery.toLowerCase()));
            return sortProducts(products);
        });
        // Sort products by price or rating
        const sortProducts = (products) => {
            if (state.sortBy === 'price') {
                return products.sort((a, b) => a.price - b.price);
            }
            else if (state.sortBy === 'rating') {
                return products.sort((a, b) => b.rating - a.rating);
            }
            return products;
        };
        // Pagination logic
        const totalPages = computed(() => Math.ceil(store.state.products.length / state.itemsPerPage));
        const paginatedProducts = computed(() => {
            const start = (state.currentPage - 1) * state.itemsPerPage;
            const end = start + state.itemsPerPage;
            return filteredProducts.value.slice(start, end);
        });
        // Change page
        const changePage = (page) => {
            if (page >= 1 && page <= totalPages.value) {
                state.currentPage = page;
            }
        };
        // Check if products are loading
        const isLoading = computed(() => store.state.products.length === 0);
        return {
            state,
            filteredProducts,
            isLoading,
            paginatedProducts,
            totalPages,
            changePage,
        };
    },
    render() {
        return (<div>
        {/* Loading State */}
        {this.isLoading ? (<div className="loader mx-auto my-10"></div>) : (<>
            {/* Search Bar */}
            <input type="text" placeholder="Search products..." onInput={(e) => (this.state.searchQuery = e.target.value)} className="w-full p-2 border rounded-md mb-5 input"/>

            {/* Sort Options */}
            <select onChange={(e) => {
                    this.state.sortBy = e.target.value;
                }} className="mb-4 p-2 border rounded-md sort">
              <option value="price">Sort by Price</option>
              <option value="rating">Sort by Rating</option>
            </select>

            {/* Product Cards */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {this.paginatedProducts.map((product) => (<ProductCard key={product.id} product={product}/>))}
            </div>

            {/* Pagination */}
            <div className="pagination mt-5">
              <button onClick={() => this.changePage(this.state.currentPage - 1)} disabled={this.state.currentPage === 1}>
                Prev
              </button>
              <span>{this.state.currentPage} / {this.totalPages}</span>
              <button onClick={() => this.changePage(this.state.currentPage + 1)} disabled={this.state.currentPage === this.totalPages}>
                Next
              </button>
            </div>
          </>)}
      </div>);
    },
});
