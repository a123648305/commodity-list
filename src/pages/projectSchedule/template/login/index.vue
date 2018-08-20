<style lang="less" scoped>
//  <!-- 登录 -->
.login{
    height: 100%;
    width: 100%;
    position: absolute;
    //background: url("../../../../assets/images/bk.jpg") no-repeat center;
    background-size: 100% 100%;
    background-color:rgba(0, 0,0,0.5);
  
    
    .login-text{
        font-size:40px;
        letter-spacing: 2px;
        //border: 1px solid;
        margin-top:200px;
        text-align: center;
        color: #fff;
        //width: 100%;
       
        
    }
    .login-box{
        position: relative;
        //width:380px;
        height:364px;
        //height:727px;
        margin-top:125px;
        margin-left:23px;
        margin-right:29px;
        padding:75px 55px 0 53px;
        box-sizing: border-box;
        background-color: #000;
        border-radius: 30px;
        .mima{
            color: #999;
            font-size:23px;
        }
        
        .login-box-text{
            color: #999;
            //font-size: 23px;
            letter-spacing: 1px;
            font-size:28px;
            
        }
        .login-pwd{
            border: solid;
            margin-top:65px;
            border: none;
            padding-top:13px;
            padding-bottom:13px;
            border-bottom: 1px solid #e2e2e2;
            input{
                border: none;
                background-color: transparent;
                color: #fff;
                width: 93%;
                height: 32px;
                //line-height: 32px;
                
            }
            .login-rember{
                color: #fff;
                float: right;
                //background-color:antiquewhite;
                font-size: 24px;
                //line-height: 20px;
                padding-top: 30px;
                .ck{
                    
                    font-size: 28px;
                }
            }
            .show{
                
                position: absolute;
                font-size: 30px;
                z-index:10;
                color: #999;
            }
        }
        .login-btn{
            //background-color: #fff;
            text-align: center;
            margin-top: 90px;
            input{
                width:236px;
                height: 85px;
                background-color:#f5a623;
                border-radius:42px;
                border: none;
                font-size: 30px;
                color: #fff;
                letter-spacing: 1px;

            }
        }
       

    }
    .login-tip{
        width: 300px;
        height:50px;
        line-height: 50px;
        font-size:24px;
        letter-spacing: 1px;
        color: #fff;
        left: 0;
        right: 0;
        margin:0 auto;
        margin-top:145px;
        background-color:#000;
        border-radius:25px;
        text-align: center;
        opacity: 0.7;
        text-align: center;
        // bottom: 130px;
        // position: absolute;;
        display: none;

    }
    .showtip{
        display: block;
    }
    .eye{
        color: #f5a623;
        font-size: 30px;
    }
}
</style>
       
<template>
    <div>
        <!-- 登录 -->
      <div class="login">
          <div class="login-text">输入密码查看项目进度</div>
          <div class="login-box">
              <i class="iconfont icon-mima mima"></i>
              <span class="login-box-text">请输入密码</span>
              
                <div class="login-pwd">
                       <input type="text" value="" >    
                      <i class="iconfont icon-yanjing show"></i>
                          <div class="login-rember">
                             <i class="ck" :class="{'iconfont icon-not_Selected-copy':selecd,'iconfont icon-danxuanxuanzhong eye':!selecd}" @click="toggle"></i>
                              记住密码</div>
                </div>
             <div class="login-btn"><input type="button" value="登录"   @click="showtip"/></div>
                 
          </div>
           <div class="login-tip" :class="{ showtip: tip }">
               密码错误，请重新输入
           </div>
      </div>
    </div>
</template>
    
    
<script>

export default {
  
    data() {
        return {
             tip:false,
             selecd:true,
        }
    },
    computed: {

    },
    mounted() {

    },
    methods: {
       showtip(){
           this.tip=true;
       },
       toggle(){
           this.isA=!this.isA;
           //console.log("111")
       }

    },
}
</script>