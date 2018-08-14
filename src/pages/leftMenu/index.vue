<style lang="less" scoped>
//    <!-- 左侧购物车 -->
.leftlist{
    width:325px;
    left: 0;
    position: absolute;
    border-right: 1px solid #f5f5f5;
    height: calc(100% - 80px);
    .leftlist-list{
        height: calc(100% - 80px - 130px);//149
        overflow-y: scroll;
        &::-webkit-scrollbar {
            display:none
        }
        ul{
            padding: 0 10px;
            li{ //height:116px;
                list-style-type: none;
                border-bottom: 1px solid #f5f5f5;
                padding:15px 0px;
                //height:85px;
                .list-left{
                    float: left;
                    font-size: 15px;
                    letter-spacing: 1.5px;
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
                        letter-spacing: 1px;
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
                        letter-spacing: 1px;
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
                        letter-spacing: 1px;
                    }
                }
                .list-right{
                    //float: right;
                    text-align: right;
                    p{ 
                       letter-spacing: 1.5px;
                       &:first-child{
                           color: #ffb555;
                           font-size:17px;
                           b{
                               font-size: 13px;
                               font-weight: normal;
                           }

                       }
                       &:nth-child(2){
                           color: #999;
                           margin-top:10px;
                           margin-bottom: 15px;
                           text-decoration:line-through;
                           font-size: 13px;
                           
                       }
                     
                    }
                    .list-right-number{
                        font-size:17px;
                        height: 29px;
                        line-height: 29px;
                        display: flex;
                        align-items: center;
                        justify-content: flex-end;
                    }
                    .sub{
                        font-size: 29px;
                        margin-right: 10px;
                        border-Color: #e5e5e5;
                        
                    }
                    .add{
                        font-size: 29px;
                        margin-left: 10px;
                        color: #fff;
                        border-radius: 50%;
                        background-color: #ffb555;
                        
                    }
                    .list-right-count{
                        //margin-bottom: 10px;
                    }
        
                    
                }

            }
        }
    }  
}
</style>
       
<template>
   <!-- 左侧购物车 -->
   <div>
    <div class="leftlist">
       <leftListTop></leftListTop>
       <div class="leftlist-list">
           <ul>
               <li><div class="list-left">
                   <span class="sign-yel">特价</span>丹麦蓝罐曲奇饼干...
                   <p>奶香味</p>
               </div>
               <div class="list-right"><p><b>￥</b>168</p>
               <p>￥200</p>
               <div class="list-right-number">
                   <span class="sub iconfont icon-jianshuliang" @click="sub"></span>
                   <span class="list-right-count">{{count}}</span>
                   <span class="add iconfont icon-jia" @click="add"></span>
               </div>
               </div></li>
               <li><div class="list-left">
                   <span class="sign-yel">买赠</span>丹麦蓝罐曲奇饼干...
                   <p>奶香味</p>
               </div>
               <div class="list-right"><p><b>￥</b>168</p>
               <p>￥200</p>
               <div class="list-right-number">
                    <span class="sub iconfont icon-jianshuliang" @click="sub"></span>
                    <span>1</span>
                   <span class="add iconfont icon-jia"></span>
               </div>
               </div></li>
               <li><div class="list-left">
                   <span class="sign-red">8折</span>丹麦蓝罐曲奇饼干...
                   <p>奶香味</p>
               </div>
               <div class="list-right"><p><b>￥</b>168</p>
               <p>￥200</p>
               <div class="list-right-number">
                    <span class="sub iconfont icon-jianshuliang" @click="sub"></span>
                    <span>1</span>
                   <span class="add iconfont icon-jia"></span>
               </div>
               </div></li>
               <li><div class="list-left">
                   <span class="sign-free">赠</span>丹麦蓝罐曲奇饼干...
                   <p>奶香味</p>
               </div>
               <div class="list-right"><p><b>￥</b>0</p>
               <p>￥200</p>
               <div class="list-right-number"> 
                    <span>1</span>
               </div>
               </div></li>
           </ul>
       </div>
       <discount-detil></discount-detil>

    </div>
   </div> 
    
</template>
    

<script>
import leftListTop from '../leftMenu/leftListTop'
import discountDetil from '../leftMenu/discountDetil'
export default {
    components:{discountDetil,leftListTop},
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