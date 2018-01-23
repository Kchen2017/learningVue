<template>
    <div>
       我来组成头部
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

</style>