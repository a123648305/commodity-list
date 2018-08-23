<style lang="less" scoped>
    //  <!-- 登录 -->
    .projectSchedule-login-index {
        height: 100%;
        width: 100%;
        position: absolute;
        background: url("../../../../assets/images/bk.jpg") no-repeat center;
        background-size: 100% 100%;
        background-color: rgba(0, 0, 0, 0.5);

         
        .login-text {
            font-size: 80px;
            letter-spacing: 2px; //border: 1px solid;
            //margin-top: 400px;
            margin-top: 449px;
            //margin-top: 363px;
            text-align: center;
            color: #fff; //width: 100%;
            @media screen and(max-width: 320px) {
                margin-top: 160px;
            }
        }
        .login-box {
            position: relative; 
            height:727px;
            margin-top:250px;
            margin-left: 45px;
            margin-right: 57px;
            padding:150px 105px 0 105px;
            box-sizing: border-box;
            background-color: #000;
            border-radius: 60px;
            .mima {
                color: #999;
                font-size: 46px;
            }

            .login-box-text {
                color: #999; 
                letter-spacing: 2px;
                font-size:46px;

            }
            .login-pwd {
                //background-color:#e2e2e2;
                margin-top:112px;
                padding: 26px 0;
                box-sizing: border-box;
                border-bottom: 0.5px solid #e2e2e2;/*no*/
                
                input {
                    border: none;
                    background-color: transparent;
                    color: #fff;
                    width: 93%;
                    height:66px;
                    
                    outline:none;
                    font-size: 30px;
                    letter-spacing: 4px;
                    caret-color: #f5a623;
                }
            }
            .login-rember {
                    
                color: #fff;
                float: right; 
                margin-top: 50px;
                height: 65px;
                display:flex;      
                .login-rember-pwd{
                   height: 60px;
                   font-size:48px;
                   line-height: 60px;  
                }

                .ck {

                    font-size:59px;
                    margin-right: 30px;
                    color: #3c2a0b;
                    
                }
            }
            .show{

                position: absolute;
                font-size: 60px;
                z-index: 10;
                color: #999;
            }
            .showpwd{
                color: #f5a623;
                font-size: 60px;
                z-index: 10;
            }
         
            .login-btn {
                //background-color: #fff;
                text-align: center;
                margin-top:215px;
                input {
                    width:471px;
                    height:169px;
                    background-color: #f5a623;
                    border-radius: 84px;
                    border: none;
                    font-size: 60px;
                    color: #fff;
                    letter-spacing: 3px;
                    outline: none;
                    
                 

                }
            }


        }
        .login-tip {
            width: 600px;
            height: 100px;
            line-height: 100px;
            font-size: 48px;
            letter-spacing: 2px;
            color: #fff;
            left: 0;
            right: 0;
            margin: 0 auto;
            margin-top:346px;
            background-color: #000;
            border-radius: 50px;
            text-align: center;
            //opacity: 0.7;
            text-align: center; // bottom: 130px;
            // position: absolute;;
            display: none;

        }
        .showtip {
            display: block;
        }
        .icon-not_Selected-copy{
            font-size: 40px;
        }
        .eye {
            color: #f5a623;
            font-size:59px;
            margin-right: 30px;
        }
    }
</style>

<template>
    <div>
        <!-- 登录 -->
        <div class="projectSchedule-login-index">
            <div class="login-text">输入密码查看项目进度</div>
            <div class="login-box">
                <i class="iconfont icon-mima mima"></i>
                <span class="login-box-text">请输入密码</span>

                <div class="login-pwd">
                    <input  v-model="pwd" :type="pwdType" >
                    <i class="iconfont icon-yanjing show" :class="{'showpwd':spwd}"  @click="showpwd"></i>
                   
                </div>
                <div class="login-rember">
                    <i  :class="{'iconfont icon-yuanquan ck':rempwd,'iconfont icon-xuanzhong1 eye':!rempwd}" @click="toggle"></i>
                    <span class="login-rember-pwd">记住密码</span>
                </div>
                <div class="login-btn">
                    <input type="button" value="登录" @click="showtip" />
                </div>

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
                tip: false,
                rempwd: false,
                pwdType:'password',
                spwd:false,
                pwd:'12345',
            }
        },
        computed: {

        },
        mounted() {

        },
        methods: {
            showtip() {
                this.tip = true;
                
                console.log(this.pwdType);
            },
            showpwd(){
              this.pwdType = this.pwdType==='password'?'text':'password';
              this.spwd=!this.spwd;

            },
            toggle() {
                //console.log("111")
                this.rempwd = !this.rempwd;

            }

        },
    }
</script>