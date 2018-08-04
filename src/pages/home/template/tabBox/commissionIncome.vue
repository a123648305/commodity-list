<style lang="less" scoped>
.item-box-top {
    margin-bottom: 20px;
    border-radius: 20px;
}
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
                        <span>粉丝星球卡号</span>
                        <span class="green-dps">11111111</span>
                    </li>
                    <li class="item-list">
                        <span>消费商家</span>
                        <span class="dps">广东谷通科技</span>
                    </li>
                    <li class="item-list">
                        <span>消费金额</span>
                        <span class="dps">￥200.00</span>
                    </li>
                    <li class="item-list">
                        <span>佣金收入</span>
                        <span class="dps">￥200.00</span>
                    </li>
                    <li class="item-list">
                        <span>订单已退款</span>
                        <span class="dps">退回佣金￥200.00</span>
                    </li>
                </ul>
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
            data: [2323, 432, 5, 634, 3463, 3463, 36346, 36]
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
