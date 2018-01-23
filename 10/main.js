
import Vue from "vue";
import App from "./app.vue";



//引入插件
import VueRouter from "vue-router";
//安装插件
Vue.use(VueRouter);

import Body from "./body.vue";

import Footer from "./footer.vue";
import Header from "./header.vue";

//创建路由
let router = new VueRouter({
	routes:[
		{
			name: "my",
			path: "/",
			components: {
				h: Header,
				b: Body,
				f: Footer
			}
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