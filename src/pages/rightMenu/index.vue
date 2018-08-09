<style lang="less" scoped>
.leftlist{
    width:650px;
    height: 200px;
    background-color:antiquewhite;
    left: 0;
    .list{
        ul{ height: 40px;
            padding: 10px 15px;
            border-bottom: 1px solid yellowgreen;
            
          
            li{
                width: 100px;
                height: 50px;
                border: 1px solid red;
                float: left;
                &:hover{
                    color:yellow;
                    height: 55px;
                    margin-bottom: 0;
                }
            }

        }
    }
}
</style>
       
<template>
    <div class="leftlist">
       <div class="list">
           <ul>
               <li v-bind:class="display=show">one</li>
               <li>two</li>
               <li>three</li>
               <li>fourth</li>
           </ul>
       </div>
    </div>
</template>
    
    
<script>
export default {
    data() {
        return {
            show:'false'

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