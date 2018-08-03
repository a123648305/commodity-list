<style lang="less" scoped>
.item-box-top {
    margin-bottom: 20px;
    border-radius: 20px;
}
</style>

<template>
    <common-scroll ref="scroll" :scrollbar="true" :listenScroll="true" :pullDownRefresh="true" :pullUpLoad="true" :startY="parseInt(startY)" @pullingDown="onPullingDown" @pullingUp="onPullingUp" @scroll="scroll">
        <div slot="content" class="common-card-bg">
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
                            <span>办卡商家</span>
                            <span class="dps">广东谷通科技</span>
                        </li>
                        <li class="item-list">
                            <span>消费金额</span>
                            <span class="dps">￥200.00</span>
                        </li>
                        <li class="item-list">
                            <span>佣金支出</span>
                            <span class="dps">￥200.00</span>
                        </li>
                        <li class="item-list">
                            <span>订单已退款</span>
                            <span class="dps">返回佣金￥60.0</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </common-scroll>
</template>

<script>
export default {
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
            console.log(e, 'eee')
            if (e.y < -10) this.$store.commit('home/topStatisticsAnimate', true)
            if (e.y > 10) this.$store.commit('home/topStatisticsAnimate', false)
        },
        //查看详情
        showDetail(item, index) {
            this.$set(this.data[index], '_showDetail', !item._showDetail)
        }

    },
}
</script>
