<style lang="less" scoped>
.mcontent{
    margin-left:336px;
    padding-top:31px;
    .content{
        width:calc(100% - 115px);
        height:calc(100% - 80px);
        
    }
    .tab-right{
     right: 0;
     top: 72px;
     width: 106px;
     text-align:center;
     position: absolute;
     background-color:#f9f9f9;
     height: calc(100% - 154px); 
     .el-menu-item{
         border-bottom: 1px solid #e5e5e5;
     }
    }
    .shop{
        width: 230px;
        //height: 40px;
        background-color: #f5f5f5;
        float:right;
        margin-right: 10px;
        margin-top: -8px;
        padding-left: 15px;
        padding-right: 10px;
        font-size: 18px;
        padding-top: 10px;
        padding-bottom: 10px;
        .shuangxiang{
            font-size: 20px;
            float: right;
        }
    }
   
}
</style>
       
<template>
<div>
    <leftMenu></leftMenu>   
    <div class="mcontent">
        <div class="shop"><span>当前门店：谷通科技<i slot="suffix" class="iconfont icon-shuangxiang shuangxiang"></i></span></div>
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick" active-text-color="#ffb14d">
            <el-tab-pane label="商品" name="first" class="top">
                <div class="content">  
                    <commodity></commodity>  
                </div>
            </el-tab-pane>
            <el-tab-pane label="无码商品" name="second" class="top">配置管理</el-tab-pane>
            <el-tab-pane label="活动商品" name="third" class="top">角色管理</el-tab-pane>
            <el-tab-pane label="会员" name="fourth" class="top">定时任务补偿</el-tab-pane>
        </el-tabs>

        <div class="tab-right">
         <el-menu
       :default-active="activeIndex"
      class="el-menu-vertical-demo"
     @select="handleSelect"
      background-color="#f5f5f5"
      text-color="#333"
      active-text-color="#ffb14d">
     <el-menu-item index="first">      
        <span slot="title">全部商品</span>
      </el-menu-item>
      <el-menu-item index="second">      
        <span slot="title">粮油</span>
      </el-menu-item>
      <el-menu-item index="third" >  
        <span slot="title">饮料</span>
      </el-menu-item>
      <el-menu-item index="fourth">
        <span slot="title">零食</span>
      </el-menu-item>
      <el-menu-item index="fifth">
        <span slot="title">水果</span>
      </el-menu-item>
      <el-menu-item index="sixth">
        <span slot="title">蔬菜</span>
      </el-menu-item>
      <el-menu-item index="seventh">
        <span slot="title">饮料</span>
      </el-menu-item>
    </el-menu>
        </div>
    </div>
    <bottom></bottom>
</div>  
</template>
    
    
<script>
import leftMenu from '../leftMenu/index'
import bottom from '../bottom/index'
import commodity from '../commodity/index'
export default {
    components: { leftMenu,bottom,commodity},
    data() {
        return {
           activeName: 'first',
           activeIndex:'first',
        }
    },
    computed: {

    },
    mounted() {

    },
    methods: {
     handleClick(){},
      handleSelect(key) {
        console.log(key);
        this.activeName=key;
      }
    },
}
</script>