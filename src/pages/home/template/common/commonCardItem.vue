<style lang="less" scoped>
.common-card-item {
  background: #f0f4f7;
  width: 100%;
  position: absolute;
  padding: 19px 24px 0 24px;
  box-sizing: border-box;
  .item-box-top {
    padding: 25px 25px 27px 25px;
    background-color: #fff;
    border-radius: 20px 20px 0 0;
    .item-list {
      margin-bottom: 27px;
    }
    li:last-child {
      margin-bottom: 0px;
    }
    .dps {
      float: right;
    }
    .green-dps {
      float: right;
      color: #67c23a;
    }
    .orange-dps {
      float: right;
      color: #e6a23c;
    }
  }

  .item-box-bottom {
    background-color: #ffffff;
    border-top: 3px solid #f0f4f7;
    position: relative;
    padding: 27px 25px 18px 25px;
    margin-bottom: 19px;
    border-radius: 0 0 20px 20px;
    .left-solt {
      width: 20px;
      height: 20px;
      background-color: #f0f4f7;
      position: absolute;
      border-radius: 20px;
      top: -10px;
      left: -5px;
    }
    .right-solt {
      width: 20px;
      height: 20px;
      background-color: #f0f4f7;
      position: absolute;
      border-radius: 20px;
      top: -10px;
      right: -5px;
    }

    .item-box {
      padding: 27px 24px 26px 24px;
      background-color: #f9f9f9;
      margin: 18px 0 0px 0;
      color: #999999;
      .item-list {
        margin-bottom: 26px;
      }

      li:last-child {
        margin-bottom: 0px;
      }
    }
    .head {
      margin-top: 27px;
    }
    .dps {
      float: right;
    }
  }
}
</style>

<template>
    <div class="common-card-item">
        <div class="item-box-top">
            <ul>
                <li class="item-list">
                    <span class="title">时间</span>
                    <span class="dps">2018-12-02 15:30:20</span>
                </li>
                <li class="item-list">
                    <span>订单号</span>
                    <span class="dps">LMXF12356655</span>
                </li>
                <li class="item-list">
                    <span>订单状态</span>
                    <span class="orange-dps">退款中</span>
                </li>
                <li class="item-list">
                    <span>粉丝手机号</span>
                    <span class="dps">18814125786</span>
                </li>
                <li class="item-list">
                    <span>粉丝星球卡号</span>
                    <span class="dps">11111111</span>
                </li>
                <li class="item-list">
                    <span>实付金额</span>
                    <span class="dps">￥200.00</span>
                </li>
            </ul>
        </div>
        <div class="item-box-bottom">
            <div class="left-solt"></div>
            <div class="right-solt"></div>
            <ul>
                <li>
                    <span>消费明细</span>
                    <span></span>
                </li>
            </ul>
        </div>
        <div class="item-box-top">
            <ul>
                <li class="item-list">
                    <span class="title">时间</span>
                    <span class="dps">2018-12-02 15:30:20</span>
                </li>
                <li class="item-list">
                    <span>订单号</span>
                    <span class="dps">LMXF12356655</span>
                </li>
                <li class="item-list">
                    <span>订单状态</span>
                    <span class="green-dps">已退款</span>
                </li>
                <li class="item-list">
                    <span>粉丝手机号</span>
                    <span class="dps">18814125786</span>
                </li>
                <li class="item-list">
                    <span>粉丝星球卡号</span>
                    <span class="dps">11111111</span>
                </li>
                <li class="item-list">
                    <span>实付金额</span>
                    <span class="dps">￥200.00</span>
                </li>
            </ul>
        </div>
        <div class="item-box-bottom">
            <div class="left-solt"></div>
            <div class="right-solt"></div>
            <ul>
                <li>
                    <span>消费明细</span>
                    <span></span>
                </li>
            </ul>
            <ul class="item-box">
                <li class="item-list">
                    <span class="title">消费金额</span>
                    <span class="dps">￥100.00</span>
                </li>
                <li class="item-list">
                    <span class="title">消费金额</span>
                    <span class="dps">￥100.00</span>
                </li>
                <li class="item-list">
                    <span class="title">消费金额</span>
                    <span class="dps">￥100.00</span>
                </li>
            </ul>
            <ul>
                <li class="head">
                    <span>赠送服务/商品</span>
                </li>
            </ul>
            <ul class="item-box">
                <li class="item-list">
                    <span class="title">汽车</span>
                    <span class="dps">1</span>
                </li>
                <li class="item-list">
                    <span class="title">糖水</span>
                    <span class="dps">1</span>
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
