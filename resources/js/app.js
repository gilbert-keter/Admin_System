import './bootstrap'
import '../css/app.css'
import { createApp } from 'vue'
import App from './App.vue'


const appElement = document.getElementById('app');
const currentPage = appElement.dataset.page;

const app = createApp({
    data() {
        return {
            currentPage: currentPage
        };
    }
});

createApp(App).mount('#app')