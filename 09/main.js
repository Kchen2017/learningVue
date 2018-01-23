
import Vue from "vue";
import App from "./app.vue";



//引入插件
import VueRouter from "vue-router";
//安装插件
Vue.use(VueRouter);

import Myweb from "./myweb.vue";

import Music from "./music.vue";
import Movie from "./movie.vue";
import f from "./404.vue";
//创建路由
let router =new VueRouter({
	routes:[
		{
			name: "my",
			path: "/my",
			component: Myweb,
			children: [
				{name: "music", path: "music", component: Music},
				{name: "movie", path: "movie", component: Movie}
			]
		},
		{
			path: "*",
			component: f
		}
	]
})




new Vue({
	
	router,
	el: "#app",
	render: function(creater){
		return creater(App);
	}
})