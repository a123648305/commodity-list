<style lang="less" scoped>
</style>

<template>
    <div>
        <!-- 头部统计栏 -->
        <top-statistics></top-statistics>
        <!-- 中心tab切换栏 -->
        <tab-box></tab-box>
    </div>
</template>

<script>
import topStatistics from './template/topStatistics/index'
import tabBox from './template/tabBox/index'
export default {
    components: { topStatistics, tabBox },
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
