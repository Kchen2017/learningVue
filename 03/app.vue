<template>
	<div>
		<ul>
			<li v-for="(item,index) in heros" v-bind:key="index" :class="{'a':'a', 'b':'b', 'c':'c'}[item.flag]">
				{{item.name}}_______{{item.nick}}
			</li>

		</ul>

		<ul>
            <li v-for="(value,key,index) in person" v-bind:key="index">
                value:{{value}} key:{{key}} index:{{index}}
            </li>
        </ul>

        <div v-if="type === 'a'" class="a">
			大姨
        </div>
        <div v-else-if="type === 'b'" class="b">
			大爷
        </div>
		<input type="text" v-model="type">

	</div>
	
	
</template>
	
<script>
	export default {
		data(){
				return {
					type: "",
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