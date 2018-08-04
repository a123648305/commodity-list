<style lang="less" scoped>
.common-tab-bar {
    .tab-list {
        display: flex;
        text-align: center;
        font-size: 24px;
        height: 38px; /*no*/
        background-color: #242133;
        color: #fff;
        li {
            float: left;
            flex: 1;
            overflow: hidden;
        }
        .text {
            display: inline-block;
            position: relative;
            margin-top: 13px; /*no*/
        }
        .line {
            position: absolute;
            top: 17px; /*no*/
            left: 0;
            width: 100%;
            height: 5px;
            background-color: #fff;
            border-radius: 5px;
        }
    }
}
</style>

<template>
    <div class="common-tab-bar">
        <ul class="tab-list">
            <li @click="showTab(1)">
                <div class="text">
                    <span>营业收入</span>
                    <span class="line" v-if="topBoxBarSelectInex===1"></span>
                </div>
            </li>
            <li @click="showTab(2)">
                <div class="text">
                    <span>售卡分成</span>
                    <span class="line" v-if="topBoxBarSelectInex===2"></span>
                </div>
            </li>
            <li @click="showTab(3)">
                <div class="text">
                    <span>消费佣金收入</span>
                    <span class="line" v-if="topBoxBarSelectInex===3"></span>
                </div>
            </li>
            <li @click="showTab(4)">
                <div class="text">
                    <span>消费佣金支出</span>
                    <span class="line" v-if="topBoxBarSelectInex===4"></span>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showIndex: 1
        }
    },
    computed: {
        topBoxBarSelectInex() {
            return this.$store.getters['home/topBoxBarSelectInex']
        }
    },
    mounted() {

    },
    methods: {
        showTab(item) {
            this.$store.commit('home/topBoxBarSelectInex', item)
            this.$emit('update')
        }
    },
}
</script>
