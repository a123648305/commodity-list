<style lang="less" scoped>
.common-card-nums {
    overflow: hidden;
    position: relative;
    .item-top {
        padding: 51px 23px;
        background-color: #fff;
        font-size: 36.25px;
        border-radius: 25px;
        font-weight: bold;
        margin-bottom: 20px;
        .dps {
            float: right;
        }
    }
}
</style>

<template>
    <tab-container>
        <div class="common-card-nums">
            <div class="item-top">
                <ul>
                    <li>
                        <span class="title">售卡数量</span>
                        <span class="dps">200</span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="common-card-item" v-for="(item,index) in data" :key="index">
            <div class="item-box-top">
                <ul>
                    <li class="item-list">
                        <span class="title">时间</span>
                        <span class="dps">2018-12-02 15:30:20</span>
                    </li>
                    <li class="item-list">
                        <span>粉丝手机号</span>
                        <span class="dps">18814125786</span>
                    </li>
                    <li class="item-list">
                        <span>粉丝星球卡号</span>
                        <span class="green-dps">11111111</span>
                    </li>
                    <li class="item-list">
                        <span>活动卡名称</span>
                        <span class="dps">惠州大众</span>
                    </li>
                </ul>
            </div>
            <div class="item-box-bottom">
                <div class="left-solt"></div>
                <div class="right-solt"></div>
                <div class="item-box-top">
                    <ul>
                        <li class="item-list">
                            <span>金额</span>
                            <span class="dps">￥200.00</span>
                        </li>
                        <li class="item-list">
                            <span>分成比例</span>
                            <span class="green-dps">30%</span>
                        </li>
                        <li class="item-list">
                            <span>分成佣金</span>
                            <span class="dps">￥60.00</span>
                        </li>
                    </ul>
                </div>
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
            data: [3134, 234, 234, 234, 23523, 25, 25325, 32]
        }
    },
    computed: {

    },
    mounted() {

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
