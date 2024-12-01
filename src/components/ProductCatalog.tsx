// src/components/ProductCatalog.tsx
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
    });

    // Fetch products when component is mounted
    onMounted(() => {
      store.dispatch('fetchProducts'); // Dispatch Vuex action to fetch products
    });

    // Filter products based on search query
    const filteredProducts = computed(() => {
      return store?.state?.products?.filter((product: any) =>
        product.title.toLowerCase().includes(state.searchQuery.toLowerCase())
      );
    });

    // Log when component is rendered
    console.log("ProductCatalog is rendered");

    return {
      state,
      filteredProducts,
    };
  },
  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Search products..."
          onInput={(e: Event) => (this.state.searchQuery = (e.target as HTMLInputElement).value)}
          class="w-full p-2 border rounded-md mb-5"
        />
        <div
          class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {this?.filteredProducts?.map((product: any) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    );
  },
});
