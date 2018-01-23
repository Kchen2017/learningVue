<template>
	<div>
		<!-- <a href="#/">儿子1</a>
		<a href="#/movie">电影</a>
		<a href="#/music">音乐</a> -->
		<!-- <router-link to="/">儿子</router-link> -->
		<!-- <router-link :to="/movie">电影</router-link>
		<router-link :to="{name: 'music'}">音乐</router-link> -->
		<!-- <router-link to="/movie?id=1&name=2">我的电影详情1</router-link>
        <router-link to="/music/3/4">我的音乐详情1</router-link> -->

        <router-link :to="{name:'movie',query:{id:1,name:'2'} }">我的电影详情1</router-link>
        <router-link :to="{name:'music',params:{num1:3,num2:'4'} }">我的音乐详情1</router-link>

		<router-view></router-view>
	</div>
	
	
</template>
	
<script>

	export default {
		data(){
				return {
					
				}
			},
			 created() {
		        console.log(this.$route.query);
		    }
	}

</script>
	
<style>
	.router-link-active {
	    background-color: red;
	}
	
</style>