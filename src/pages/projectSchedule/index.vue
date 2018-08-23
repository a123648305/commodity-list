<style lang="less" scoped>
.home {
    position: absolute;
    height: 100%;
    width: 100%;
    overflow: hidden;
    background-color: #000;
    .title {
        box-sizing: border-box;
        color: #fff;

        background: -webkit-linear-gradient(#1b1c1f, #28282d);
        background: -o-linear-gradient(#1b1c1f, #28282d);
        background: -moz-linear-gradient(#1b1c1f, #28282d);
        background: -mos-linear-gradient(#1b1c1f, #28282d);
        background: linear-gradient(#1b1c1f, #28282d);
        //opacity: 0.9;
        height:127px;
        padding-top: 35px;
        
        span {

            letter-spacing: 3px; 
            font-size: 60px;
            margin-left:381px; 
            
            &:last-child {
                margin-left: 247px;
            }

        }
    }
    .active {
        color: #f5a623;
        border-bottom: 8px solid #f5a623;
        padding-bottom: 12px;

    }
    .contentshow {
        margin-top:102px; //overflow-y:auto;
        
        //background-color: aquamarine;
        height: 100%;
        overflow-y: auto;
        overflow-x: hidden;
        &::-webkit-scrollbar {
            display:none
        }

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
        components: { recent, more },
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