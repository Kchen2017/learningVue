
import Vue from "vue";
import App from "./app.vue";


import MintUi from "mint-ui";

import 'mint-ui/lib/style.css'
Vue.use(MintUi);

new Vue({
	

	el: "#app",
	render: function(creater){
		return creater(App);
	}
})