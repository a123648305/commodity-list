<style lang="less" scoped>
 .main{
     
    position: relative;
    width:100%;
    height: 100%;
    overflow:auto;
    padding-right: 15px;
    left: 0;
     .saoma{
        font-size: 20px;
        position: absolute;
        top: 10px;
        right: 10px;
     }
     .list{ 
            li{ 
                width:49%;
                float: left;
                margin-top: 10px;
                border: 1px solid #e5e5e5;
                height: 110px;
                &:nth-child(odd){
                    &::before{

                     content:"";
                     position: absolute;
                     width: 33px;
                     height: 33px;
                     background: url("../../../assets/images/hot.png") no-repeat center;
                     background-size: 100% 100%;
                    }
                        
                }
                &:nth-child(2n){
                    //margin-left: 10px;
                    float: right;
                }
                
                    .colo{
                        float: left;
                        padding: 15px 11px 15px 15px;
                        .colo-img{
                            width:80px;
                            height:80px;
                            
                        }
                        .colo-text{
                        float: right;
                        margin-left: 10px;
                        letter-spacing: 1.5px;
                        overflow: hidden;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        //width: 162px;
                        p{ 
                            text-overflow: ellipsis; 
                            white-space :nowrap;
                            overflow: hidden;
                            margin-top:15px;
                            font-size: 17px;
                            &:first-child{
                                margin-top: 0;
                                
                            } 
                            &:nth-child(2){
                                color: #a0a0a0;
                                font-size: 13px;
                            }
                        }
                            
                        }
                    }
                }
    }
    .active{
        display: none;
    }
 }
</style>

<template>
    <div class="main" >
     <!-- <el-input placeholder="请输入商条码/拼音码/商品名称" >
   
       <i slot="prefix" class="el-input__icon el-icon-search"></i>
          <i slot="suffix" class="iconfont icon-saoma saoma"></i></el-input> -->
            <div class="main-content-1" :class="{ active: isActive }">
                <ul class="list">
                    <li><div class="colo">
                        <img class="colo-img" src="../../../assets/images/kuoluos.png">
                        <div class="colo-text">
                            <p>可口可乐樱桃味的...</p>
                            <p>250ml</p>
                            <p>￥2.5</p></div>
                        
                        </div>
                        </li>
                    <li><div class="colo">
                         <img class="colo-img" src="../../../assets/images/kuoluom.png">
                        <div class="colo-text">
                            <p>可口可乐樱桃味的...</p>
                            <p>250ml</p>
                            <p>￥2.5</p></div>
                        
                        </div>
                        </li>
                        <li><div class="colo">
                         <img class="colo-img" src="../../../assets/images/kuoluos.png">
                        <div class="colo-text">
                            <p>可口可乐樱桃味的...</p>
                            <p>250ml</p>
                            <p>￥2.5</p></div>
                        
                        </div>
                        </li>
                        <li><div class="colo">
                        <img class="colo-img" src="../../../assets/images/kuoluom.png">
                        <div class="colo-text">
                            <p>可口可乐樱桃味的...</p>
                            <p>250ml</p>
                            <p>￥2.5</p></div>
                        
                        </div>
                        </li>
                         <li><div class="colo">
                         <img class="colo-img" src="../../../assets/images/kuoluos.png">
                        <div class="colo-text">
                            <p>可口可乐樱桃味的...</p>
                            <p>250ml</p>
                            <p>￥2.5</p></div>
                        
                        </div>
                        </li>
                         <li><div class="colo">
                         <img class="colo-img" src="../../../assets/images/kuoluom.png">
                        <div class="colo-text">
                            <p>可口可乐樱桃味的...</p>
                            <p>250ml</p>
                            <p>￥2.5</p></div>
                        
                        </div>
                        </li>
                </ul>
    </div>
     <div class="main-content-2" :class="{ active:secondcss }">
                <ul class="list">
                    <li><div class="colo">
                        <img class="colo-img" src="../../../assets/images/kuoluos.png">
                        <div class="colo-text">
                            <p>可口可乐樱桃味的...</p>
                            <p>250ml</p>
                            <p>￥2.5</p></div>
                        
                        </div>
                        </li>
                    <li><div class="colo">
                         <img class="colo-img" src="../../../assets/images/kuoluom.png">
                        <div class="colo-text">
                            <p>可口可乐樱桃味的...</p>
                            <p>250ml</p>
                            <p>￥2.5</p></div>
                        
                        </div>
                        </li>
                        <li><div class="colo">
                         <img class="colo-img" src="../../../assets/images/kuoluos.png">
                        <div class="colo-text">
                            <p>可口可乐樱桃味的...</p>
                            <p>250ml</p>
                            <p>￥2.5</p></div>
                        
                        </div>
                        </li>
                        <li><div class="colo">
                        <img class="colo-img" src="../../../assets/images/kuoluom.png">
                        <div class="colo-text">
                            <p>可口可乐樱桃味的...</p>
                            <p>250ml</p>
                            <p>￥2.5</p></div>
                        
                        </div>
                        </li>
                        
                       

                        
                </ul>
    </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
             isActive:false,
             secondcss:false,       
        }
    },
    computed: {},
    mounted() {},
    methods: {}
}
</script>
