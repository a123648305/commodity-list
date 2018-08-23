<style lang="less" scoped>
// 近期
.projectSchedule-recent-index {
        background-color: #000;
    .recent-delay {
        letter-spacing: 2px;
        .recent-delay-title {
            color: #fff;
            border-left: 20px solid #f5a623;
            padding-left: 52px;
            font-size: 48px;
            height: 60px;
            line-height:60px;
            
        }
    }
    .recent-plan {
        margin-top: 72px;
        .recent-plan-title {
            color: #fff;
            border-left: 20px solid #f5a623;
            padding-left: 52px;
            font-size: 48px;
            height: 60px;
            line-height:60px;
        }
        li {
            .plan-time-nubmer {
                font-Size: 60px;
                color: #19c8a9;
            }
            .plan-time-day {
                font-size: 50px;
                font-weight: normal;
                margin-left: -15px;
            }

            .plan-time-text {
                color: #bdbdbd;
                font-size: 30px;
                margin-top: 15px;

            }




        }

    }


    ul {
        width: 100%;
        li {
            list-style-type: none;
            padding-left:30px;
            padding-right:40px;
            //font-size: 50px;
            display: flex;
            align-items: center;
            width: 100%;
            
            .uptime {
                text-align: center;
            }
            
            .uptime-text {
                color: #bdbdbd;
                font-size: 30px;
                margin-top: 16px;
                letter-spacing: 2px;
                margin-left: 11px;
                
            }
            .upname {
                float: left;
                display:table-cell;
                vertical-align: middle; 
                width: 80%;
                
            }
            .upname-p1,
            .upname-p2 {
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
            .upname-p1 {
                color: #fff;
                letter-spacing: 3px;

            }
            .upname-p2 {
                color: #bdbdbd;
                font-size: 44px;
                margin-top: 47px;

            }

            .delay-time {
                float: right;
                margin-right: -15px;
                text-align: center;
                letter-spacing: 3px;
                    padding-top: 17px;
            }
            .plan-time-nubmer {
                font-Size: 60px;
                color: #ff6767;
            }
            .plan-time-day {
                font-size: 50px;
                font-weight: normal;
                margin-left: -15px;
            }

            .plan-time-text {
                color: #bdbdbd;
                font-size: 30px;
                margin-top:15px;

            }

           
        }
        .upcontent {
            //background-color:#916b05;
            border-bottom: 1px solid #946c05;/*no*/
            margin-left: 74px;
            width: 65%;
            padding-bottom: 50px;
            padding-top: 50px;
            display:table;
            vertical-align: middle;
            font-size: 50px;
            @media screen and(max-width: 320px) {
                width: 60%;
            }                  
            
        }
        .uptime-date {
            font-size:50px;
            color: #fff;
            letter-spacing: 3px;
            &::before {
                content: "#";
                font-size:30px;
            }
        }
        .recent-right {
            margin-left:23px;
            
            //height:79px;
            //margin-left: 8px;
            //position: absolute;
            right: 40px;
            padding-top: 30px;
            
            i {
                color: #916b05;
                font-size: 40px;
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
                                <p class="plan-time-text">延误</p>

                            </div>

                        </div>
                        <div class="recent-right">

                            <router-link to="/detail-Delay">
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
                                <p class="plan-time-text">延误</p>

                            </div>

                        </div>
                        <div class="recent-right">

                            <router-link to="/">
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
                            <p class="uptime-text">测试上线时间</p>
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
                            <router-link to="/detail-Countdown">
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