
import Vue from "vue";
import App from "./app.vue";


import VueRouter from 'vue-router';
Vue.use(VueRouter);

//音乐组件
import Music from './music.vue';
//电影组件
import Movie from './movie.vue';
// import Son from './son.vue';



let router = new VueRouter({
    routes: [
    	// {path: '/', component: Son },

        { name: 'music', path: '/music/:num1/:num2', component: Music },
        { name: 'movie', path: '/movie', component: Movie },
    ]
});




new Vue({
	
	router,
	el: "#app",
	render: function(creater){
		return creater(App);
	}
})