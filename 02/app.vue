<template>
	<div>
		<div v-bind:class = "isIf?'one':'two'"></div>
		<button @click="isIf=!isIf">点我</button>
		<button @click="changeColor(isShow)">你TM再点我</button>
		<div v-bind:class = "{one:isIf,d:isShow}">
			<input type="text" v-model="isShow">

		</div>
	</div>
	
	
</template>
	
<script>
	export default {
		data(){
				return {
					text: "我是人，一个堂堂正正的人，没有人可以打败我！！我是最后的赢家！！",
					html: "<h1>一个堂堂正正的人，没有人可以打败我</h1>",
					isIf: true,
					isShow: "dd"
				}
			},
			methods:{
				changeColor: function(str){
					this.isIf = !this.isIf;
					alert(str);
				}
			}
	}

</script>
	
<style>
	.one {
		background-color: pink;
		width: 200px;
		height: 200px;
	}
	.two {
		background-color: green;
		width: 200px;
		height: 200px;
	}
	.d {
		border: 2px solid red;
	}
</style>