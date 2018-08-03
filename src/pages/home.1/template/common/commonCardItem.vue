<style lang="less" scoped>
</style>

<template>
    <div class="common-card-item">
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
                    <span @click="showDetail(data)" class="iconfont icon-jiantou"></span>
                </li>
            </ul>
            <!-- 消费明细 start -->
            <div class="consumption-detail" v-show="data._showDetail">
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
</template>

<script>
export default {
    props: {
        data: [Object]
    },
    data() {
        return {

        }
    },
    computed: {

    },
    mounted() {

    },
    methods: {
        showDetail() {
            this.$set(this.data, '_showDetail', !this.data._showDetail)
            console.log(this.data, 'data')
        }
    },
}
</script>
