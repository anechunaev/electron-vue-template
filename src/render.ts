import { createApp } from 'vue';
import createAppRouter from './render/router';
import Root from './render/root.vue';

const router = createAppRouter();

createApp(Root)
	.use(router)
	.mount('#app');
