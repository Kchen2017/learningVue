<template>
	<div>
		{{text}}
		<br>
		<span v-text="text"></span>
		<span v-html="html"></span>
		<div class="vif" v-if="isIf"></div>
		<div class="vshow" v-show="isShow"></div>
		<input type="text" v-model="text" name="">
		<button @click="changeColor">点我</button>
	</div>
	

</template>
	
<script>
	export default {
		data(){
				return {
					text: "我是人，一个堂堂正正的人，没有人可以打败我！！我是最后的赢家！！",
					html: "<h1>一个堂堂正正的人，没有人可以打败我</h1>",
					isIf: true,
					isShow: true
				}
			},
			methods:{
				changeColor: function(){
					this.isIf = !this.isIf;
				}
			}
	}

</script>
	
<style>
	.vif {
		background-color: pink;
		width: 200px;
		height: 200px;
	}
	.vshow {
		background-color: green;
		width: 200px;
		height: 200px;
	}

</style>