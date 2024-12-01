
<template>
  <div id="app">
    <button @click="toggleDarkMode" id="btn">
      Toggle Dark Mode
    </button>
    <ProductCatalog />
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, onMounted } from 'vue';
import ProductCatalog from './ProductCatalog';

export default defineComponent({
  name: 'App',
  components: {
    ProductCatalog,
  },
  setup() {
    const darkMode = ref(false);

    const toggleDarkMode = () => {
      darkMode.value = !darkMode.value;
      if (darkMode.value) {
        document.body.classList.add('dark');
      } else {
        document.body.classList.remove('dark');
      }
    };

    // Ensure dark mode is applied on initial load if needed
    onMounted(() => {
      if (darkMode.value) {
        document.body.classList.add('dark');
      }
    });

    return {
      toggleDarkMode,
    };
  },
});
</script>

<style>
/* Example dark mode styles */
body.dark {
  background-color: #121212;
  color: #ffffff;
}
</style>
