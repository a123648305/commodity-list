<style lang="less" scoped>
.login-content {
    background: url('../../assets/images/login/login_back.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    -moz-background-size: 100% 100%;
    width: 100%;
    height: 100vh;
    /*顶部标题提示 start*/
    .top-title {
        padding: 96px 0;
        .top-logo {
            & > img {
                width: 100%;
                height: auto;
                max-width: 100%;
                display: block;
            }
        }
    }

    /*表单 start*/
    .middle-input-box {
        background-color: #fff;
        border-radius: 15px;
        height: 679px;
        margin: 0 44px;
        -moz-box-shadow: 2px 10px 15px #e5e5e5;
        box-shadow: 2px 10px 15px #e5e5e5;
        .input-title {
            color: #242133;
            font-size: 36px;
            line-height: 152px;
            text-align: center;
        }
        .input-item {
            margin: 0 32px 37px 32px;
            background-color: #f3f3fa;
            border-radius: 43px;
            position: relative;
            .input {
                border: none;
                background: none;
                outline: 0;
                line-height: 87px;
                color: #242133;
                font-size: 24px;
                width: 100%;
                text-indent: 2em;
            }
            .delete-icon {
                position: absolute;
                right: 45px;
                top: 31px;
                width: 25px;
                height: 25px;
                line-height: 23px;
            }
        }
        .checked-box {
            position: relative;
            line-height: 24px;
            .password-left {
                position: absolute;
                left: 32px;
            }
            .password-icon {
                color: #f3f3fa;
                display: inline-block;
            }
            .password-text {
                display: inline-block;
                font-size: 22px;
                color: #9c9aa6;
            }
            .password-right {
                text-align: right;
                position: absolute;
                right: 32px;
            }
        }
    }

    /*登录 start*/
    .bottom-login-box {
        margin: 97px 32px 0 32px;
        background-color: #e5e5e5;
        border-radius: 43px;
        color: #999;
        font-size: 27px;
        line-height: 87px;
        text-align: center;
        &:active {
            background: #242133;
            color: #fff;
        }
    }

    /*弹出层 start*/
    .get-eject {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        width: 338px;
        line-height: 101px;
        background: #242133;
        color: #fff;
        font-size: 27px;
        text-align: center;
        border-radius: 8px;
    }
}
</style>

<template>
    <div class="login-content">
        <div class="top-title">
            <div class="top-logo">
                <img src="../../assets/images/login/login_title.png" />
            </div>
            <div class="top-logo">
                <img src="../../assets/images/login/login_x_title.png" />
            </div>
        </div>
        <!--表单 -->
        <div class="middle-input-box">
            <div class="input-title">多粉星球商家版</div>
            <div class="input-item">
                <input type="text" placeholder="请输入账号" name="" class="input" />
                <i class="iconfont icon-close delete-icon"></i>
            </div>
            <div class="input-item">
                <input type="password" placeholder="请输入密码" name="" class="input">
                <i class="iconfont icon-close delete-icon"></i>
            </div>
            <div class="checked-box">
                <div class="password-left">
                    <!-- <i class="iconfont icon-o password-icon"></i> -->
                    <i class="iconfont icon-xuanzhong"></i>
                    <div class="password-text">记住密码</div>
                </div>
                <div class="password-right">
                    <i class="iconfont icon-o password-icon"></i>
                    <!-- <i class="iconfont icon-xuanzhong"></i> -->
                    <div class="password-text">自动登录</div>
                </div>
            </div>
            <div class="bottom-login-box">登录</div>
        </div>
        <!--弹出层-->
        <div class="get-eject">
            <!-- <span>用户名不存在</span> -->
            <span>密码错误</span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {}
    },
    computed: {},
    mounted() {},
    methods: {}
}
</script>
