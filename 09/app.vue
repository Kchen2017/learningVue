<template>
    <div>
        <router-link :to="{name:'my' }">进入我的主页(其实是显示音乐)</router-link>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    data() {
            return {
                text: '哈哈'
            }
        },
        created() {
            console.log(this.$route);
        }

}
</script>
<style>
.router-link-active {
    background-color: red;
}
</style>
