import { createRouter, createWebHistory } from 'vue-router';

const Home = () => import("./screens/home.vue");
const Profile = () => import("./screens/profile.vue");
const NotFound = () => import("./screens/notFound.vue");

const routes = [
	{
		path: "/",
		redirect: { name: "home" },
	},
	{
		path: "/home",
		name: "home",
		component: Home,
	},
	{
		path: "/profile",
		name: "profile",
		component: Profile,
	},
	{
		path: "/:pathMatch(.*)*",
		component: NotFound,
	},
];

export default function createClientRouter() {
	return createRouter({
		history: createWebHistory(),
		routes,
	});
}
