<style lang="less" scoped>
    .home {
        position: absolute;
        height: 100%;
        width: 100%;
        background-color: #000;
        .title {
            //margin-top: 52px;
            text-align: center;
            box-sizing: border-box;
            color: #fff;
            background: -webkit-linear-gradient(rgb(44, 45, 49), rgb(16, 16, 19));
            background: -o-linear-gradient(rgb(44, 45, 49), rgb(16, 16, 19));
            background: -moz-linear-gradient(rgb(44, 45, 49), rgb(16, 16, 19));
            background: linear-gradient(rgb(44, 45, 49), rgb(16, 16, 19)); //background-color: rgb(16,16,19);
            opacity: 0.9;
            height: 81px;
            padding: 0 191px;
            padding-top: 35px;
            span {

                letter-spacing: 1px; //display:inline-block;
                font-size: 30px;

                bottom: 0px;
                &:last-child {
                    margin-left: 124px;
                }

            }
        }
        .active {
            color: #f5a623;
            border-bottom: 4px solid #f5a623;
            padding-bottom: 7px;

        }
        .contentshow {
            margin-top: 51px; //overflow-y:auto;
            background-color: #000;

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