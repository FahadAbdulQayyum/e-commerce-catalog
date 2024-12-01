<template>
  <div id="app">
    <ProductCatalog />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ProductCatalog from './ProductCatalog';

export default defineComponent({
  name: 'App',
  components: {
    ProductCatalog,
  },
});
</script>
