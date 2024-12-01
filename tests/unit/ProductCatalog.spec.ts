import { mount } from '@vue/test-utils';
import ProductCatalog from '@/components/ProductCatalog';
import { createStore } from 'vuex';

describe('ProductCatalog.vue', () => {
  it('renders products and supports pagination', async () => {
    const store = createStore({
      state: {
        products: Array(20).fill({ title: 'Test Product', price: 10, rating: 5 }),
      },
      actions: {
        fetchProducts: jest.fn(),
      },
    });

    const wrapper = mount(ProductCatalog, {
      global: {
        plugins: [store],
      },
    });

    await wrapper.vm.$nextTick();
    expect(wrapper.findAll('.product-card').length).toBe(8); // Check first page
    await wrapper.find('button').trigger('click'); // Simulate pagination click
    expect(wrapper.findAll('.product-card').length).toBe(8); // Check next page
  });
});






// import { mount } from '@vue/test-utils';
// import ProductCatalog from '@/components/ProductCatalog.vue';
// import { createStore } from 'vuex';

// describe('ProductCatalog.vue', () => {
//   it('renders products and supports pagination', async () => {
//     const store = createStore({
//       state: {
//         products: Array(20).fill({ title: 'Test Product', price: 10, rating: 5 }),
//       },
//       actions: {
//         fetchProducts: jest.fn(),
//       },
//     });

//     const wrapper = mount(ProductCatalog, {
//       global: {
//         plugins: [store],
//       },
//     });

//     await wrapper.vm.$nextTick();
//     expect(wrapper.findAll('.product-card').length).toBe(8); // Check first page
//     await wrapper.find('button').trigger('click'); // Simulate pagination click
//     expect(wrapper.findAll('.product-card').length).toBe(8); // Check next page
//   });
// });






// // import { mount } from '@vue/test-utils';
// // import ProductCatalog from '@/components/ProductCatalog.vue';
// // import { createStore } from 'vuex';
// // import { createApp } from 'vue';

// // describe('ProductCatalog.vue', () => {
// //   it('renders products and supports pagination', async () => {
// //     const store = createStore({
// //       state: {
// //         products: Array(20).fill({ title: 'Test Product', price: 10, rating: 5 }),
// //       },
// //       actions: {
// //         fetchProducts: jest.fn(),
// //       },
// //     });

// //     const wrapper = mount(ProductCatalog, {
// //       global: {
// //         plugins: [store],
// //       },
// //     });

// //     await wrapper.vm.$nextTick();
// //     expect(wrapper.findAll('.product-card').length).toBe(8); // Check first page
// //     await wrapper.find('button').trigger('click'); // Simulate pagination click
// //     expect(wrapper.findAll('.product-card').length).toBe(8); // Check next page
// //   });
// // });