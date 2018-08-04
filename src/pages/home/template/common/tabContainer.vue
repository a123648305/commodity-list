<style lang="less" scoped>
</style>

<template>
    <div class="common-tab-box">
        <div class="tabbox-top-bg" v-if="!topStatisticsAnimate"></div>
        <slot></slot>
    </div>
</template>

<script>
export default {
    data() {
        return {

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

    },
}
</script>
