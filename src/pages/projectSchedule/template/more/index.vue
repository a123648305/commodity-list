<style lang="less" scoped>
// 更多
.projectSchedule-more-index{
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
                   background-image: -webkit-gradient( linear,0 0,0 bottom, from(rgb(231, 96, 77)),to(rgb(255, 202, 57)));
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
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
                width: 82%;
                
                
                p{
                    font-size: 25px;
                    color: #fff;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
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
        <!-- 更多 -->
      <div class="projectSchedule-more-index">
          <ul>
              <li>
                  <i class="iconfont icon-duofenxingqiu"></i>
                  <div class="more-content">
                      <p>多粉星球多粉星球多粉星球多粉星球多粉星球多粉星球多粉星球多粉星球多粉星球多粉星球多粉星球多粉星球多粉星球多粉星球多粉星球多粉星球</p>
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