<style lang="less" scoped>
.detail{
    letter-spacing: 1px;
    background-color:#000;
    height: 100%;
    position: absolute;
    .detail-title{
        width: 100%;
        text-align: center;
        color: #fff;
        font-size: 20px;
        padding-left: 17px;
        box-sizing: border-box;
        margin-top:35px;
        i{
            transform:rotate(180deg);
            float: left;
            font-size: 17px;
            
        }
        span{
            margin-left: -17px;
        }
       
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
         margin-top: 30px;
        
        
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
            font-weight: normal;
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
            color: #fff;
        }
        .detail-uptime-content{
            border-Radius: 7px;
            background-Color: #16151a;
            height:63px;
            margin-left: 13px;
            margin-right: 13px;
            //line-height: 63px;
            padding-left: 17px;
            color: #fff;
            margin-top: 16px;
            display: flex;
            align-items: center;
            span{
                &:first-child{
                    float: left;
                    &::before{
                       content: "#";
                       font-size: 10px;

                    }
                    

                }
                &:last-child{
                    right: 43px;
                    position: absolute;
                    text-align: center;
                    border-bottom: 1px solid #946c05;
                    padding-bottom: 7px;
                    width: 43px;
                    p{
                        &:first-child{
                            color: #ff6767;
                            font-size: 20px;
                            b{
                                font-size: 17px;
                                font-weight: normal;
                            }
                        }
                        &:last-child{
                            color: #bdbdbd;
                            font-size: 10px;
                            margin-top: 5px;
                        }
                    }
                }
            }
        }
    }

    .detail-usetime{
        margin-top: 29px;
        .detail-usetime-title{
            //width: 100%;
            border-left: 7px solid #f5a623;
            padding-left: 10px;
            font-size: 16px;
            letter-spacing: 1px;
            color: #fff;
        }
        .detail-usetime-content{
            border-Radius: 7px;
            background-Color: #16151a;
            height:63px;
            margin-left: 13px;
            margin-right: 13px;
            //line-height: 63px;
            padding-left: 17px;
            color: #fff;
            margin-top: 16px;
            display: flex;
            align-items: center;
            span{
                &:first-child{
                    float: left;
                    &::before{
                       content: "#";
                       font-size: 10px;

                    }
                    

                }
                &:last-child{
                    right: 43px;
                    position: absolute;
                    text-align: center;
                    font-Size: 20px;
                    color: #ff6767;
                    border-bottom: 1px solid #946c05;
                    padding-bottom: 7px;
                    width: 43px;
                    p{
                        &:first-child{
                            font-size: 20px;
                            b{
                                font-weight: normal;
                                font-size: 17px;
                            }

                        }
                        &:last-child{
                            color: #bdbdbd;
                            font-size: 10px;
                            margin-top: 5px;
                            
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
      <div class="detail">
          <div class="detail-title"><i class="iconfont icon-you"></i><span>详情</span></div>
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