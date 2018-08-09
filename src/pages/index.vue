<style lang="less" scoped>
.leftlist{
    width:650px;
    height: 200px;
    background-color: chartreuse;
    left: 0;
    .leftlist-top{
        height: 160px;
        &::before{
            content: "";
        }
    }
}
</style>
       
<template>
    <div class="leftlist">
       <div class="leftlist-top"></div>
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