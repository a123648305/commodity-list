<style lang="less" scoped>
.bottom{
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 79px;
    border-top: 1px solid #f5f5f5;
    background-color: #fff;
    
    .bottom-price{
        padding: 10px;
        border-right: 1px solid #f5f5f5;
        float: left;
        width: 305px;
        .clear{
            width: 90px;
            height: 60px;
            border-color:#ffb555;
            font-size: 17px;
            color: #ffb555;
            border-radius: 2px;
        }
        .total{
            float: right;
            width: 205px;
            height: 60px;
            //padding:42px 112px;
            background-color:#ffb555;
            font-size: 17px;
            color: #fff;
            border-radius: 2px;
            letter-spacing: 1.5px;
        }
    }  
    .send-footer{
        float: right;
        padding-top: 12px;
        padding-bottom: 12px;
        font-size: 17px;
        .el-button{
            padding: 20px;
            color: #ffb555;
            border-color: #ffb555;
            width: 120px;
            letter-spacing: 1.5px;
            &:last-child{
                margin-right: 10px;
                
            }
        }
    }
}

</style>

<template>
   <!-- 底部 -->
    <div class="bottom">
         <div class="bottom-price">
            <el-button class="clear">清空</el-button>
            <el-button class="total">结算￥266</el-button>
        </div>
        
        <div class="send-footer">
            <el-button>配送信息</el-button>
            <el-button>订单备注</el-button>
            <el-button>挂单</el-button>
        </div>
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