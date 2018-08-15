<style lang="less" scoped>
.detail{
    letter-spacing: 1px;
    .detail-title{
        width: 100%;
        text-align: center;
        color: #fff;
        font-size: 20px;
    }
    .startime{
        height: 33px;
        line-height: 33px;
        margin-left: 13px;
        margin-right: 13px;
        font-Size: 15;
        color: #ffbb00;
        border-Radius: 7px;
        background-Color: #16151a;
        padding-left: 23px;
        
        
    }
    .detail-content{
        margin-top: 29px;
        height: 141px;
        margin-left: 13px;
        margin-right: 13px;
        padding-left: 13px;
        padding-top: 17px;
        border-Radius: 7px;
        background-Color: #16151a;
        //box-sizing: border-box;
        h1{
            font-size: 20px;
            
            color: #fff;
        }
        p{
            font-size: 15px;
            color: #bdbdbd;
        }
    }
    .detail-uptime{
        margin-top: 29px;
        .detail-uptime-title{
            //width: 100%;
            border-left: 7px solid #f5a623;
            padding-left: 10px;
            font-size: 16px;
            letter-spacing: 1px;
            //color: #fff;
        }
        .detail-uptime-content{
            border-Radius: 7px;
            background-Color: #16151a;
            height:63px;
            margin-left: 13px;
            margin-right: 13px;
            line-height: 63px;
            padding-left: 17px;
            color: #fff;
            span{
                &:first-child{
                    float: left;
                    

                }
                &:last-child{
                    float: right;
                    

                }
            }
        }
    }

}
</style>
       
<template>
    <div>
      <div class="detail">
          <div class="detail-title">详情</div>
          <div class="startime">项目开始时间:2018-04-25</div>
          <div class="detail-content">
              <h1>多粉星球V1.0.0</h1>
              <p>新版后台、手机端、小程序的，上线的相关文案描述
                新版后台、手机端、小程序的，上线的相关文案描述
                新版后台、手机端、小程序的，上线的相关文案描述
                新版后台、手机端、小程序的，上线的相关文案描述</p>
          </div>
          <div class="detail-uptime">
              <div class="detail-uptime-title">测试环境上线日期</div>
              <div class="detail-uptime-content">
                  <span>2018年08月01日</span>
                  <span><p>8天</p>
                  <p>延误</p></span>
                  
                  </div>
          </div>
          <div class="detail-usetime">
              <div class="detail-useime-title">测试环境上线日期</div>
              <div class="detail-usetime-content">
                  <span>2018年08月01日</span>
                  <span><p>8天</p>
                  <p>延误</p></span>
                  
                  </div>
          </div>
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