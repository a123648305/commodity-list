<style lang="less" scoped>
//    <!-- 左侧购物车 -->
.leftlist{
    width:325px;
    left: 0;
    position: absolute;
    border-right: 1px solid #f5f5f5;
    height: calc(100% - 80px);
    
    
    .leftlist-top{     
        text-align: center;
        border-bottom: 1px solid #f5f5f5;
        padding:25px 10px;
        font-size:20px;
        position: fixed;
        top: 0; 
        .menu{
            left:20px;
            top: 24px;
            position: absolute;
            font-size: 22px;
            color: #ffb555;
        }
    }
    .leftlist-list{
        height: calc(100% - 80px - 74px -80px);
        overflow-y: scroll;
        ul{
            padding: 0 10px;
            li{ //height:116px;
                list-style-type: none;
                border-bottom: 1px solid #f5f5f5;
                padding:15px 0px;
                .list-left{
                    float: left;
                    font-size: 15px;
                    p{  
                        color: #999;
                        margin-top: 15px;
                        font-size: 13px;
                        
                    }
                    .sign-yel{
                        display: block;
                        //padding: 10px 10px;
                        background-color: #ffb555;
                        float: left;
                        padding: 5px 10px;
                        color: #fff;
                        border-radius: 3px;
                        margin-top: -4px;
                        margin-right: 5px;
                        font-size: 12px;
                    }
                     .sign-red{
                        display: block;
                        //padding: 10px 10px;
                        background-color: #ff8059;
                        float: left;
                        padding: 5px 10px;
                        color: #fff;
                        border-radius: 3px;
                        margin-top: -4px;
                        margin-right: 5px;
                        font-size: 12px;
                    }
                     .sign-free{
                        display: block;
                        //padding: 10px 10px;
                        background-color: #ffeeee;
                        float: left;
                        padding: 5px 10px;
                        color: #ff3c3c;
                        border-radius: 3px;
                        margin-top: -4px;
                        margin-right: 5px;
                        border: 1px solid #ff3c3c;
                        font-size: 12px;
                    }
                }
                .list-right{
                    //float: right;
                    text-align: right;
                    p{
                       &:first-child{
                           color: #ffb555;
                           font-size:17px;

                       }
                       &:nth-child(2){
                           color: #999;
                           margin-top:10px;
                           text-decoration:line-through;
                           font-size: 13px;
                           
                       }
                     
                    }
                    .list-right-number{
                        margin-top: 12px;
                        font-size:17px;
                    }
                    .sub{
                        font-size: 25px;
                        margin-right: 10px;
                        
                    }
                    .add{
                        font-size: 25px;
                        margin-left: 10px;
                        color: #fff;
                        border-radius: 50%;
                        background-color: #ffb555;
                        
                    }
        
                    
                }

            }
        }
    }  
}
</style>
       
<template>
   <!-- 左侧购物车 -->
    <div class="leftlist">
       <div class="leftlist-top"><i class="menu iconfont icon-caidandianji-copy"></i>结账清单</div>
       <div class="leftlist-list">
           <ul>
               <li><div class="list-left">
                   <span class="sign-yel">特价</span>丹麦蓝罐曲奇饼干...
                   <p>奶香味</p>
               </div>
               <div class="list-right"><p>￥168</p>
               <p>￥200</p>
               <div class="list-right-number">
                   <span class="sub iconfont icon-jian" @click="sub"></span>
                   <span>{{count}}</span>
                   <span class="add iconfont icon-jia" @click="add"></span>
               </div>
               </div></li>
               <li><div class="list-left">
                   <span class="sign-yel">买赠</span>丹麦蓝罐曲奇饼干...
                   <p>奶香味</p>
               </div>
               <div class="list-right"><p>￥168</p>
               <p>￥200</p>
               <div class="list-right-number">
                   <span class="sub iconfont icon-jian"></span>
                    <span>1</span>
                   <span class="add iconfont icon-jia"></span>
               </div>
               </div></li>
               <li><div class="list-left">
                   <span class="sign-red">8折</span>丹麦蓝罐曲奇饼干...
                   <p>奶香味</p>
               </div>
               <div class="list-right"><p>￥168</p>
               <p>￥200</p>
               <div class="list-right-number">
                   <span class="sub iconfont icon-jian"></span>
                    <span>1</span>
                   <span class="add iconfont icon-jia"></span>
               </div>
               </div></li>
               <li><div class="list-left">
                   <span class="sign-free">赠</span>丹麦蓝罐曲奇饼干...
                   <p>奶香味</p>
               </div>
               <div class="list-right"><p>￥0</p>
               <p>￥200</p>
               <div class="list-right-number"> 
                    <span>1</span>
               </div>
               </div></li>
           </ul>
       </div>
       <discount-detil></discount-detil>

    </div>
       
    
</template>
    

<script>
import discountDetil from '../leftMenu/discountDetil'
export default {
    components:{discountDetil},
    data() {
        return {
            count:1,

        }
    },
    computed: {
       
    },
    mounted() {
        console.log(screen.height);
        
    },
    methods: {
      add(){
          this.count++;
          //console.log(this.count);
      },
      sub(){
          if(this.count!=0)
          this.count--;
          //console.log(this.count);
      }

    },
}
</script>