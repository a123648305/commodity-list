<style lang="less" scoped>
.home{
    overflow: hidden;
    min-height: 768px;
}
</style>
       
<template>
    
   <div class="home">
  
       <commodity></commodity>
       
   </div>
</template>
    
    
<script>
import leftMenu from '../pages/leftMenu/index'
import bottom from '../pages/bottom/index'
import commodity from '../pages/commodity/index'
export default {
    components:{leftMenu,commodity,bottom},
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