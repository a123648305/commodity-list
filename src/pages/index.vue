
<template>
    <div class="home-index-box">
        <div class="box-title">
            <div class="text-title">
                <div class="text-title-middle">
                    <span :class="{'active':curId===0}" @click="curId=0">近期</span>
                    <span :class="{'active':curId===1}" @click="curId=1">更多</span>
                </div>
            </div>
        </div>

        <div class="contentshow">
            <div class="content-list" v-show="curId===0">
                <recent>
                </recent>
            </div>
            <div class="content-list" v-show="curId===1">
               22222
            </div>
        </div>

    </div>
</template>

<style lang="less" scoped>
.home-index-box {
    // height: 100.6px;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    min-width: 320px;
    max-width: 1242px;
    position: fixed;
    // background-color: palegoldenrod;
    background-color: #05060a;
    .box-title {
        width: 100%;
        height: 100px;
        // background-color: palevioletred;
        // background-color: #05060a;
        background: linear-gradient(#151618, #27282c);
        min-width: 320px;
        max-width: 1242px;
        margin: 0 auto;
        position: fixed;
        z-index: 9999;
        .text-title {
            display: block;
            width: 100%;
            // width: 300px;
            // margin: 0 auto;
            height: 49px;
            bottom: 0;
            // background-color: peru;
            position: absolute;
            box-sizing: border-box;
            .text-title-middle {
                height: 100%;
                width: 295px;
                margin: 0 auto;

                span:nth-child(1) {
                    font-size: 36px;
                    color: #fff;
                    display: block;
                    float: left;
                    box-sizing: border-box;
                    height: 100%;
                    letter-spacing: 1.8px;
                }
                span:nth-child(2) {
                    font-size: 36px;
                    color: #fff;
                    display: block;
                    float: right;
                    box-sizing: border-box;
                    height: 100%;
                    letter-spacing: 1.8px;
                }
                span.active {
                    color: #f5a623;
                    border-bottom: 5px solid #f5a623;
                    // color: pink;
                    // border-bottom: 3px solid pink;
                }
            }
        }
    }
    .contentshow {
        width: 100%;
        margin-top: 100px;
        position: relative;
        height: 100%;
        overflow: hidden;
        .content-list {
            width: 100%;
            height: 100%;
            position: fixed;
            // background-color: #f5a623;
        }
    }
}
</style>

<script>
// import recent from '../proSchedule/template/recent/index'
import recent from '../pages/index3'
//import more from './template/more/index'
export default {
    components: { recent},
    data() {
        return {
            curId: 0,
        }
    }
}
</script>
