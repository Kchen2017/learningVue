
import Vue from "vue";
import App from "./app.vue";

import VueRouter from "vue-router";
Vue.use(VueRouter);

import Main from "./components/main.vue";
import Music from "./components/music.vue";
import Movie from "./components/movie.vue";

let router = new VueRouter({
	routes: [
		{
			name: "main", 
			path: "/main", 
			component: Main,
			children: [
				{path: "music", component: Music},
				{path: "movie", component: Movie}
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