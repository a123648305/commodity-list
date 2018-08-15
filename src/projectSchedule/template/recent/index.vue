<style lang="less" scoped>
.recent{
    background-color: #000;
    .recent-delay{
        .recent-delay-title{
            width: 100%;
            border-left: 7px solid #f5a623;
            font-size:16px;
            height:20px;
            line-height: 20px; 
            box-sizing: border-box;
            padding-left: 11px;
            color: #fff;
        }
    }
        ul{
            background-color: #000;
            height: 200px;
            margin-top: 20px;
            letter-spacing: 1px;
            li{
                list-style-type: none;
                padding-left: 10px;
                padding-right: 14px;
                font-size: 17px;
                

                .uptime{
                    float: left;
                    p{
                        &:first-child{
                            color: #fff;
                            &::before{
                                content: "#";
                                font-size: 10px;
                            }
                        }
                        &:last-child{
                            color:#bdbdbd;
                            font-size: 10px;
                            margin-top:5px;
                            
                        }
                        
                    }
                }
                .upcontent{
                    //background-color: #f5a623;
                    border-bottom: 1px solid #946c05;
                    //padding: 17px 0; 
                    height: 79px;
                    float: left; 
                    margin-left:26px;
            
                .upname{
                    float: left;
                    p{
                        &:first-child{
                            color: #fff;
                           
                        }
                        &:last-child{
                            color:#bdbdbd;
                            font-size: 15px;
                            margin-top:5px;
                            
                        }
                        
                    }
                }
                .delay-time{
                    float: right;
                    margin-left: 26px;
                    p{
                        &:first-child{
                            color: #fff;
                           
                        }
                        &:last-child{
                            color:#bdbdbd;
                            font-size: 15px;
                            margin-top:5px;
                            
                        }
                        
                    }
                }
               
                }
                 .delay-right{
                    float: right;
                    display: flex;
                    align-items: center;
                    height:79px;
                    i{
                        color: #f5a623;
                    }
                }
            }
        }
        .recent-plan{
            .recent-plan-title{
                width: 100%;
                border-left: 7px solid #f5a623;
                font-size:16px;
                height:20px;
                line-height: 20px; 
                box-sizing: border-box;
                padding-left: 11px;
                color: #fff;
            }
            .plan-time{
                    float: right;
                    margin-left: 26px;
                    p{
                        &:first-child{
                            color: #19c8a9;
                           
                        }
                        &:last-child{
                            color:#bdbdbd;
                            font-size: 15px;
                            margin-top:5px;
                            
                        }
                        
                    }
                }
        }
    
}
</style>
       
<template>
    <div>
        <!-- 近期 -->
      <div class="recent">
          <!-- 上线延误 -->
          <div class="recent-delay">
             <div class="recent-delay-title"><span>上线延误</span></div>
             <ul>
                 <li>
                    <div class="uptime">
                        <p>8月10日</p>
                        <p>原定测试上线</p>
                    </div>
                 <div class="upcontent">
                    <div class="upname">
                        <p>小红十V1.0.0</p>
                        <p>新版后台、手机端、小程序</p>
                    </div>
                    <div class="delay-time">
                        <p>4tian</p>
                        <p>延误</p> 
                       
                    </div>
                   
                 </div>
                  <div class="delay-right">
                        <i class="iconfont icon-you "></i>
                    </div>
                 
                
                    </li>
                     
                     <li>
                    <div class="uptime">
                        <p>8月10日</p>
                        <p>原定测试上线</p>
                    </div>
                 <div class="upcontent">
                    <div class="upname">
                        <p>小红十V1.0.0</p>
                        <p>新版后台、手机端、小程序</p>
                    </div>
                    <div class="delay-time">
                        <p>4tian</p>
                        <p>延误</p> 
                       
                    </div>
                   
                 </div>
                  <div class="delay-right">
                        <i class="iconfont icon-you "></i>
                    </div>
                 
                
                    </li>
                  
                 <li></li>
             </ul>
          </div>
          <!-- 近期上线计划 -->
          <div class="recent-plan">
              <div class="recent-plan-title"><span>近期上线计划</span></div>
             <ul>
                 <li>
                    <div class="uptime">
                        <p>8月10日</p>
                        <p>原定测试上线</p>
                    </div>
                 <div class="upcontent">
                    <div class="upname">
                        <p>小红十V1.0.0</p>
                        <p>新版后台、手机端、小程序</p>
                    </div>
                    <div class="plan-time">
                        <p>28天</p>
                        <p>倒计时</p> 
                       
                    </div>
                   
                 </div>
                  <div class="delay-right">
                        <i class="iconfont icon-you "></i>
                    </div>
                 
                
                    </li>
                    <li>
                    <div class="uptime">
                        <p>8月10日</p>
                        <p>原定测试上线</p>
                    </div>
                 <div class="upcontent">
                    <div class="upname">
                        <p>小红十V1.0.0</p>
                        <p>新版后台、手机端、小程序</p>
                    </div>
                    <div class="plan-time">
                        <p>4tian</p>
                        <p>延误</p> 
                       
                    </div>
                   
                 </div>
                  <div class="delay-right">
                        <i class="iconfont icon-you "></i>
                    </div>
                 
                
                    </li>
                    <li>
                    <div class="uptime">
                        <p>8月10日</p>
                        <p>原定测试上线</p>
                    </div>
                 <div class="upcontent">
                    <div class="upname">
                        <p>小红十V1.0.0</p>
                        <p>新版后台、手机端、小程序</p>
                    </div>
                    <div class="plan-time">
                        <p>4tian</p>
                        <p>延误</p> 
                       
                    </div>
                   
                 </div>
                  <div class="delay-right">
                        <i class="iconfont icon-you "></i>
                    </div>
                 
                
                    </li>
                     
                     <li>
                    <div class="uptime">
                        <p>8月10日</p>
                        <p>原定测试上线</p>
                    </div>
                 <div class="upcontent">
                    <div class="upname">
                        <p>小红十V1.0.0</p>
                        <p>新版后台、手机端、小程序</p>
                    </div>
                    <div class="plan-time">
                        <p>4tian</p>
                        <p>延误</p> 
                       
                    </div>
                   
                 </div>
                  <div class="delay-right">
                        <i class="iconfont icon-you "></i>
                    </div>
                 
                
                    </li>
                  
                 <li></li>
             </ul>
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