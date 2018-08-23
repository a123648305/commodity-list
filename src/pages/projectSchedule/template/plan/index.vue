<style lang="less" scoped>
    // 项目规划
    .projectSchedule-plan-index {
        background-color: #000;
        height: 100%;
        width: 100%;
        position: absolute;
        letter-spacing: 2px;
        overflow: hidden;
        .plan-title {
            position: relative;
            width: 100%;
            text-align: center;
            color: #fff;
            font-size: 60px;
            //box-sizing: border-box;
            padding: 50px 0px;
            letter-spacing: 3px;
            //height: 120px;
            i {
                transform: rotate(180deg);
                float: left;
                font-size: 50px;
                margin-left: 50px;

            }
            span {
                margin-left: -50px;
            }

        }
        .plan-list {
            //background-color: #000;
            height: 100%;
            overflow-y: auto;
            overflow-x: hidden;
            &::-webkit-scrollbar {
                display:none
            } 
            li {
                //background-color:greenyellow;
                list-style-type: none;
                padding-left:30px;
                padding-right:40px;
                font-size: 50px; 
                display: flex;
                align-items: center;
                width: 100%;
                .uptime-date {
                    color: #fff;
                    letter-spacing: 3px;
                    font-size: 50px;
                    &::before {
                        content: "#";
                        font-size: 30px;
                    }
                }
                .uptime-content {
                    color: #bdbdbd;
                    font-size: 30px;
                    margin-top: 16px;
                    

                }

                .upcontent {
                    //background-color: #f5a623;
                    border-bottom: 1px solid #946c05; /*no*/
                    //height:118px;
                    float: left;
                    margin-left: 74px;
    
                    width: 65%;
                    padding-top: 50px;
                    padding-bottom: 50px;
                    @media screen and(max-width: 320px) {
                        width: 60%;
                    }  
                }

                .upname {
                    float: left;
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
                    font-size: 50px;
                    letter-spacing: 3px;

                }
                .upname-p2 {
                    color: #bdbdbd;
                    font-size: 44px;
                    margin-top: 47px;

                }



                .delay-time {
                    float: right;
                    text-align: center;
                    margin-right: -15px;
                    letter-spacing: 3px;
                    padding-top: 17px;
                }

                .delay-time-number {
                    font-Size:60px;
                    color: #19c8a9;
                }
                .delay-time-day {
                    font-size: 50px;
                    font-weight: normal;
                    margin-left: -15px;
                }
                .delay-time-text {
                    color: #bdbdbd;
                    font-size: 30px;
                    margin-top: 15px;
                    //transform: scale(0.9);
           

                }

                .plan-right {
                   
                    margin-left: 23px;
                    // display: flex;
                    // align-items: center;
                    padding-top: 30px;
                }
                .iconfont {
                    color: #916b05;
                    font-size: 40px;
                }

            }
        }

       

}
    
</style>

<template>
    <div>
        <!-- 项目计划 -->
        <div class="projectSchedule-plan-index">
            <div class="plan-title">
                <i class="iconfont icon-you" @click="black"></i>
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
                black() {
            
            this.$router.go(-1)
        }

        },
    }
</script>