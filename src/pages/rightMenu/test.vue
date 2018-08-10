<style lang="less" scoped>

.tab{      
    margin-left:325px;
	//width:600px;
    padding-top:17px;
    width:calc(100% - 430px);
    height:calc(100% - 80px);
    //background-color: yellowgreen;
	.tab_title{
		font-size:0;     /*有间隙*/
		width:600px;
		ul{  
            padding-left: 10px;
            li{
                display: inline-block;
                height:50px;
                line-height: 50px;
                font-size:16px;
                //width:25%;
                text-align: center;
                color:#333;
                padding: 0 17px;
                border: 1px solid #e5e5e5;
                border-bottom: none;
                overflow: hidden;
                &:hover{
                    height: 55px;
                    //transition: height 0.2s;
                    top: 0;
                    line-height: 55px;
                   
                }
            }
        }
        .cur{
			
            color:#ffb75a;
            border: 1px solid #ffb75a;
            font-size: 17px;
            border-bottom: none;
            height: 55px;
        }
    }
	.tab_content{
        border:1px solid #ccc;
        border-left: none;
        border-bottom: none;
		height:400px;
        padding-top:20px;
        padding-left: 10px;
        padding-right: 10px;
        height: calc(100% - 80px);
        .search{
            //border:1px solid red;
            //background-color:#f5f5f5;
            height:49px;
            input{
                width:92%;
                height: 45px;
                line-height: 45px;
                padding-left:46px;
                background-color: #f5f5f5;
                
            }
            .search-left{
                position: absolute;
                font-size: 20px;
                margin-left: 12px;
                margin-top: 12px;
            }
           .search-right{
               
                font-size: 20px;
                position: absolute;
                right: 121px;
                /* top: 10px; */
                margin-top: -36px;
                z-index: 999;
                
            }
        }
        .content-list{
            height: 550px;
            overflow:hidden;
            //background: #bbb;

        }
    }
    .tab-right{
        right: 0;
        top: 72px;
        width: 106px;
        text-align:center;
        position: absolute;
        background-color:#f9f9f9;
        font-size: 15px;
        height: calc(100% - 154px);
        border-top: 1px solid #e5e5e5; 
        ul{
            background-color: #f5f5f5;
            li{
                height: 56px;
                line-height: 56px;
                border-bottom: 1px solid #e5e5e5;
            }
        }
        .active{
            background-color: #fff;
            color: #ffb75a;
        }
    }
    .shop{
        width: 205px;
        height: 40px;
        background-color: #f5f5f5;
        margin-top: 5px;
        padding-left: 15px;
        padding-right: 10px;
        font-size: 16px;
        line-height: 40px;     
        position: absolute;
        letter-spacing: 2px;
        right:10px;
        .shuangxiang{
            font-size: 20px;
            float: right;
            color: #bbb;
        }
    }
}

        
</style>
       
<template>
<div>
    <leftMenu></leftMenu>
<div class="tab">
     <div class="shop"><span>当前门店：<span>谷通科技</span><i slot="suffix" class="iconfont icon-shuangxiang shuangxiang"></i></span></div>
		<!-- 导航 -->
		<div class="tab_title">
			<!-- 点击设置curId的值 -->
            <ul>
			<li  :class="{'cur':curId === 0}" @click="curId=0">商品</li>
			<li  :class="{'cur':curId === 1}" @click="curId=1">无码商品</li>
			<li  :class="{'cur':curId === 2}" @click="curId=2">活动商品</li>
			<li  :class="{'cur':curId === 3}" @click="curId=3">会员</li>
            </ul>
		</div>
		<!-- 内容 -->
		<div class="tab_content">
            <div class="search">
            <!-- <el-input placeholder="请输入商条码/拼音码/商品名称" >
        <i slot="prefix" class="el-input__icon el-icon-search"></i>
          <i slot="suffix" class="iconfont icon-saoma saoma"></i></el-input> -->
          <span class="search-left iconfont icon-search"></span>
          <input type="text" placeholder="请输入商条码/拼音码/商品名称" >
          <span class="search-right iconfont icon-saoma"></span>
          </div>
			<!-- 根据curId的值显示div,分别对应 -->
			<div class="content-list" v-show="curId===0"><commodity></commodity></div>
			<div class="content-list" v-show="curId===1">无码商品</div>
			<div class="content-list" v-show="curId===2">Contact Content</div>
			<div class="content-list" v-show="curId===3">MySpace Content</div>
            <div class="content-list" v-show="curId===4">MySpace Content</div>
            <div class="content-list" v-show="curId===5">oil 粮油</div>
            <div class="content-list" v-show="curId===6">饮料</div>
            <div class="content-list" v-show="curId===7"><img src="" alt="shuiguo"></div>
            <div class="content-list" v-show="curId===8"><fruit></fruit></div>
		</div>





    <!-- //   右导航栏 -->
         <div class="tab-right">
        <ul>
            <li :class="{'active':curId === 0}" @click="curId=0">全部商品</li>
            <li :class="{'active':curId === 5}" @click="curId=5">粮油</li>
            <li :class="{'active':curId === 6}" @click="curId=6">饮料</li>
            <li :class="{'active':curId === 7}" @click="curId=7">零食</li>
            <li :class="{'active':curId === 8}" @click="curId=8">水果</li>
            <li :class="{'active':curId === 9}" @click="curId=9">蔬菜</li>
            <li :class="{'active':curId === 10}" @click="curId=10">饮料</li>
        </ul>
        </div>


         
	</div>
       <bottom></bottom> 
</div> 
</template>
    
    
<script>
import leftMenu from '../leftMenu/index'
import bottom from '../bottom/index'
import commodity from '../commodity/index'
import fruit from '../commodity/fruit'
export default {
     components: {leftMenu, commodity,bottom,fruit},
    data() {
        return {
               curId:1,
               activeName: 'first',
               activeIndex:'first',  
        }
    },
    computed: {

    },
    mounted() {
        
    },
    methods: {  
     handleSelect(){}
    },
}
</script>