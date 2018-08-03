<style lang="less" scoped>
</style>

<template>
    <common-scroll ref="scroll" :scrollbar="true" :listenScroll="true" :pullDownRefresh="true" :pullUpLoad="true" :startY="parseInt(startY)" @pullingDown="onPullingDown" @pullingUp="onPullingUp" @scroll="scroll">
        <div slot="content">
            <!-- 头部统计栏 -->
            <div :class="topStatisticsAnimate?'top-statistics-box slideOutUp':'top-statistics-box slideOutDown'">
                <top-statistics></top-statistics>
            </div>
            <!-- 中心tab切换栏 -->
        </div>
    </common-scroll>
</template>

<script>
import topStatistics from './template/topStatistics/index'
import tabBox from './template/tabBox/index'
export default {
    components: { topStatistics, tabBox },
    data() {
        return {

            startY: 0,
            data: []
        }
    },
    computed: {
        topStatisticsAnimate() {
            return this.$store.getters['home/topStatisticsAnimate']
        }
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
