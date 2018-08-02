<style lang="less" scoped>
.top-statistics-box {
    height: 335px;
    background-color: #242133;
    overflow: hidden;
    border: 1px solid orange;
    box-sizing: border-box;
    -webkit-animation-duration: 0.5s;
    animation-duration: 0.5s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    &.slideOutDown {
        animation-name: slideOutDown;
    }
    &.slideOutUp {
        animation-name: slideOutUp;
    }
    @keyframes slideOutDown {
        from {
            margin-top: -335px;
        }

        to {
            margin-top: 0;
        }
    }

    @keyframes slideOutUp {
        from {
            margin-top: 0;
        }
        to {
            margin-top: -335px;
        }
    }
}
</style>

<template>
    <div>
        <!-- 头部统计栏 -->
        <div :class="topStatistics?'top-statistics-box slideOutUp':'top-statistics-box slideOutDown'">
            <top-statistics></top-statistics>
        </div>
        <!-- 中心tab切换栏 -->
        <div>
            <tab-box></tab-box>
        </div>
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
        topStatistics() {
            return this.$store.getters['home/topStatistics']
        }
    },
    mounted() {

    },
    methods: {

    },
}
</script>
