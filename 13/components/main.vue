<template>
    <div>
      	<!-- <router-link :to="{name = 'forever'}">我心有恒</router-link> -->
      	<!-- <router-link :to="{name = 'whatever'}">咋了吧吧</router-link> -->
      	<router-view name="header"></router-view>
        <router-view ></router-view>
        <router-view name="footer"></router-view>
    </div>
</template>
<script>

export default {
    data() {
            return {
               
            }
        }

}
</script>
<style>

</style>
