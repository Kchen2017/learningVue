<template>
	<div>
		<router-link :to="{name: 'music'}">我的音乐</router-link>
		<router-link :to="{name: 'movie'}">我的电影</router-link>
		<router-view></router-view>
		<div>
			<img src="./1.jpg" alt="">
		</div>
	</div>
</template>

<script>
	export default {
		created() {
		        console.log(this.$route.params);
		    }
	}

</script>
<style>

</style>