<style lang="less" scoped>
//    <!-- 优惠信息 -->
    .discount-card{
        padding-top: 27px;
        display: flex;
        justify-content:space-around;
        span{
            text-align: center;
            width: 85px;
            //height: 45px;
            background-color: #ffb555;
            color: #fff;
            border-radius: 5px;
            font-size: 12px;
            padding: 6px 0;
            p{  
                &:nth-child(2){
                    margin-top:7px;
                }
            }
            &:nth-child(2){
                background-color: #f879b1;
            }
             &:nth-child(3){
                background-color: #ff7c54;
            }
            &::after{
                position: absolute;
                content: "";
                width: 20px;
                height: 20px;
                margin-left: 31px;
                margin-top: -50px;
                background: url('../../assets/images/close.png') no-repeat center;
                border-radius: 20px;
                background-size: 100% 100%;
            }
           
        }
        .close{
            position: absolute;
            margin-top: -10px;
            color: #999;
            font-size: 20px;
            margin-left: -70px;
            background-color: #fff;
            border-radius:20px;
        }
       
    }
    .discount-price{
        margin-top:17px;
        padding-bottom: 15px;
        padding:0 10px; 
        span{
          float: left;
          font-size: 14px;
          &:last-child{
                float: right;
                p{
                    text-align: right;
                    &:first-child{
                        color: #ffb555;
                        font-size:17px;
                    }
                    &:last-child{
                        margin-top: 15px;
                    }
                }
            }
            &:first-child{
                p{
                   &:last-child{
                        margin-top: 10px;
                    }
                }
            }
              
          
        }
    }

</style>
       
<template>
   <!-- 优惠信息 -->
   <div>   
       <div class="discount-card">
           <span>
            <p>粉币</p>
           <p>-￥10</p>
           </span>
           <!-- <i class="close iconfont  icon-close"></i> -->
           <span><p>积分</p>
           <p>-￥10</p></span>
           
           <span><p>无门槛券</p>
           <p>-￥5</p></span>
       </div>
       <div class="discount-price">
           <span><p>订单金额：</p>
           <p>优惠金额：</p>
           
           </span>
           <span>
           <p>￥266</p>
           <p>￥20</p></span>
       </div>
   </div>

       
    
</template>
    
    
<script>
export default {
    data() {
        return {
            count:1,

        }
    },
    computed: {
       
    },
    mounted() {
        
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