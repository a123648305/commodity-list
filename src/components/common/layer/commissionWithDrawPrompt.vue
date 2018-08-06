<style lang="less" scoped>
.masking{ 
    background-color: rgba(0,0,0,0.5);
    width: 100%;
    height: 100%;
    position: absolute;
    .tip{
        position: absolute;  
        left:43px;
        right:43px;
        text-align:center;
        background-color: #fff;//fff
        border-radius: 10px;
        padding-top: 25px;
        border: 1px solid;
        margin-top: 50%;
        padding: 36px 0px;
        .tip-title{
            font-size: 30.21px;
            color: #333;
            font-weight: bold;
        }
        .tip-content{
            font-size: 27.19px;
            color: #888;
            text-align: left;
            color: #404040;
            padding-left: 37px;
            margin-top:38px;
            ul li{
                list-style-type: none;
                margin-top: 22px;
                &:last-child{
                    text-indent:40px; 
                }
                
            }
        }
        .tip-footer{
            font-size: 27.19px;
            color:#242133;
            .sure{
                width: 300px;
                height: 87px;
                background-color: #242133;
                border: none;
                border-radius:45px;
                color:#fff;
                margin-top: 70px;
            }
        }

    }
}
</style>

<template>
    <!-- 佣金提现说明 -->
    <div class="masking">
            <div class="tip">
            <span class="tip-title"> 佣金提现说明</span>
        <div class="tip-content">
            <ul>
                <li><span>1：登录多份后台</span></li>
                <li><span>2：进入【支付】菜单</span></li>
                <li><span>3：消费佣金通过【通联支付】提现；售卡分成通</span></li>
                <li><span> 过【多粉支付】提现</span></li>
            </ul>   
        </div>
        
            
            <div class="tip-footer">
                <button class="sure">我知道啦</button>
            </div>
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
