import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

export default defineConfig({
  plugins: [vue(), vueJsx()],
});



// import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'
// import tsConfigPaths from 'vite-tsconfig-paths'

// export default defineConfig({
//   plugins: [vue(), tsConfigPaths()]
// })




// import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [vue()],
// })
