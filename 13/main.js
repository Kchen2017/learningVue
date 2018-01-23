
import Vue from "vue";
import App from "./app.vue";

import VueRouter from "vue-router";
Vue.use(VueRouter);

import Main from "./components/main.vue";

import Header from "./components/header.vue";
import Body from "./components/body.vue";
import Footer from "./components/footer.vue";

let router = new VueRouter({
	routes: [
		{
			name: "main", 
			path: "/main", 
			component: Main,
			children: [
				{
					// name: "forever",
					path: "forever",
					components: {
						header: Header,
						default: Body,
						footer: Footer
					}
				},
				{
					// name: "whatever",
					path: "whatever",
					components: {
						header: Header,
						default: Body,
						footer: Footer
					}
				}
			]
		}
	]
});

new Vue({
	router,
	el: "#app",
	render: function(creater){
		return creater(App);
	}
});