<style lang="less" scoped>
// 详情-倒计时
.projectSchedule-detail-countDown {
    letter-spacing: 2px;
    background-color: #000;
    height: 100%;
    position: absolute;
    .detail-title {
        width: 100%;
        text-align: center;
        color: #fff;
        font-size: 60px;
        padding-left:50px;
        box-sizing: border-box;
        padding-top:50px;
        padding-bottom:50px;
        letter-spacing: 3px;
        i {
            transform: rotate(180deg);
            float: left;
            font-size:51px;
            color: #fff;

        }
        span {
            margin-left: -50px;
        }

    }
    .startime {
        margin-top: 40px;
        height: 100px;
        line-height: 100px;
        margin-left: 40px;
        margin-right: 40px;
        font-Size: 44px;
        color: #ffbb00;
        border-Radius: 20px;
        background-Color: #16151a;
        padding-left: 68px;
    }
    .detail-content {
        margin-top: 50px;
        //height: 424px;
        margin-left: 40px;
        margin-right: 40px;
        padding-left: 39px;
        padding-right: 65px;
        padding-top: 51px;
        border-Radius: 20px;
        background-Color: #16151a; 
        padding-bottom: 53px;
        h1 {
            font-size: 60px;
            letter-spacing: 3px;
            font-weight: normal;
            color: #fff;
        }
        p {
            font-size: 44px;
            color: #bdbdbd;
            line-height: 1.3;
            margin-top: 60px;
        }
    }
    .detail-uptime {
        margin-top: 80px;
        .detail-uptime-title {
            //width: 100%;
            border-left: 20px solid #f5a623;
            padding-left: 30px;
            font-size: 48px;
            letter-spacing: 4px;
            color: #fff;
            height: 60px;
            line-height: 60px;
        }
        .detail-uptime-content {
            border-Radius: 20px;
            background-Color: #16151a;
            height: 190px;
            margin-left: 40px;
            margin-right: 40px; //line-height: 63px;
            padding-left: 40px;
            color: #fff;
            margin-top: 40px;
            display: flex;
            align-items: center;
            font-size: 50px; 
            
            .daytime {
                right: 133px;
                position: absolute;
                text-align: center;
                border-bottom: 4px solid #946c05;
                padding-bottom: 20px;
                //width:130px;
            }
            .daytime-number {
                color: #19c8a9;
                font-size: 60px;
            }
            .daytime-day {
                font-size: 50px;
                font-weight: normal;
                margin-left:-15px;
            }
            .daytime-text {
                color: #bdbdbd;
                font-size: 30px;
                margin-top: 15px;
                
            }

        }
        .daytime-date {
            float: left;
            letter-spacing: 3px;
            &::before {
                content: "#";
                font-size: 30px;

            }
        }
    }

    .detail-usetime {
        margin-top: 80px;
        .detail-usetime-title {
            //width: 100%;
            border-left: 20px solid #f5a623;
            padding-left: 30px;
            font-size: 48px;
            letter-spacing:4px;
            color: #fff;
            height: 60px;
            line-height: 60px;
        }
        .detail-usetime-content {
            border-Radius: 20px;
            background-Color: #16151a;
            height: 190px;
            margin-left: 40px;
            margin-right: 40px; //line-height: 63px;
            padding-left: 40px;
            color: #fff;
            margin-top: 47px;
            display: flex;
            align-items: center;
            font-size: 50px;
            
            .daytime {
                right: 133px;
                position: absolute;
                text-align: center;
                border-bottom: 4px solid #946c05;
                padding-bottom: 20px;
                color: #ff6767;
            }
            .daytime-number {
                color: #19c8a9;
                font-size: 60px;
            }
            .daytime-day {
                font-size: 50px;
                font-weight: normal;
                margin-left:-15px;
            }
            .daytime-text {
                color: #bdbdbd;
                font-size: 30px;
                margin-top: 16px;
            }
           

        }
        .daytime-date {
            float: left;
            letter-spacing: 3px;
            &::before {
                content: "#";
                font-size: 30px;

            }
        }
    }
    

}
</style>

<template>
    <div>
        <!-- 详情-倒计时 -->
        <div class="projectSchedule-detail-countDown">
            <div class="detail-title">
                
                
                    <i class="iconfont icon-you" @click="black"></i>
               
                <span>详情</span>
            </div>
            <div class="startime">项目开始时间:2018-04-25</div>
            <div class="detail-content">
                <h1>多粉星球V1.0.0</h1>
                <p>新版后台、手机端、小程序的，上线的相关文案描述 新版后台、手机端、小程序的，上线的相关文案描述 新版后台、手机端、小程序的，上线的相关文案描述 新版后台、手机端、小程序的，上线的相关文案描述
                </p>
            </div>
            <div class="detail-uptime">
                <div class="detail-uptime-title">测试环境上线日期</div>
                <div class="detail-uptime-content">
                    <span class="daytime-date">2018年08月01日</span>
                    <span class="daytime">
                        <p class="daytime-number">28
                            <b class="daytime-day">天</b>
                        </p>
                        <p class="daytime-text">倒计时</p>
                    </span>

                </div>
            </div>


            <div class="detail-usetime">
                <div class="detail-usetime-title">正式环境上线日期</div>
                <div class="detail-usetime-content">
                    <span class="daytime-date">2018年08月01日</span>
                    <span class="daytime">
                        <p class="daytime-number">35
                            <b class="daytime-day">天</b>
                        </p>
                        <p class="daytime-text">倒计时</p>
                    </span>


                </div>
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