<template>
	<div>
		<input type="text" v-model="test">
		<br>
		{{test}}

		<input type="text" v-model="n1">
		<input type="text" v-model="n2">

		{{sum.num}}_________{{sum.name}}
	</div>
	
	
</template>
	
<script>
	
export default {
    data() {
        return {
            test: '',
            n1: "",
            n2: ""
        }
    }, watch: {
        test: function(newV, oldV) {
            //在此处省略很多事 -> 和双向数据绑定只能更新值，得到了区别
            console.log(newV, oldV);
        }
    },computed: {
    	sum(){
    		return {
    			num: this.n1+this.n2,
    			name: "jack"
    		}
    	}
    }
}
</script>
	
<style>
	
	
</style>