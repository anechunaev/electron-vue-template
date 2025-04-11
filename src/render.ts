import { createApp } from 'vue';
import createAppRouter from './client/router';
import Root from './client/root.vue';

const router = createAppRouter();

createApp(Root)
	.use(router)
	.mount('#app');
