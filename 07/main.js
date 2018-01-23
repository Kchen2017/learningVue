
import Vue from "vue";
import App from "./app.vue";


//第一步：引入vue-router的包
import VueRouter from "vue-router";
//使用Vue.use  路由
Vue.use(VueRouter);

//引入子组件
import Son from "./son.vue";
import Music from "./Music.vue";
import Movie from "./movie.vue";

//设置路由路径
let router = new VueRouter({
	routes: [
		{path: "/", component: Son},
		{path: "/music", component: Movie},
		{path: "/movie", component: Music}
	]
});


new Vue({
	//加入属性
	router,
	el: "#app",
	render: function(creater){
		return creater(App);
	}
})