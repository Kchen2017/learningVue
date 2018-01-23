<template>
    <div>
       <!--  <mt-header title="标题过长会隐藏后面的内容啊哈哈哈哈">
          <router-link to="/" >
            <mt-button icon="back">返回</mt-button>
          </router-link>
          <mt-button icon="more" ></mt-button>
        </mt-header>
        <button @click="show">dianjiiiiii</button> -->

            <mt-swipe :auto="4000">
              <mt-swipe-item>1</mt-swipe-item>
              <mt-swipe-item>2</mt-swipe-item>
              <mt-swipe-item>3</mt-swipe-item>
            </mt-swipe>

        
    </div>
</template>
<script>
import { Indicator } from 'mint-ui';
import { Swipe, SwipeItem } from 'mint-ui';
export default {
    data() {
            return {
               
            }
        },methods:{
            show(){
                Indicator.open({
                  text: '加载中...',
                  spinnerType: 'fading-circle'
                });

                setTimeout(function(){
                    Indicator.close();
                },2000);
            }
        }

}
</script>
<style>

</style>
