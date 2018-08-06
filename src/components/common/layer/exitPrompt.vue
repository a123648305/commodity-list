<style lang="less" scoped>
.masking{ 
    background-color: rgba(0,0,0,0.5);
    width: 100%;
    height: 100%;
    position: absolute;
    .tip{
        position: absolute;
        left:70px;
        right:70px;
        margin-top: 50%;
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
            padding:86px 0;
            font-size: 27.19px;
            color: #888;
            width: 605px;
             display: table-cell;
            vertical-align: middle;
                
        }
        
        .tip-line{
            border:1.2px solid #dcdcdc;
            display:block;
            //width: 100%;
        }
        .tip-footer{
            font-size: 27.19px;
            color:#242133;
            .cancel{
                height:80px;
                width:50%;
                float: left;
                background-color: transparent;
                border: none;
            }
            .column{
                border: 1.2px solid  #dcdcdc;
                height:80px;
                display:inline-block;
                position: absolute;
                left: 50%;
            }
            .ok{
                height:80px;
                width: 50%;
                float: right;
                background-color: transparent;
                border: none;
            }
        }
    }
}
</style>

<template>
    <!-- 确定退出 -->
    <div class="masking">
        <div class="tip">
            <span class="tip-title"> 提示</span>
        <div class="tip-content">
            <span><p>确定退出登录？</p></span>
                
        </div>
        <span class="tip-line"></span>
            
            <div class="tip-footer"><button class="cancel">取消</button><span class="column"></span><button class="ok">确认</button></div>
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
