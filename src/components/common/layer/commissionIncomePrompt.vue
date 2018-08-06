<style lang="less" scoped>
.masking{ 
    background-color: rgba(0,0,0,0.5);
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    align-items: center;
    .tip{
        position: absolute; 
        left:74px;
        right:74px;
        //margin-top:50%;
        text-align:center;
        background-color: #fff;//fff
        border-radius: 10px;
        padding-top: 25px;
        .tip-title{
            font-size: 30.21px;
            color: #333;
            font-weight: bold;
        }
    .tip-content{
        //height: 200px;
        padding: 50px 0;
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
}
</style>
<template>
     <!-- 消费佣金收入说明 -->
    <div class="masking">
        <div class="tip">
            <span class="tip-title">提示</span>
            <div class="tip-content">
                    <ul>
                        <li><span>你在这办卡的粉丝成为你的星球粉丝,</span></li>
                        <li><span>在多粉星球其他的商家消费，</span></li>
                        <li><span>你将获按每单消费额的返佣</span></li>
                    </ul>
                    </div>
                        <span class="tip-line"></span>
                    <div class="tip-footer"><button class="ok">我知道啦</button>
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
