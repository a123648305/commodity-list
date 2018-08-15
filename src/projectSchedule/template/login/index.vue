<style lang="less" scoped>
.login{
    height: 100%;
    width: 100%;
    position: absolute;
    background: url("../../../assets/images/bk.jpg") no-repeat center;
    background-size: 100% 100%;
    background-color:rgba(0, 0,0,0.5);
  
    
    .login-text{
        font-size:27px;
        letter-spacing: 4px;
        //border: 1px solid;
        margin-top:150px;
        text-align: center;
        color: #fff;
        //width: 100%;
    }
    .login-box{
        position: relative;
        //width:380px;
        //height: 242px;
        //width: 380px;
        height: 242px;
        margin-top:83px;
        margin-left: 15px;
        margin-right: 19px;
        padding:50px 36px 0 35px;
        box-sizing: border-box;
        background-color: #000;
        border-radius: 20px;
        .mima{
            color: #999;
            font-size: 15px;
        }
        
        .login-box-text{
            color: #999;
            font-size: 15px;
            letter-spacing: 1px;
            
        }
        .login-pwd{
            border: solid;
            margin-top: 43px;
            border: none;
            height: 30px;
            border-bottom: 1px solid #fff;
            input{
                border: none;
                background-color: transparent;
                color: #fff;
                width: 93%;
                height: 30px;
                
            }
            .login-rember{
                color: #999;
                float: right;
                //background-color:antiquewhite;
                font-size: 16px;
                //line-height: 20px;
                padding-top: 20px;
                .ck{
                    color: #999;
                    font-size: 16px;
                }
            }
            .show{
                color: #999;
                position: absolute;
                font-size: 20px;
                z-index:10;
            }
        }
        .login-btn{
            //background-color: #fff;
            text-align: center;
            margin-top: 70px;
            input{
                width: 157px;
                height: 56px;
                background-color:#f5a623;
                border-radius: 28px;
                border: none;
                font-size: 20px;
                color: #fff;
                letter-spacing: 1px;

            }
        }
       

    }
    .login-tip{
        width: 200px;
        height: 33px;
        line-height: 33px;
        font-size: 16px;
        letter-spacing: 1px;
        color: #fff;
        left: 0;
        right: 0;
        margin:0 auto;
        margin-top:125px;
        background-color:#000;
        border-radius: 17px;
        text-align: center;

    }
}
</style>
       
<template>
    <div>
      <div class="login">
          <div class="login-text">输入密码查看项目进度</div>
          <div class="login-box">
              <i class="iconfont icon-mima mima"></i>
              <span class="login-box-text">请输入密码</span>
              
                <div class="login-pwd">
                       <input type="text" value="" >    
                      <i class="iconfont icon-yanjing show"></i>
                          <div class="login-rember">
                             <i class="iconfont icon-not_Selected-copy ck"></i>
                              记住密码</div>
                </div>
             <div class="login-btn"><input type="button" value="登录" /></div>
                 
          </div>
           <div class="login-tip">
               密码错误，请重新输入
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