<style lang="less" scoped>
// 近期
    .projectSchedule-recent-index{
        // height: 100%;
        // width: 100%;
        // position:absolute;
        // background-color: #000;
        .recent-delay{
            .recent-delay-title{
                color: #fff;
                border-left: 10px solid #f5a623;
                padding-left: 25px;
                font-size: 30px;
            }
        }
         .recent-plan{
             margin-top: 36px;
            .recent-plan-title{
                color: #fff;
                border-left: 10px solid #f5a623;
                padding-left: 25px;
                font-size: 30px;
            }
            ul{
                li{
                    .upcontent{
                        .plan-time{
                            // float: right;
                            // margin-left: 26px;
                            p{
                                &:first-child{
                                    font-Size: 30px;
                                    color: #19c8a9;
                                    b{
                                        font-size: 25px;
                                        font-weight: normal;
                                    }
                                }
                                &:last-child{
                                    color:#bdbdbd;
                                    font-size: 15px;
                                    margin-top:8px;
                                    
                                }
                                
                            }
                    }

                    }
                }
            }
         
           
           
        }


        ul{
            width: 100%;
            margin-top: 30px;
            letter-spacing: 1px;
            li{ 
                list-style-type: none;
                padding-left: 15px;
                padding-right: 20px;
                font-size: 25px;
                //margin-top: 25px;
                //border: 1px solid red;
                //height: 79px;
                display: flex;
                align-items: center;
                width: 100%;
                .uptime{
                    float: left;
                    p{
                        font-size: 25px;
                        &:first-child{
                            color: #fff;
                            &::before{
                                content: "#";
                                font-size: 15px;
                            }
                        }
                        &:last-child{
                            color:#bdbdbd;
                            font-size: 15px;
                            margin-top:8px;
                            
                        }
                        
                    }
                }
                .upcontent{
                    //background-color: #f5a623;
                    border-bottom: 2px solid #946c05;
                    //padding: 17px 0; 
                    //height: 79px;
                    float: left; 
                    margin-left:26px;
                    display: flex;
                    align-items: center;
                    width: 73%;
                    padding-bottom: 25px;
                    padding-top: 25px;
                    box-sizing: border-box;
                .upname{
                    float: left;
                    width: 92%;
                    p{  
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        &:first-child{
                            color: #fff;
                           
                        }
                        &:last-child{
                            color:#bdbdbd;
                            font-size: 22px;
                            margin-top:25px;
                            
                        }
                        
                    }
                }
                .delay-time{
                    // float: right;
                    // margin-left: 26px;
                    position: absolute;
                    right: 44px;
                    text-align: center;
                    p{
                        &:first-child{
                            font-Size: 30px;
	                        color: #ff6767;
                            b{
                                font-size: 25px;
                                font-weight: normal;
                            }
                        }
                        &:last-child{
                            color:#bdbdbd;
                            font-size: 15px;
                            margin-top:8px;
                            
                        }
                        
                    }
                }
               
                }
                 .recent-right{
                    float: right;
                    display: flex;
                    align-items: center;
                    //height:79px;
                    //margin-left: 8px;
                    position: absolute;
                    right: 20px;
                    i{
                        color: #916b05;
                        font-size: 20px;
                    }
                }
            }
        }
}
</style>
       
<template>
    <div>
        <!-- 近期-->
      <div class="projectSchedule-recent-index">
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
                        
                            <router-link to="/d">
                            <i class="iconfont icon-you "></i>
                            </router-link>
                        
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
                        <router-link to="/d">
                            <i class="iconfont icon-you "></i>
                            </router-link>
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
                        <router-link to="/d">
                            <i class="iconfont icon-you "></i>
                            </router-link>
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
                        <router-link to="/d">
                            <i class="iconfont icon-you "></i>
                            </router-link>
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
                        <router-link to="/d">
                            <i class="iconfont icon-you "></i>
                            </router-link>
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
                        <router-link to="/d">
                            <i class="iconfont icon-you "></i>
                            </router-link>
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
                                <p>28<b>天</b></p>
                                <p>倒计时</p> 
                            
                            </div>
                        
                        </div>
                        <div class="recent-right">
                               <router-link to="/d2">
                            <i class="iconfont icon-you "></i>
                            </router-link>
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
                                <p>31<b>天</b></p>
                                <p>倒计时</p> 
                            
                            </div>
                        
                        </div>
                        <div class="recent-right">
                                 <router-link to="/d2">
                            <i class="iconfont icon-you "></i>
                            </router-link>
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
                                <p>33<b>天</b></p>
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
                                <p>35<b>天</b></p>
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
                                <p>41<b>天</b></p>
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