import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
export default defineConfig({
    plugins: [vue(), vueJsx()],
    test: {
        globals: true, // Allows to use global functions like `describe`, `it`, `expect` without importing them
        environment: 'jsdom', // Test environment similar to a browser
        include: ['**/*.test.ts', '**/*.test.tsx', '**/*.spec.ts', '**/*.spec.tsx'], // Specify the test files pattern
    },
});
// import { defineConfig } from 'vite';
// import vue from '@vitejs/plugin-vue';
// import vueJsx from '@vitejs/plugin-vue-jsx';
// export default defineConfig({
//   plugins: [vue(), vueJsx()],
// });
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
