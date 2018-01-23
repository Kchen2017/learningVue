
import Vue from "vue";
import App from "./app.vue";

import Son2Vue from "./son2.vue";

// Vue.component("Son2Vue", Son2Vue);

// Vue.component("Son3Vue", {
// 	template: "<h1>{{text}}</h1>",
// 	data(){
// 		return {
// 			text: "我是儿子3"
// 		}
// 	}
// });

new Vue({
	el: "#app",
	render: function(creater){
		return creater(App);
	}
})