<style lang="less" scoped>
.home-index-box {
    .tab-box-bar {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 85px;
        z-index: 3;
    }
    .tab-box-container {
        position: relative;
        &.margin-top {
            margin-top: 20px;
        }
    }
}
</style>

<template>
    <div class="home-index-box">
        <!-- 顶部固定tab -->
        <tab-box-bar @update="updateTab" v-show="topStatisticsAnimate" class="tab-box-bar"></tab-box-bar>
        <common-scroll ref="scroll" :showPullDownTips="true" :scrollbar="true" :listenScroll="true" :pullDownRefresh="true" :pullUpLoad="true" :scrollToY="(scrollToY)" @pullingDown="onPullingDown" @pullingUp="onPullingUp" @scroll="scroll">
            <div slot="content" class="container-box">
                <!-- 统计栏 + tab -->
                <div>
                    <!-- 统计栏 -->
                    <top-statistics></top-statistics>
                    <!-- tab -->
                    <tab-box-bar @update="updateTab"></tab-box-bar>
                </div>
                <div :class="topStatisticsAnimate?'tab-box-container margin-top':'tab-box-container'">
                    <!-- 营业收入 -->
                    <operating-incom v-show="topBoxBarSelectInex===1"></operating-incom>
                    <!-- 售卡分成 -->
                    <sale-card v-show="topBoxBarSelectInex===2"></sale-card>
                    <!-- 消费佣金收入 -->
                    <commission-income v-show="topBoxBarSelectInex===3"></commission-income>
                    <!-- 消费佣金支出 -->
                    <commission-expenditure v-show="topBoxBarSelectInex===4"></commission-expenditure>
                </div>
            </div>
        </common-scroll>
    </div>
</template>

<script>
import topStatistics from './template/topStatistics'
import tabBoxBar from './template/common/tabBar'
import operatingIncom from './template/tabBox/operatingIncom'
import saleCard from './template/tabBox/saleCard'
import commissionIncome from './template/tabBox/commissionIncome'
import commissionExpenditure from './template/tabBox/commissionExpenditure'
export default {
    components: { topStatistics, tabBoxBar, operatingIncom, saleCard, commissionIncome, commissionExpenditure },
    data() {
        return {
            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 22, 0, 2, 3, 4, 5, 6, 7, 8, 9, 22, 0, 2, 3, 4, 5, 6, 7, 8, 9, 22, 0],
            scrollToY: 0,
            touchstartY: 0,

        }
    },
    computed: {
        topStatisticsAnimate() {
            return this.$store.getters['home/topStatisticsAnimate']
        },
        topBoxBarSelectInex() {
            return this.$store.getters['home/topBoxBarSelectInex']
        }
    },
    mounted() {
        //初始化营业收入
        this.$store.commit('home/topStatisticsAnimate', false)
    },
    methods: {
        // 下拉更新数据
        onPullingDown() {
            console.log('pulling down and load data')
            setTimeout(() => {
                this.$refs.scroll.forceUpdate()
            }, 1000)
        },
        //滚动加载更新数据
        onPullingUp() {
            console.log('pulling up and load data')
            setTimeout(() => {
                let newPage = []
                for (let i = 30; i < 50; i++) {
                    newPage.push({
                        index: i,
                        name: 'name---' + i
                    })
                }
                this.data = this.data.concat(newPage)
                this.$refs.scroll.forceUpdate()
            }, 1000)
        },
        //滚动状态
        scroll(e) {
            if (e.y <= -213) this.$store.commit('home/topStatisticsAnimate', true)
            if (e.y < 0 && e.y >= -213) this.$store.commit('home/topStatisticsAnimate', false)
        },
        //选择类型
        updateTab() {
            if (!this.topStatisticsAnimate) return false
            this.$refs.scroll.scrollTo()
        }
    },
}
</script>
