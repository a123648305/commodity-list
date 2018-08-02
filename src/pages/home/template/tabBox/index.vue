<style lang="less" scoped>
.tab-box-index {
  .tab-list {
    display: flex;
    text-align: center;
    font-size: 24px;
    height: 92px;
    background-color: #242133;
    color: #fff;
    li {
      float: left;
      flex: 1;
    }
    li:first-child {
      margin-left: 22px;
    }
    .line {
      width: 97px;
      height: 5px;
      background-color: #fff;
      margin: 0 auto;
      margin-top: 14px;
      border-radius: 100px;
    }
  }
}
</style>

<template>
    <div class="tab-box-index">
        <ul class="tab-list">
            <li>营业收入
                <div class="line"></div>
            </li>
            <li>售卡分成</li>
            <li>消费佣金收入</li>
            <li>消费佣金支出</li>
        </ul>
        <div class="container">
            <!--<operating-incom></operating-incom>-->
            <!--<sale-card></sale-card>-->
            <!--<commission-income></commission-income>-->
            <!--<commission-expenditure></commission-expenditure>-->
            <business-spacedata></business-spacedata>
        </div>
    </div>
</template>

<script>
import operatingIncom from './operatingIncom'
import saleCard from './saleCard'
import commissionIncome from './commissionIncome'
import commissionExpenditure from './commissionExpenditure'
import businessSpacedata from './businessSpacedata'
export default {
    components: { operatingIncom, saleCard, commissionIncome, commissionExpenditure, businessSpacedata },
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
