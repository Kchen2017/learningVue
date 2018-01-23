<template>
    <div>
        <router-view name='h' class="h"></router-view>
        <router-view name='b' class="b"></router-view>
        <router-view name='f' class="f"></router-view>
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
div {
    font-size: 30px;
}
.h {
    height: 100px;
    background-color: pink;
}
.b {
    height: 300px;
    background-color: green;
}
.f {
    height: 100px;
    background-color: yellow;
}
</style>
