<style lang="less" scoped>
.tab-box-index {
    .tab-list {
        display: flex;
        text-align: center;
        li {
            float: left;
            flex: 1;
        }
    }
}
</style>

<template>
    <div class="tab-box-index">
        <ul class="tab-list">
            <li>营业收入</li>
            <li>售卡分成</li>
            <li>消费佣金收入</li>
            <li>消费佣金支出</li>
        </ul>
        <div class="container">
            <operating-incom></operating-incom>
        </div>
    </div>
</template>

<script>
import operatingIncom from './operatingIncom'
export default {
    components: { operatingIncom },
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
