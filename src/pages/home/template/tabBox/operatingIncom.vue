<style lang="less" scoped>
.bg {
    padding-top: 23px;
    overflow: hidden;
}
</style>

<template>
    <common-scroll ref="scroll" :scrollbar="true" :listenScroll="true" :pullDownRefresh="true" :pullUpLoad="true" :startY="parseInt(startY)" @pullingDown="onPullingDown" @pullingUp="onPullingUp" @scroll="scroll">
        <div slot="content" class="bg">
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
                            <span @click="showDetail(item,index)" class="iconfont icon-jiantou"></span>
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
        </div>
    </common-scroll>
</template>

<script>
import commonCardItem from './../common/commonCardItem'
export default {
    components: { commonCardItem },
    data() {
        return {

            startY: 0,
            data: []
        }
    },
    computed: {

    },
    mounted() {
        for (let i = 0; i < 30; i++) {
            this.data.push({
                index: i,
                name: 'name---' + i
            })
        }
    },
    methods: {
        onPullingDown() {
            // 模拟更新数据
            console.log('pulling down and load data')
            setTimeout(() => {
                if (this._isDestroyed) {
                    return
                }
                if (Math.random() > 0.5) {
                    // 如果有新数据
                    this.data.unshift(('新增加的数据') + +new Date())
                    this.$refs.scroll.forceUpdate()
                } else {
                    // 如果没有新数据
                    this.$refs.scroll.forceUpdate()
                }
            }, 2000)
        },
        onPullingUp() {
            // 更新数据
            console.log('pulling up and load data')
            setTimeout(() => {
                if (this._isDestroyed) {
                    return
                }
                if (Math.random() > 0.5) {
                    // 如果有新数据
                    let newPage = []
                    for (let i = 30; i < 50; i++) {
                        newPage.push({
                            index: i,
                            name: 'name---' + i
                        })
                    }
                    this.data = this.data.concat(newPage)
                    this.$refs.scroll.forceUpdate()
                } else {
                    // 如果没有新数据
                    this.$refs.scroll.forceUpdate()
                }
            }, 1500)
        },
        //滚动状态
        scroll(e) {
            if (e.y < -10) this.$store.commit('home/topStatistics', true)
            if (e.y > 10) this.$store.commit('home/topStatistics', false)
            console.log(e, 'scroll')
        },
        //查看详情
        showDetail(item, index) {
            this.$set(this.data[index], '_showDetail', !item._showDetail)
        }

    },
}
</script>
