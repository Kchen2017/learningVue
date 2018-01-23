<template>
	<div>
		我是儿子1
		我收到父亲的消息是————————————{{msg}}
		<button @click="show">点我ddd</button>
		<button @click="too">dddddddd</button>
		<button @click="callbaba">儿子</button>
	</div>
</template>

<script>

	export default {
		props: ["msg", "callson"],
		methods :{
			show: function(){
				alert(this.msg);
				alert(this.$props.msg+"dddd");
			},
			too: function(){
				this.callson();
			},
			callbaba: function(){
				this.$parent.$emit("sonmessage", "hi，father！！");
			}
		}
	}
</script>
<style>

</style>