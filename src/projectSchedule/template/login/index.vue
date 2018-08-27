<style lang="less" scoped>
.login{
    height: 100%;
    //background: url("")
    background-color: aliceblue;
    .login-text{
        font-size: 80px;
        letter-spacing: 4px;
    }
}
</style>
       
<template>
    <div>
      <div class="login">
          <div class="login-text">输入密码查看项目进度</div>
          <div class="login-box">
              <span class="login-box-text">请输入密码</span>
              <input type="text" value="" >
                <span>记住密码</span>
                <input type="button" value="">登录
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