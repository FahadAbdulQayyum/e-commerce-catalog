import { createApp } from 'vue';
import App from './App.vue';
import './style.css'; // Import your Tailwind CSS
import store from './store'; // Import the Vuex store
const app = createApp(App);
app.use(store); // Use the store in your app
app.mount('#app');
