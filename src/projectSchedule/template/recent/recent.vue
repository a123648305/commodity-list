<style lang="less" scoped>
    .recent{
        .recent-delay{
            .recent-delay-title{
                color: #fff;
                border-left: 7px solid #f5a623;
                padding-left: 11px;
            }
        }
         .recent-plan{
             margin-top: 36px;
            .recent-plan-title{
                color: #fff;
                border-left: 7px solid #f5a623;
                padding-left: 11px;
            }
            ul{
                li{
                    .upcontent{
                        .plan-time{
                            // float: right;
                            // margin-left: 26px;
                            p{
                                &:first-child{
                                    font-Size: 20px;
                                    color: #19c8a9;
                                    b{
                                        font-size: 17px;
                                        font-weight: normal;
                                    }
                                }
                                &:last-child{
                                    color:#bdbdbd;
                                    font-size: 10px;
                                    margin-top:5px;
                                    
                                }
                                
                            }
                    }

                    }
                }
            }
         
           
           
        }


        ul{
            width: 100%;
            margin-top: 20px;
            letter-spacing: 1px;
            li{ 
                list-style-type: none;
                padding-left: 10px;
                padding-right: 14px;
                font-size: 17px;
                margin-top: 17px;
                //border: 1px solid red;
                height: 79px;
                display: flex;
                align-items: center;
                width: 100%;
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
                    display: flex;
                    align-items: center;
                    width: 65%;
            
                .upname{
                    float: left;
                    p{
                        &:first-child{
                            color: #fff;
                           
                        }
                        &:last-child{
                            color:#bdbdbd;
                            font-size: 15px;
                            margin-top:15px;
                            
                        }
                        
                    }
                }
                .delay-time{
                    // float: right;
                    // margin-left: 26px;
                    position: absolute;
                    right: 30px;
                    p{
                        &:first-child{
                            font-Size: 20px;
	                        color: #ff6767;
                            b{
                                font-size: 17px;
                                font-weight: normal;
                            }
                        }
                        &:last-child{
                            color:#bdbdbd;
                            font-size: 10px;
                            margin-top:5px;
                            
                        }
                        
                    }
                }
               
                }
                 .recent-right{
                    float: right;
                    display: flex;
                    align-items: center;
                    height:79px;
                    margin-left: 8px;
                    i{
                        color: #916b05;
                    }
                }
            }
        }
}
</style>
       
<template>
    <div>
        <!-- 近期-->
      <div class="recent">
          <!-- 上线延误 -->
          <div class="recent-delay">
          <div class="recent-delay-title">
                    <span>上线延误</span>
                </div>
             
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
                        <p>4<b>天</b></p>
                        <p>倒计时</p> 
                       
                    </div>
                   
                 </div>
                  <div class="recent-right">
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
                        <p>4<b>天</b></p>
                        <p>倒计时</p> 
                       
                    </div>
                   
                 </div>
                  <div class="recent-right">
                        <i class="iconfont icon-you "></i>
                    </div>
                 
                
                    </li>                 
             </ul>
          </div>

          <!-- 上线计划 -->
          <div class="recent-plan"> 
          <div class="recent-plan-title">
                    <span>近期上线计划</span>
                </div>
             
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
                            <div class="delay-time plan-time">
                                <p>4<b>天</b></p>
                                <p>倒计时</p> 
                            
                            </div>
                        
                        </div>
                        <div class="recent-right">
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
                                <p>手机端</p>
                            </div>
                            <div class="delay-time plan-time">
                                <p>4<b>天</b></p>
                                <p>倒计时</p> 
                            
                            </div>
                        
                        </div>
                        <div class="recent-right">
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
                                <p>手机端</p>
                            </div>
                            <div class="delay-time plan-time">
                                <p>4<b>天</b></p>
                                <p>倒计时</p> 
                            
                            </div>
                        
                        </div>
                        <div class="recent-right">
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
                                <p>新版后台</p>
                            </div>
                            <div class="delay-time plan-time">
                                <p>4<b>天</b></p>
                                <p>倒计时</p> 
                            
                            </div>
                        
                        </div>
                        <div class="recent-right">
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
                            <div class="delay-time plan-time">
                                <p>4<b>天</b></p>
                                <p>倒计时</p> 
                            
                            </div>
                        
                        </div>
                        <div class="recent-right">
                                <i class="iconfont icon-you "></i>
                            </div>
                 
                
                    </li>

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