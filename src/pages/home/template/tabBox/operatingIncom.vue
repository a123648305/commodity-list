<style lang="less" scoped>
</style>

<template>
    <tab-container>
        <div class="common-card-item" v-for="(item,index) in data" :key="index">
            <div class="item-box-top">
                <ul>
                    <li class="item-list">
                        <span class="title">时间</span>
                        <span class="dps">2018-12-02 15:30:20</span>
                    </li>
                    <li class="item-list">
                        <span>订单号</span>
                        <span class="dps">LMXF12356655</span>
                    </li>
                    <li class="item-list">
                        <span>订单状态</span>
                        <span class="green-dps">已退款</span>
                    </li>
                    <li class="item-list">
                        <span>粉丝手机号</span>
                        <span class="dps">18814125786</span>
                    </li>
                    <li class="item-list">
                        <span>粉丝星球卡号</span>
                        <span class="dps">11111111</span>
                    </li>
                    <li class="item-list">
                        <span>实付金额</span>
                        <span class="dps">￥200.00</span>
                    </li>
                </ul>
            </div>
            <div class="item-box-bottom">
                <div class="left-solt"></div>
                <div class="right-solt"></div>
                <ul>
                    <li>
                        <span>消费明细</span>
                        <div class="iconfont-box" @click="showDetail(item,index)">
                            <span :class="item._showDetail?'iconfont icon-jiantou transform':'iconfont icon-jiantou '"></span>
                        </div>
                    </li>
                </ul>
                <!-- 消费明细 start -->
                <div class="consumption-detail" v-show="item._showDetail">
                    <ul class="item-box">
                        <li class="item-list">
                            <span class="title">消费金额</span>
                            <span class="dps">￥100.00</span>
                        </li>
                        <li class="item-list">
                            <span class="title">消费金额</span>
                            <span class="dps">￥100.00</span>
                        </li>
                        <li class="item-list">
                            <span class="title">消费金额</span>
                            <span class="dps">￥100.00</span>
                        </li>
                    </ul>
                    <ul>
                        <li class="head">
                            <span>赠送服务/商品</span>
                        </li>
                    </ul>
                    <ul class="item-box">
                        <li class="item-list">
                            <span class="title">汽车</span>
                            <span class="dps">1</span>
                        </li>
                        <li class="item-list">
                            <span class="title">糖水</span>
                            <span class="dps">1</span>
                        </li>
                    </ul>
                </div>
                <!-- 消费明细 end -->
            </div>
        </div>
    </tab-container>
</template>

<script>
import tabContainer from './../common/tabContainer'
export default {
    components: { tabContainer },
    data() {
        return {
            startY: 0,
            data: [1, 3, 4, 5, 6, 7, 8, 9, 0, 2, 3, 4]
        }
    },
    computed: {
        topStatisticsAnimate() {
            return this.$store.getters['home/topStatisticsAnimate']
        },
    },
    mounted() {

    },
    methods: {
        //查看详情
        showDetail(item, index) {
            this.$set(this.data[index], '_showDetail', !item._showDetail)
        }
    },
}
</script>
