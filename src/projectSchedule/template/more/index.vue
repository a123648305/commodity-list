<style lang="less" scoped>
.more{
    padding:0 20px;
    letter-spacing: 1px;
    ul{
        li{
            list-style-type: none;
            height:127px;
            padding-left:26px;
            padding-right: 20px;
            border-Radius: 10px;
            background-Color: #16151a;
            margin-top: 25px;
            display: flex;
            align-items: center;
            box-sizing: border-box;
            &:first-child{
                margin-top: 0;
            }
            
            i{ 
                
                color: #916b05;
                &:first-child{
                    font-size: 60px;
                    float: left;
                    color:#f59d41;
                    //color:rgb(233,102,75);
                    // color: -webkit-linear-gradient(120deg, rgb(255,202,57), rgb(233,102,75)); /* Safari 5.1 - 6.0 */
                    // color: -o-linear-gradient(120deg, rgb(255,202,57), rgb(233,102,75)); /* Opera 11.1 - 12.0 */
                    // color: -moz-linear-gradient(120deg, rgb(255,202,57), rgb(233,102,75)); /* Firefox 3.6 - 15 */
                    // color: linear-gradient(120deg, rgb(255,202,57), rgb(233,102,75)); /* 标准的语法 */
                }
                &:last-child{
                   // font-size: 40px;
                    //float: left;
                    font-size: 20px;
                    right: 40px;
                    position: absolute;
                }

            }
            .more-content{
                float: left;
                margin-left: 32px;
                p{
                    font-size: 25px;
                    color: #fff;
                    &:last-child{
                        color: #bdbdbd;
                        font-size: 22px;
                        margin-top: 15px;
                        b{
                            color:#19c8a9;
                            font-size: 28px;
                            margin-right: 15px;
                            font-weight: normal;
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
      <div class="more">
          <ul>
              <li>
                  <i class="iconfont icon-duofenxingqiu"></i>
                  <div class="more-content">
                      <p>多粉星球</p>
                      <p><b>9</b>项规划正在进行中</p>
                  </div>
                  <i class="iconfont icon-you"></i>
              </li>
              <li>
                  <i class="iconfont icon-xiaohongshi1"></i>
                  <div class="more-content">
                      <p>小红十</p>
                      <p><b>4</b>项规划正在进行中</p>
                  </div>
                  <i class="iconfont icon-you"></i>
              </li>
              <li>
                  <i class="iconfont icon-jiaoyu"></i>
                  <div class="more-content">
                      <p>教育</p>
                      <p><b>9</b>项规划正在进行中</p>
                  </div>
                  <i class="iconfont icon-you"></i>
              </li>
              <li>
                  <i class="iconfont icon-mohe"></i>
                  <div class="more-content">
                      <p>魔盒</p>
                      <p><b>9</b>项规划正在进行中</p>
                  </div>
                  <i class="iconfont icon-you"></i>
              </li>
              <li>
                  <i class="iconfont icon-shangcheng"></i>
                  <div class="more-content">
                      <p>商城</p>
                      <p><b>9</b>项规划正在进行中</p>
                  </div>
                  <i class="iconfont icon-you"></i>
              </li>
          </ul>
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