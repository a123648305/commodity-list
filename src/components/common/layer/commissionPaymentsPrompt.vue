<style lang="less" scoped>
 .tip{
    position: absolute; 
    left:74px;
    right:74px;
    margin-top:50%;
    text-align:center;
    background-color: #666;//fff
    border-radius: 10px;
    padding-top: 25px;
    .tip-title{
        font-size: 30.21px;
        color: #333;
        font-weight: bold;
    }
   .tip-content{
     //height: 200px;
     padding: 68px 0;
     font-size: 27.19px;
     color: #888;
     text-align: center;
     color: #404040;
     ul li{
            margin-top: 12px;
            &:first-child{
                margin-top: 0;
            }
        }
    }
    .tip-line{
        border:1.2px solid #dcdcdc;
        display:block;
        
    }
    .tip-footer{
        color:#242133;
        font-size: 27.19px;
        .ok{
            width:100%;
            height: 80px;
            border: none;
            background-color: transparent;
            
            
        }
    }
}
</style>
<template>
     <!-- 消费佣金支出说明 -->
    <div class="tip">
        <span class="tip-title">提示</span>
       <div class="tip-content">
           <ul>
               <li><span>其他商家的星球粉丝在你这消费,每单</span></li>
               <li><span>你要按百分比结算给其他商家</span></li>
           </ul>
        </div>
            <span class="tip-line"></span>
         <div class="tip-footer"><button class="ok">我知道啦</button></div>  
    </div> 


</template>

<script>
export default {
    data() {
        return {

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
