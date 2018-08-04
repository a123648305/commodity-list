<style lang="less" scoped>
.top-statistics-index {
    background-color: #242133;
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    height: 210px; /*no*/
    background-color: #242133;
    overflow: hidden;
    box-sizing: border-box;
    box-sizing: border-box;
}
.banxin {
    height: 100%;
    width: 94%;
    /* background-color:orange; */
    position: relative;
}
.box-menu {
    width: 100%;
    height: 9%;
    /* background-color: brown; */
    position: relative;
}
.box-menu .icon-more {
    position: absolute;
    color: #fff;
    right: 0;
    bottom: 0;
}
.box-navbar {
    width: 100%;
    /* width: 750px; */
    height: 91%;
    /* background-color: blueviolet; */
    /* padding-top: 5%; */
    box-sizing: border-box;
    /* position: relative; */
}

.nav-top {
    width: 100%;
    /* height: 47%; */
    height: 50%;
    /* background-color: aquamarine; */
}
.nav-bottom {
    width: 100%;
    height: 50%;
    /* background-color: blue; */
}
.navbar {
    width: 48%;
    height: 80%;
    background-color: #37334d;
    border-radius: 15px;
    float: left;
    box-sizing: border-box;
}
.navbar:nth-child(2n) {
    float: right;
}
.nav-top .navbar {
    margin-top: 3%;
}
.nav-bottom .navbar {
    margin-top: 2%;
}

.text-money {
    color: #fff;
    font-size: 30px;
    margin-left: 17px;
    margin-top: 26px;
    margin-bottom: 12px;
}
.shuoming {
    color: #9c9aa6;
    font-size: 23px;
    margin-left: 17px;
}

.text-bot-box {
    display: flex;
    align-items: center;
}

.img-icon {
    height: 23px;
    width: 23px;
    margin-left: 17px;
}

/* 提示框 */
.tip-box {
    width: 243px;
    height: 251px;
    /* background-color: pink; */
    position: absolute;
    top: 0;
    right: 0;
    box-sizing: border-box;
    margin-top: 36px;
    // display: none;
}
.triangle {
    width: 0px;

    height: 0px;
    border-left: 16px solid transparent;
    border-right: 16px solid transparent;
    border-bottom: 16px solid #fff;
    box-sizing: border-box;
    margin-left: 197px;
}
.rectangle {
    width: 100%;
    height: 237px;
    background-color: #fff;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
}
.tip-nav {
    box-sizing: border-box;
    width: 195px;
    height: 33.333%;
    display: flex;
    /* justify-content: center; */
    align-items: center;
}
.box-tuiguang,
.box-tixian {
    border-bottom: 1px solid #eee;
}
.tip-nav .iconfont {
    color: #404040;
    font-size: 27px;
    margin-left: 10px;
    margin-right: 10px;
}
.tip-nav p {
    color: #404040;
    font-size: 27px;
}
</style>

<template>
    <div class="top-statistics-index">
        <div class="banxin">
            <div class="box-menu" @click="shoBoxMenu">
                <i class="iconfont icon-more"></i>
            </div>
            <div class="box-navbar">
                <div class="nav-top">
                    <div class="navbar busin-income">
                        <p class="text-money">￥200.00</p>
                        <div class="text-bot-box">
                            <img class="img-icon" src="./images/yingyeincome.png" alt="">
                            <p class="shuoming">营业收入</p>
                        </div>
                    </div>
                    <div class="navbar divide-income">
                        <p class="text-money">￥400.00</p>
                        <div class="text-bot-box">
                            <img class="img-icon" src="./images/shoukafencheng.png" alt="">
                            <p class="shuoming">售卡分成</p>
                        </div>
                    </div>
                </div>
                <div class="nav-bottom">
                    <div class="navbar consum-income">
                        <p class="text-money">￥200.00</p>
                        <div class="text-bot-box">
                            <img class="img-icon" src="./images/yongjinincome.png" alt="">
                            <p class="shuoming">消费佣金收入</p>
                        </div>
                    </div>
                    <div class="navbar consum-pay">
                        <p class="text-money">￥400.00</p>
                        <div class="text-bot-box">
                            <img class="img-icon" src="./images/yongjinput.png" alt="">
                            <p class="shuoming">消费佣金收支出</p>
                        </div>
                    </div>
                </div>
            </div>
            <tab-box-bar></tab-box-bar>
            <!-- 提示框 -->
            <div class="tip-box" v-if="isShoBoxMenu">
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
import tabBoxBar from './../common/tabBar'
export default {
    components: { tabBoxBar },
    data() {
        return {
            isShoBoxMenu: false
        };
    },
    computed: {
        topStatisticsAnimate() {
            return this.$store.getters['home/topStatisticsAnimate']
        }
    },
    mounted() { },
    methods: {
        shoBoxMenu() {
            this.isShoBoxMenu = !this.isShoBoxMenu
        }
    }
};
</script>
