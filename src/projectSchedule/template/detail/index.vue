<style lang="less" scoped>
// <!-- 详情-延误 -->
.detail{
    letter-spacing: 1px;
    background-color:#000;
    height: 100%;
    position: absolute;
    .detail-title{
        width: 100%;
        text-align: center;
        color: #fff;
        font-size: 30px;
        padding-left: 25px;
        box-sizing: border-box;
        margin-top:44px;
        i{
            transform:rotate(180deg);
            float: left;
            font-size: 26px;
            color: #fff;
        }
        span{
            margin-left: -25px;
        }
       
    }
    .startime{
        height:50px;
        line-height:50px;
        margin-left: 20px;
        margin-right: 20px;
        font-Size: 22px;
        color: #ffbb00;
        border-Radius: 10px;
        background-Color: #16151a;
        padding-left: 34px;
         margin-top:45px;
        
        
    }
    .detail-content{
        margin-top: 25px;
        height:212px;
        margin-left:20px;
        margin-right:20px;
        padding-left:20px;
        padding-top:26px;
        border-Radius:10px;
        background-Color: #16151a;
        //box-sizing: border-box;
        h1{
            font-size: 30px;
            
            color: #fff;
        }
        p{
            font-size: 22px;
            color: #bdbdbd;
            line-height: 1.3;
        }
    }
    .detail-uptime{
        margin-top: 44px;
        .detail-uptime-title{
            //width: 100%;
            border-left: 10px solid #f5a623;
            padding-left: 15px;
            font-size: 24px;
            letter-spacing: 1px;
            color: #fff;
        }
        .detail-uptime-content{
            border-Radius: 10px;
            background-Color: #16151a;
            height:95px;
            margin-left: 20px;
            margin-right: 20px;
            //line-height: 63px;
            padding-left: 25px;
            color: #fff;
            margin-top:24px;
            display: flex;
            align-items: center;
            span{
                font-size: 25px;
                &:first-child{
                    float: left;
                    &::before{
                       content: "#";
                       font-size: 15px;

                    }
                    

                }
                &:last-child{
                    right: 47px;
                    position: absolute;
                    text-align: center;
                    border-bottom: 2px solid #946c05;
                    padding-bottom: 10px;
                    width: 62px;
                    p{
                        &:first-child{
                            color: #ff6767;
                            font-size: 30px;
                            b{
                                font-size: 25px;
                                font-weight: normal;
                            }
                        }
                        &:last-child{
                            color: #bdbdbd;
                            font-size: 15px;
                            margin-top: 8px;
                        }
                    }
                }
            }
        }
    }

    .detail-usetime{
        margin-top:44px;
        .detail-usetime-title{
            //width: 100%;
            border-left: 10px solid #f5a623;
            padding-left: 10px;
            font-size: 24px;
            letter-spacing: 1px;
            color: #fff;
        }
        .detail-usetime-content{
            border-Radius: 10px;
            background-Color: #16151a;
            height:95px;
            margin-left: 20px;
            margin-right: 20px;
            //line-height: 63px;
            padding-left: 25px;
            color: #fff;
            margin-top: 24px;
            display: flex;
            align-items: center;
            span{
                font-size: 25px;
                &:first-child{
                    float: left;
                    &::before{
                       content: "#";
                       font-size: 15px;

                    }
                    

                }
                &:last-child{
                    right: 47px;
                    position: absolute;
                    text-align: center;
                    color: #ff6767;
                    border-bottom: 2px solid #946c05;
                    padding-bottom: 10px;
                    width: 62px;
                    p{
                        color: #ff6767;
                        &:first-child{
                            font-size: 30px;
                            b{
                                font-weight: normal;
                                font-size: 25px;
                            }

                        }
                        &:last-child{
                            color: #bdbdbd;
                            font-size: 15px;
                            margin-top: 8px;
                            
                        }
                    }
                                        

                }
            }
        }
    }

}
</style>
       
<template>
    <div>
        <!-- 详情-延误 -->
      <div class="detail">
          <div class="detail-title"> <router-link to="/test">
                            <i class="iconfont icon-you"></i>
                            </router-link><span>详情</span></div>
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
                  <span><p>8<b>天</b></p>
                  <p>延误</p></span>
                  
                  </div>
          </div>
          <div class="detail-usetime">
              <div class="detail-usetime-title">正式环境上线日期</div>
              <div class="detail-usetime-content">
                  <span>2018年08月01日</span>
                  <span><p>1<b>天</b></p>
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