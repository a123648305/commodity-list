<style lang="less" scoped>
.tab-box-index {
    .tab-list {
        display: flex;
        text-align: center;
        font-size: 24px;
        height: 85px;
        background-color: #242133;
        color: #fff;
        li {
            float: left;
            flex: 1;
        }
        .text {
            display: inline-block;
            position: relative;
            margin-top: 27px;
        }
        .line {
            position: absolute;
            top: 40px;
            left: 0;
            width: 100%;
            height: 5px;
            background-color: #fff;
            border-radius: 20px;
        }
    }
    .container {
        background-color: #f0f4f7;
    }
}
</style>

<template>
    <div class="tab-box-index">
        <ul class="tab-list">
            <li @click="showTab(1)">
                <div class="text">
                    <span>营业收入</span>
                    <span class="line" v-show="showIndex===1"></span>
                </div>
            </li>
            <li @click="showTab(2)">
                <div class="text">
                    <span>售卡分成</span>
                    <span class="line" v-show="showIndex===2"></span>
                </div>
            </li>
            <li @click="showTab(3)">
                <div class="text">
                    <span>消费佣金收入</span>
                    <span class="line" v-show="showIndex===3"></span>
                </div>
            </li>
            <li @click="showTab(4)">
                <div class="text">
                    <span>消费佣金支出</span>
                    <span class="line" v-show="showIndex===4"></span>
                </div>
            </li>
        </ul>
        <div class="container">
            <!-- 营业收入 -->
            <operating-incom v-show="showIndex===1"></operating-incom>
            <!-- 售卡分成 -->
            <sale-card v-show="showIndex===2"></sale-card>
            <!-- 消费佣金收入 -->
            <commission-income v-show="showIndex===3"></commission-income>
            <!-- 消费佣金支出 -->
            <commission-expenditure v-show="showIndex===4"></commission-expenditure>
            <!--<business-spacedata></business-spacedata>-->
            <!--<salecard-emptydata></salecard-emptydata>-->
            <!--<income-emptydata></income-emptydata>-->
            <!-- <expenditure-emptydata></expenditure-emptydata> -->
        </div>
    </div>
</template>

<script>
import operatingIncom from './operatingIncom'
import saleCard from './saleCard'
import commissionIncome from './commissionIncome'
import commissionExpenditure from './commissionExpenditure'

import businessEmptydata from './businessEmptydata'
import salecardEmptydata from './salecardEmptydata'
import incomeEmptydata from './incomeEmptydata'
import expenditureEmptydata from './expenditureEmptydata'
export default {
    components: { operatingIncom, saleCard, commissionIncome, commissionExpenditure, businessEmptydata, salecardEmptydata, incomeEmptydata, expenditureEmptydata },
    data() {
        return {
            showIndex: 1
        }
    },
    computed: {

    },
    mounted() {

    },
    methods: {
        showTab(item) {
            this.showIndex = item
            console.log(item, '99')
        }
    },
}
</script>
