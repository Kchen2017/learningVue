<template>
	<div>
		<son :msg="type" :callson="call"></son>
		<son2-vue></son2-vue>
		<!-- <son3-vue></son3-vue> -->

		<button @click="getson">父亲</button>
	</div>
	
	
</template>
	
<script>
	import son from "./son.vue";

	export default {
		data(){
				return {
					type: "hello",
					heros: [{
						name: "关羽",
						nick: "云长",
						flag: "a"
					},{
						name: "张飞",
						nick: "翼德",
						flag: "b"
					},{
						name: "张云",
						nick: "子龙",
						flag: "c"
					}],
					person: {
						name: "Kchen",
						age: 28
					}
				}
			},
			methods: {
				call: function(){
					alert("fuhi")
				},
				getson: function(){
					this.$on("sonmessage", function(sonmessage){
						alert("收到了"+sonmessage);
					});
				}
			},
			components: {
				son: son
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