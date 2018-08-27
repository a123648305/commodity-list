<template>
    <div class="home-recent-index">
        <!-- 上线延误盒子 -->
        <div class="box-online-delay">
            <!-- 上线延误标题 -->
            <div class="title-online-delay">上线延误</div>
            <div class="box1" v-for="(item,index) in 2" :key="index">
                <div class="box-left">
                    <div class="date-ceshi-online">8月10日</div>
                    <div class="date-text1">原定测试上线</div>
                    <!--<div></div>-->
                </div>
                <div class="box-right">
                    <div class="box-left2">
                        <div class="pro-name">小红十V1.0.0</div>
                        <div class="pro-info">新版后台、手机端、小程序</div>
                        <!-- <div class="box-bottom-border"></div> -->
                    </div>
                    <div class="box-right2">
                        <span class="iconfont icon-you"></span>
                    </div>
                    <div class="box-daynum">
                        <div class="text-daynum">
                            <span class="daynum">4</span>
                            <span class="tian">天</span>
                        </div>
                        <div class="yanwu">延误</div>
                    </div>
                </div>
            </div>

        </div>
        <!-- ----------- -->
        <!--近期上线计划盒子  类名是一样的-->
        <div class="box-online-delay">
            <!-- 近期上线计划标题 -->
            <div class="title-online-delay">近期上线计划</div>
            <div class="box1" v-for="(item,index) in 6" :key="index">
                <div class="box-left">
                    <div class="date-ceshi-online">8月10日</div>
                    <div class="date-text1">测试上线时间</div>

                </div>
                <div class="box-right">
                    <div class="box-left2">
                        <div class="pro-name">小红十V1.0.0</div>
                        <div class="pro-info">新版后台、手机端、小程序</div>
                        <!-- <div class="box-bottom-border"></div> -->
                    </div>
                    <div class="box-right2">
                        <span class="iconfont icon-you"></span>
                    </div>
                    <div class="box-daynum">
                        <div class="text-daynum">
                            <span class="daynum  green">28</span>
                            <span class="tian green">天</span>
                        </div>
                        <div class="yanwu">倒计时</div>
                    </div>
                </div>
            </div>

            <!--5-->

        </div>
    </div>
</template>

<style lang="less" scoped>
.box-online-delay {
    width: 100%;
    // padding-top: 62px;
    overflow: hidden;
    position: relative;
    height: 100%;
    .title-online-delay {
        width: 100%;
        height: 35px;
        margin-top: 60px;
        box-sizing: border-box;
        border-left: 12px solid #f5a623;
        padding-left: 16px;
        color: #fff;
        font-size: 28.5px;
        line-height: 35px;
        letter-spacing: 1.2px;
        margin-bottom: 15.6px;
    }
    .box1 {
        width: 100%;
        height: 147px;
        // background-color: #f5a623;
        .box-left {
            width: 189px;
            height: 100%;
            float: left;
            // background-color: palegoldenrod;
            box-sizing: border-box;
            padding-top: 41px;
            padding-right: 21.5px;
            .date-ceshi-online {
                font-size: 30px;
                color: #fff;
                letter-spacing: 1.8px;
                text-align: center;
                margin-bottom: 4px;
            }
            .date-ceshi-online::before {
                content: '#';
                color: #fff;
                font-size: 10px;
            }
            .date-text1 {
                font-size: 18px;
                color: #bdbdbd;
                letter-spacing: 1.2px;
                text-align: center;
                transform: scale(0.8);
            }
        }
        .box-right {
            width: calc(100% - 189px);
            height: 100%;
            float: right;
            // background-color: palevioletred;
            position: relative;
            .box-left2 {
                width: calc(100% - 67px);
                height: 100%;
                box-sizing: border-box;
                border: 1px solid #000;
                float: left;
                position: relative;
                padding-right: 99px;
                .pro-name {
                    font-size: 30px;
                    color: #fff;
                    letter-spacing: 1.8px;
                    margin-top: 30px;
                    margin-bottom: 23px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
                .pro-info {
                    font-size: 26px;
                    color: #bdbdbd;
                    letter-spacing: 1.2px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
                // .box-bottom-border {
                //     position: absolute;
                //     width: 100%;
                //     height: 1px;
                //     background: #916b05;
                //     bottom: 0;
                //     transform: scaleY(0.4);
                // }
            }
            .box-left2::before {
                content: '';
                position: absolute;
                left: 0;
                bottom: 0;
                right: 0;
                height: 1px;
                border-bottom: 1px solid #916b05;
                color: #916b05;
                -webkit-transform-origin: 0 0;
                transform-origin: 0 0;
                -webkit-transform: scaleY(0.5);
            }
            .box-right2 {
                width: 67px;
                height: 100%;
                box-sizing: border-box;
                // border: 1px solid red;
                float: right;
                display: flex;
                justify-content: center;
                align-items: center;
                box-sizing: border-box;
                padding-top: 8px;
                .icon-you {
                    display: block;
                    color: #916b05;
                    font-size: 20px;
                }
            }
            .box-daynum {
                position: absolute;
                width: 99px;
                height: 100%;
                // border: 1px solid rebeccapurple;
                box-sizing: border-box;
                right: 0;
                transform: translateX(-45px);
                .text-daynum {
                    color: #ff6767;
                    text-align: center;
                    box-sizing: border-box;
                    padding-top: 37px;
                    .daynum {
                        font-size: 36px;
                        margin-bottom: 9.7px;
                        text-align: right;
                    }
                    .tian {
                        font-size: 27px;
                    }
                }
                .yanwu {
                    font-size: 18px;
                    color: #bdbdbd;
                    letter-spacing: 1.2px;
                    text-align: center;
                    transform: scale(0.8);
                }
                .green {
                    color: #19c8a9;
                }
            }
        }
    }
}
</style>

<script>

</script>
