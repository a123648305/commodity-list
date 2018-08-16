<style lang="less" scoped>
.home{
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: #000;
    .title{
        margin-top: 35px;
        padding:0 127px;
        text-align: center;
        box-sizing: border-box;
        color: #fff;
        span{
            
            letter-spacing: 1px;
            //display:inline-block;
            font-size: 20px;
            float: left;
            &:last-child{
                float: right;
            }
        }
    }
    .active{
        color:#f5a623;
        border-bottom: 3px solid #f5a623;
        
    }
    .contentshow{
        margin-top:96px;
        
    }
}
</style>
       
<template>
    <div class="home">
        <!-- //选项卡 -->
     <div class="title">
         <span :class="{'active':curId === 0}" @click="curId=0">近期</span>
         <span :class="{'active':curId === 1}" @click="curId=1">更多</span>
     </div>

     <!-- //控制显示区域 -->
     <div class="contentshow">
         <div class="content-list" v-show="curId===0">
             <recent></recent>
         </div>
         <div class="content-list" v-show="curId===1">
             <more></more>
             </div>
     </div>
    </div>
</template>
    
    
<script>
import recent from '../projectSchedule/template/recent/recent'
import more from '../projectSchedule/template/more/index'
export default {
   components:{recent,more},
    data() {
        return {
            curId: 0,
        }
    },
    computed: {

    },
    mounted() {

    },
    methods: {

    },
}
</script>