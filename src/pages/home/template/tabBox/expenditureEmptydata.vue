<style lang="less" scoped>
.item-expenditureEmptydata {
  background-color: #f0f4f7;
  width: 100%;
  .item-content {
    margin: 0 auto;
  }
  /*img start*/
  .spacedata {
    margin-top: 165px;
    width: 202px;
    height: 230px;
  }
  /*img end*/
  .item-list {
    margin-bottom: 53px;
    text-align: center;
  }
  /*title start*/
  .title {
    font-size: 27.19px;
    color: #999999;
  }
  /*title end*/
}
</style>

<template>
    <div class="item-expenditureEmptydata">
        <div class="item-content">
            <ul>
                <li class="item-list">
                    <img src="./../../../../assets/images/poster/data.jpg" class="spacedata">
                </li>
                <li class="item-list">
                    <span class="title">暂无数据</span>
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