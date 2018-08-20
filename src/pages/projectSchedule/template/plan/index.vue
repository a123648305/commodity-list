<style lang="less" scoped>
    // 项目规划
    .projectSchedule-plan-index {
        background-color: #000;
        height: 100%;
        width: 100%;
        position: absolute;
        .plan-title {
            width: 100%;
            text-align: center;
            color: #fff;
            font-size: 30px;
            padding-left: 25px;
            box-sizing: border-box;
            margin-top: 53px;
            i {
                transform: rotate(180deg);
                float: left;
                font-size: 25px;

            }
            span {
                margin-left: -25px;
            }

        }
        ul {
            //overflow-y: scroll;
            width: 100%;
            margin-top: 30px;
            letter-spacing: 1px;
            li {
                list-style-type: none;
                padding-left: 15px;
                padding-right: 20px;
                font-size: 25px; //margin-top: 25px;
                //border: 1px solid red;
                //height: 128px;
                display: flex;
                align-items: center;
                width: 100%;

                .uptime {
                    float: left;
                    font-size: 25px;
                }
                .uptime-date {
                    color: #fff;
                    &::before {
                        content: "#";
                        font-size: 15px;
                    }
                }
                .uptime-content {
                    color: #bdbdbd;
                    font-size: 15px;
                    margin-top: 8px;

                }

                .upcontent {
                    //background-color: #f5a623;
                    border-bottom: 1px solid #946c05; //padding: 17px 0; 
                    //height:118px;
                    float: left;
                    margin-left: 26px;
                    display: flex;
                    align-items: center;
                    width: 73%;
                    padding-top: 25px;
                    padding-bottom: 25px;
                    box-sizing: border-box;
                }

                .upname {
                    float: left;
                    width: 90%;
                }
                .upname-p1,
                .upname-p2 {
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
                .upname-p1 {
                    color: #fff;

                }
                .upname-p2 {
                    color: #bdbdbd;
                    font-size: 22px;
                    margin-top: 25px;

                }



                .delay-time {
                    position: absolute;
                    right: 44px;
                    text-align: center;
                }

                .delay-time-number {
                    font-Size: 30px;
                    color: #19c8a9;
                }
                .delay-time-day {
                    font-size: 25px;
                    font-weight: normal;
                }
                .delay-time-text {
                    color: #bdbdbd;
                    font-size: 15px;
                    margin-top: 8px;

                }

                .plan-right {
                    position: absolute;
                    right: 20px;
                    display: flex;
                    align-items: center;
                }
                .iconfont {
                    color: #916b05;
                    font-size: 20px;
                }

            }
        }

        .plan-list {
            background-color: #000;
        }


    }
</style>

<template>
    <div>
        <!-- 项目计划 -->
        <div class="projectSchedule-plan-index">
            <div class="plan-title">
                <i class="iconfont icon-you"></i>
                <span>小红十项目研发规划</span>
            </div>
            <div class="plan-list">

                <ul>
                    <li v-for="item in 10" :key="item">
                        <div class="uptime">
                            <p class="uptime-date">8月10日</p>
                            <p class="uptime-content">测试上线时间</p>
                        </div>
                        <div class="upcontent">
                            <div class="upname">
                                <p class="upname-p1">小红十V1.0.0</p>
                                <p class="upname-p2">新版后台、手机端、小程序</p>
                            </div>
                            <div class="delay-time">
                                <p class="delay-time-number">28
                                    <b class="delay-time-day">天</b>
                                </p>
                                <p class="delay-time-text">倒计时</p>

                            </div>

                        </div>
                        <div class="plan-right">
                            <i class="iconfont icon-you "></i>
                        </div>


                    </li>

                    <li>
                        <div class="uptime">
                            <p class="uptime-date">8月10日</p>
                            <p class="uptime-content">测试上线时间</p>
                        </div>
                        <div class="upcontent">
                            <div class="upname">
                                <p class="upname-p1">小红十V1.0.0</p>
                                <p class="upname-p2">新版后台、手机端、小程序</p>
                            </div>
                            <div class="delay-time">
                                <p class="delay-time-number">28
                                    <b class="delay-time-day">天</b>
                                </p>
                                <p class="delay-time-text">倒计时</p>

                            </div>

                        </div>
                        <div class="plan-right">
                            <i class="iconfont icon-you "></i>
                        </div>


                    </li>
                    <li>
                        <div class="uptime">
                            <p class="uptime-date">8月10日</p>
                            <p class="uptime-content">测试上线时间</p>
                        </div>
                        <div class="upcontent">
                            <div class="upname">
                                <p class="upname-p1">小红十V1.0.0</p>
                                <p class="upname-p2">新版后台、手机端、小程序</p>
                            </div>
                            <div class="delay-time">
                                <p class="delay-time-number">28
                                    <b class="delay-time-day">天</b>
                                </p>
                                <p class="delay-time-text">倒计时</p>

                            </div>

                        </div>
                        <div class="plan-right">
                            <i class="iconfont icon-you "></i>
                        </div>


                    </li>
                    <li>
                        <div class="uptime">
                            <p class="uptime-date">8月10日</p>
                            <p class="uptime-content">测试上线时间</p>
                        </div>
                        <div class="upcontent">
                            <div class="upname">
                                <p class="upname-p1">小红十V1.0.0</p>
                                <p class="upname-p2">新版后台、手机端、小程序</p>
                            </div>
                            <div class="delay-time">
                                <p class="delay-time-number">28
                                    <b class="delay-time-day">天</b>
                                </p>
                                <p class="delay-time-text">倒计时</p>

                            </div>

                        </div>
                        <div class="plan-right">
                            <i class="iconfont icon-you "></i>
                        </div>


                    </li>
                    <li>
                        <div class="uptime">
                            <p class="uptime-date">8月10日</p>
                            <p class="uptime-content">测试上线时间</p>
                        </div>
                        <div class="upcontent">
                            <div class="upname">
                                <p class="upname-p1">小红十V1.0.0</p>
                                <p class="upname-p2">新版后台、手机端、小程序</p>
                            </div>
                            <div class="delay-time">
                                <p class="delay-time-number">28
                                    <b class="delay-time-day">天</b>
                                </p>
                                <p class="delay-time-text">倒计时</p>

                            </div>

                        </div>
                        <div class="plan-right">
                            <i class="iconfont icon-you "></i>
                        </div>


                    </li>

                </ul>
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