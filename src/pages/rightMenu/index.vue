<style lang="less" scoped>
.leftlist{
    width:650px;
    height: 200px;
    background-color:antiquewhite;
    left: 0;
    .list{
        ul{ height: 40px;
            padding-top: 10px;
            padding-left: 10px;
            border-bottom: 1px solid yellowgreen;
            overflow: hidden;
          
            li{
                width: 100px;
                height: 40px;
                border: 1px solid #999;
                float: left;
                 border-bottom: none;
                &:hover{
                    color:#ffb14d;
                    height: 55px;
                    border-color:#ffb14d;
                   transition: all 0.2s;
                    margin-top: -10px;
                }
            }

        }
    }
    .active{
        display: none;
    }
    .test{
        display:none;
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        margin:auto;
    }
}
</style>
       
<template>
    <div class="leftlist">
       <div class="list">
        <ul>
    <li @click="tog($index,tab.view)" :key="tab" v-for="tab in tabs" 
    :class="{active: active == $index}">{{ tab.type }}</li>
        </ul>
        <br>
  <component :is="currentView" ></component>
</div>
       </div>
       
    
      
</template>
    
    
<script>
import content from '../commodity/index'
export default {
     components: { content},
    data() {
        return {
            isActive:true,
            	currentView: 'content',
    active: 0,
            tabs: [
    	{
      	type: '111',
        view: 'content'
      },{
      	type: '2222',
        view: 'child2'
      }
    ]          
        }
    },
    computed: {

    },
    mounted() {
         //this.show='false'
    },
    methods: {  
     tog(i,v) {
      this.active = i
			this.currentView = v
		}
    },
}
</script>