<style lang="less" scoped>
    // 近期
    .projectSchedule-recent-index {
        // height: 100%;
        // width: 100%;
        // position:absolute;
        // background-color: #000;
        .recent-delay {
            .recent-delay-title {
                color: #fff;
                border-left: 10px solid #f5a623;
                padding-left: 25px;
                font-size: 30px;
            }
        }
        .recent-plan {
            margin-top: 36px;
            .recent-plan-title {
                color: #fff;
                border-left: 10px solid #f5a623;
                padding-left: 25px;
                font-size: 30px;
            }
            li {
                .plan-time-nubmer {
                    font-Size: 30px;
                    color: #19c8a9;
                }
                .plan-time-day {
                    font-size: 25px;
                    font-weight: normal;
                }

                .plan-time-text {
                    color: #bdbdbd;
                    font-size: 15px;
                    margin-top: 8px;

                }




            }

        }


        ul {
            width: 100%;
            margin-top: 30px;
            letter-spacing: 1px;
            li {
                list-style-type: none;
                padding-left: 15px;
                padding-right: 20px;
                font-size: 25px;
                display: flex;
                align-items: center;
                width: 100%;
                .uptime {
                    float: left;
                }
                .uptime-date {
                    font-size: 25px;
                    color: #fff;
                    &::before {
                        content: "#";
                        font-size: 15px;
                    }
                }
                .uptime-text {
                    color: #bdbdbd;
                    font-size: 15px;
                    margin-top: 8px;

                }
                .upcontent {
                    //background-color: #f5a623;
                    border-bottom: 2px solid #946c05;
                    float: left;
                    margin-left: 26px;
                    display: flex;
                    align-items: center;
                    width: 73%;
                    padding-bottom: 25px;
                    padding-top: 25px;
                    box-sizing: border-box;
                }
                .upname {
                    float: left;
                    width: 92%;
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
                    // float: right;
                    // margin-left: 26px;
                    position: absolute;
                    right: 44px;
                    text-align: center;
                }
                .plan-time-nubmer {
                    font-Size: 30px;
                    color: #ff6767;
                }
                .plan-time-day {
                    font-size: 25px;
                    font-weight: normal;
                }

                .plan-time-text {
                    color: #bdbdbd;
                    font-size: 15px;
                    margin-top: 8px;

                }

                .recent-right {
                    float: right;
                    display: flex;
                    align-items: center; //height:79px;
                    //margin-left: 8px;
                    position: absolute;
                    right: 20px;
                    i {
                        color: #916b05;
                        font-size: 20px;
                    }
                }
            }
        }
    }
</style>

<template>
    <div>
        <!-- 近期-->
        <div class="projectSchedule-recent-index">
            <!-- 上线延误 -->
            <div class="recent-delay">
                <div class="recent-delay-title">
                    <span>上线延误</span>
                </div>

                <ul>
                    <li>
                        <div class="uptime">
                            <p class="uptime-date">8月10日</p>
                            <p class="uptime-text">原定测试上线</p>
                        </div>
                        <div class="upcontent">
                            <div class="upname">
                                <p class="upname-p1">小红十V1.0.0</p>
                                <p class="upname-p2">新版后台、手机端、小程序</p>
                            </div>
                            <div class="delay-time">
                                <p class="plan-time-nubmer">4
                                    <b class="plan-time-day">天</b>
                                </p>
                                <p class="plan-time-text">倒计时</p>

                            </div>

                        </div>
                        <div class="recent-right">

                            <router-link to="/d">
                                <i class="iconfont icon-you "></i>
                            </router-link>

                        </div>
                    </li>

                    <li>
                        <div class="uptime">
                            <p class="uptime-date">8月10日</p>
                            <p class="uptime-text">原定测试上线</p>
                        </div>
                        <div class="upcontent">
                            <div class="upname">
                                <p class="upname-p1">小红十V1.0.0</p>
                                <p class="upname-p2">新版后台、手机端、小程序</p>
                            </div>
                            <div class="delay-time">
                                <p class="plan-time-nubmer">4
                                    <b class="plan-time-day">天</b>
                                </p>
                                <p class="plan-time-text">倒计时</p>

                            </div>

                        </div>
                        <div class="recent-right">

                            <router-link to="/d">
                                <i class="iconfont icon-you "></i>
                            </router-link>

                        </div>
                    </li>

                </ul>
            </div>

            <!-- 上线计划 -->
            <div class="recent-plan">
                <div class="recent-plan-title">
                    <span>近期上线计划</span>
                </div>

                <ul>


                    <li v-for="item in 10" :key="item">
                        <div class="uptime">
                            <p class="uptime-date">8月10日</p>
                            <p class="uptime-text">原定测试上线</p>
                        </div>
                        <div class="upcontent">
                            <div class="upname">
                                <p class="upname-p1">小红十V1.0.0</p>
                                <p class="upname-p2">手机端</p>
                            </div>
                            <div class="delay-time plan-time">
                                <p class="plan-time-nubmer">31
                                    <b class="plan-time-day">天</b>
                                </p>
                                <p class="plan-time-text">倒计时</p>

                            </div>

                        </div>
                        <div class="recent-right">
                            <router-link to="/d2">
                                <i class="iconfont icon-you "></i>
                            </router-link>
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