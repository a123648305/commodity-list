<style lang="less" scoped>
   .top-statistics-index {
        height: 27%;
        width: 100%;
        min-width: 320px;
        min-width: 750px;
        min-height: 300px;
        position: absolute;
        min-height: 300px;
        background-color: #242133;
        /* background-color: black;*/
        display: flex;
        justify-content: center;
        box-sizing: border-box;
   }
   .banxin{
       height: 100%;
       width: 94%;
       /* background-color:orange; */
       position: relative;
   }
   .box-menu{
       width: 100%;
       height: 9%;
       /* background-color: brown; */
       position: relative;
   }
   .box-menu .icon-more{
       position: absolute;
       color: #fff;
       right: 0;
       bottom: 0;
   }
   .box-navbar{
       width: 100%; 
       /* width: 750px; */
       height: 91%;
       /* background-color: blueviolet; */
       /* padding-top: 5%; */
       box-sizing: border-box;
       /* position: relative; */
   }
  
   .nav-top{
       width: 100%;
       /* height: 47%; */
       height: 50%;
       /* background-color: aquamarine; */
   }
   .nav-bottom{
       width: 100%;
       height: 50%;
       /* background-color: blue; */
   }
   .navbar{
       width: 48%;
       height: 80%;
       background-color: #37334d;
       border-radius: 15px;
       float: left;
       box-sizing: border-box;
   }
   .navbar:nth-child(2n){
       float: right;
   }
   .nav-top .navbar{
       margin-top: 3%;
   }
   .nav-bottom .navbar{
       margin-top: 2%;
   }
   
   .text-money{
       color: #fff;
       font-size: 30px;
       margin-left: 17px;
       margin-top: 26px;
       margin-bottom: 12px;
   }
   .shuoming{
       color: #9c9aa6;
       font-size: 23px;
       margin-left: 17px;
   }
   .round-box1,.round-box2,.round-box3,.round-box4{
       height: 23px;
       width: 23px;
       /* background-color: #3a8dfe; */
       border-radius: 50%;
       display: flex;
       justify-content: center;
       align-items: center;
       margin-left: 17px;
   }
   .round-box1{
       background-color: #3a8dfe;
   }
   .round-box2{
       background-color: #f3a643;
   }
   .round-box3{
       background-color: #27d5c5;
   }
   .round-box4{
       background-color: #27cf53;
   }
   
   /* .icon-huobi{
       color: #fff;
   } */
   .iconfont{
       color: #fff;
   }
   .text-bot-box{
       display: flex;
       /* justify-content: center; */
       align-items: center;
   }
   /* 提示框 */
   .tip-box{
       width: 243px;
       height: 251px;
       /* background-color: pink; */
       position: absolute;
       top: 0;
       right: 0;
       box-sizing: border-box;
       margin-top: 36px;
       display: none;
   }
   .triangle{
       width: 0px;

       height: 0px;
       border-left: 16px solid transparent;
        border-right: 16px solid transparent;
        border-bottom: 16px solid #fff;
        box-sizing: border-box;
        margin-left: 197px;
   }
   .rectangle{
       width: 100%;
       height: 237px;
       background-color: #fff;
       border-radius: 10px;
       display: flex;
       flex-direction: column;
       /* justify-content: center; */
       align-items: center;
   }
   .tip-nav{
       box-sizing: border-box;
       width: 195px;
       height: 33.333%;
       display: flex;
       /* justify-content: center; */
       align-items: center;
   }
   .box-tuiguang,.box-tixian{
       border-bottom: 1px solid #eee;
   }
   .tip-nav .iconfont{
       color: #404040;
       font-size: 27px;
       margin-left: 10px;
       margin-right: 10px;
   }
   .tip-nav p{
       color: #404040;
       font-size: 27px;
   }
   

     
</style>

<template>
    <div class="top-statistics-index">
        <div class="banxin">
            <div class="box-menu">
                    <i class="iconfont icon-more"></i>
            </div>
            <div class="box-navbar">
                <div class="nav-top">
                    <div class="navbar busin-income">
                        <p class="text-money">￥200.00</p>
                        <div class="text-bot-box">
                            <!-- <div class="round-box1"> -->
                                    <i class="iconfont icon-huobi"></i>
                            <!-- </div> -->
                            <p class="shuoming">营业收入</p>
                        </div>
                    </div>
                    <div class="navbar divide-income">
                            <p class="text-money">￥400.00</p>
                            <div class="text-bot-box">
                                <!-- <div class="round-box2"> -->
                                        <i class="iconfont icon-fenxi"></i>
                                <!-- </div> -->
                                <p class="shuoming">售卡分成</p>
                            </div>
                    </div>
                </div>
                <div class="nav-bottom">
                    <div class="navbar consum-income">
                            <p class="text-money">￥200.00</p>
                            <div class="text-bot-box">
                                <!-- <div class="round-box3"> -->
                                        <i class="iconfont icon-fenxi"></i>
                                <!-- </div> -->
                                <p class="shuoming">消费佣金收入</p>
                            </div>
                    </div>
                    <div class="navbar consum-pay">
                            <p class="text-money">￥400.00</p>
                            <div class="text-bot-box">
                                <!-- <div class="round-box4"> -->
                                        <i class="iconfont icon-fenxi"></i>
                                <!-- </div> -->
                                <p class="shuoming">消费佣金收支出</p>
                            </div>
                    </div>
                </div>
            </div>
             <!-- 提示框 -->
            <div class="tip-box">
                <div class="triangle"></div>
                <div class="rectangle">
                    <div class="tip-nav box-tuiguang">
                        <i class="iconfont icon-haibao"></i>
                        <p>售卡推广</p>
                    </div>
                    <div class="tip-nav box-tixian">
                        <i class="iconfont icon-ruhetihuan"></i>
                        <p>如何提现</p>
                    </div>
                    <div class="tip-nav box-exit">
                        <i class="iconfont icon-tuichu"></i>
                        <p>退出</p>
                    </div>
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

        },
    }
</script>