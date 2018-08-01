<style lang="less" scoped>
.salecard-item {
  background: #f0f4f7;
  width: 100%;
  box-sizing: border-box;
  padding: 0 24px;
  .item-top {
    padding: 51px 23px;
    background-color: #fff;
    font-size: 36.25px;
    border-radius: 25px;
    font-weight: bold;
    .dps {
      float: right;
    }
  }
  .item-content {
    color: #404040;
    background-color: #fff;
    margin-top: 18px;
    padding: 27px 24px;
    font-size: 24.17px;
    border-radius: 25px 25px 0 0;
    .item-list {
      margin-bottom: 25px;
    }
    li:last-child {
      margin-bottom: 0;
    }
    .dps {
      float: right;
    }
  }
  .item-content-bottom {
    color: #404040;
    font-size: 24.17px;
    background-color: #fff;
    border-top: 2px solid #f0f4f7;
    padding: 27px 24px;
    position: relative;
    .left-solt {
      width: 20px;
      height: 20px;
      background-color: #f0f4f7;
      position: absolute;
      border-radius: 10px;
      top: -10px;
      left: -5px;
    }
    .right-solt {
      width: 20px;
      height: 20px;
      background-color: #f0f4f7;
      position: absolute;
      border-radius: 10px;
      top: -10px;
      right: -5px;
    }
    .item-list {
      margin-bottom: 25px;
    }
    li:last-child {
      margin-bottom: 0;
    }
    .dps {
      float: right;
    }
  }
  .item-bottom {
    color: #404040;
    background-color: #fff;
    padding: 27px 24px;
    font-size: 24.17px;
    margin-top: 18px;
    .item-list {
      margin-bottom: 25px;
    }
    li:last-child {
      margin-bottom: 0;
    }
    .dps {
      float: right;
    }
  }
}
</style>

<template>
    <div class="salecard-item">
        <div class="item-top">
            <ul>
                <li>
                    <span class="title">售卡数量</span>
                    <span class="dps">200</span>
                </li>
            </ul>
        </div>
        <div class="item-content">
            <ul>
                <li class="item-list">
                    <span class="title">时间</span>
                    <span class="dps">2018-12-01 15:30:20</span>
                </li>
                <li class="item-list">
                    <span class="title">粉丝手机号</span>
                    <span class="dps">18814125786</span>
                </li>
                <li class="item-list">
                    <span class="title">粉丝星球卡号</span>
                    <span class="dps">11111111</span>
                </li>
                <li class="item-list">
                    <span class="title">活动卡名称</span>
                    <span class="dps">惠州大众</span>
                </li>
            </ul>
        </div>
        <div class="item-content-bottom">
            <div class="left-solt"></div>
            <div class="right-solt"></div>
            <ul>
                <li class="item-list">
                    <span class="title">金额</span>
                    <span class="dps">￥200.00</span>
                </li>
                <li class="item-list">
                    <span class="title">分成比例</span>
                    <span class="dps">30%</span>
                </li>
                <li class="item-list">
                    <span class="title">分成佣金</span>
                    <span class="dps">￥60.00</span>
                </li>
            </ul>
        </div>
        <div class="item-bottom">
            <ul>
                <li class="item-list">
                    <span class="title">时间</span>
                    <span class="dps">15:30:20</span>
                </li>
                <li class="item-list">
                    <span class="title">粉丝手机号</span>
                    <span class="dps">18814125786</span>
                </li>
                <li class="item-list">
                    <span class="title">粉丝星球卡号</span>
                    <span class="dps">11111111</span>
                </li>
                <li class="item-list">
                    <span class="title">活动卡名称</span>
                    <span class="dps">惠州大众</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
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
