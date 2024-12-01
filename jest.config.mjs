export default {
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom', // Use the correct environment
    moduleFileExtensions: ['js', 'ts', 'vue'],
    transform: {
        '^.+\\.vue$': 'vue3-jest',  // Ensure vue3-jest is used for .vue files
        '^.+\\.ts$': 'ts-jest',      // Use ts-jest for .ts files
    },
    testEnvironment: 'jsdom',       // Use jsdom for browser-like environment
};





// export default {
//     preset: 'ts-jest',
//     testEnvironment: 'jsdom',
//     moduleFileExtensions: ['js', 'ts', 'vue'],
//     transform: {
//         '^.+\\.vue$': '@vue/vue3-jest', // Use Vue 3 transformer
//         '^.+\\.(js|ts)$': 'ts-jest',
//     },
//     moduleNameMapper: {
//         '^@/(.*)$': '<rootDir>/src/$1',
//     },
// };




// // export default {
// //     preset: 'ts-jest',
// //     testEnvironment: 'jsdom',
// //     moduleFileExtensions: ['js', 'ts', 'vue'],
// //     transform: {
// //         '^.+\\.vue$': '@vue/vue3-jest',
// //         '^.+\\.(js|ts)$': 'ts-jest',
// //     },
// //     moduleNameMapper: {
// //         '^@/(.*)$': '<rootDir>/src/$1',
// //     },
// // };




// // // module.exports = {
// // //     preset: 'ts-jest',
// // //     testEnvironment: 'jsdom',
// // //     moduleFileExtensions: ['js', 'ts', 'vue'],
// // //     transform: {
// // //         '^.+\\.vue$': 'vue-jest',
// // //         '^.+\\.(js|ts)$': 'ts-jest',
// // //     },
// // //     moduleNameMapper: {
// // //         '^@/(.*)$': '<rootDir>/src/$1',
// // //     },
// // // };
