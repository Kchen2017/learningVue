<template>
	<div>
		<input type="text" v-model="msg">
		<span>{{msg | filedata}}</span>
	</div>
	
	
</template>
	
<script>
	import son from "./son.vue";

	export default {
		data(){
				return {
					msg: ""
				}
			},
			filters: {
				filedata: function(value){
					return value.split("").reverse().join("");
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

	.a {
		background-color: green;
	}
	.b {
		background-color: pink;
	}
	.c {
		background-color: blue;
	}
	
</style>