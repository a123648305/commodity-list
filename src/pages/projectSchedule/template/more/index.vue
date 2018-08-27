<style lang="less" scoped>
// 更多
.projectSchedule-more-index {
    padding: 0 40px;
    letter-spacing: 3px;
    li {
        list-style-type: none;
        height:254px;
        padding-left: 51px;
        padding-right: 40px;
        border-Radius: 20px;
        background-Color: #16151a;
        margin-top: 50px;
        display: flex;
        align-items: center;
        box-sizing: border-box;
        &:first-child {
            margin-top: 0;
        }
        .left-logo{
            font-size: 120px;
                float: left;
                background-image: -webkit-gradient( linear, 0 0, 0 bottom, from(rgb(231, 96, 77)), to(rgb(255, 202, 57)));
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;

        }
        .iconfont {
            
            &:last-child {  

                font-size: 40px;
                color: #916b05;
                
                //position: absolute;
            }

        }
        .more-content {
            float: left;
            margin-left:51px;
            width: 80%;
           


            p {
                font-size: 50px;
                color: #fff;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            }
            .more-content-2{
                color: #bdbdbd;
                font-size: 44px;
                margin-top:18px;
                letter-spacing: 2px;
            }
            
            .more-number {
                color: #19c8a9;
                font-size: 56px;
                margin-right: 20px;
                font-weight: normal;


            }
        }

    }

}
</style>

<template>
    <div>
        <!-- 更多 -->
        <div class="projectSchedule-more-index">
            <ul>
                <li>
                    <i class="iconfont icon-duofenxingqiu left-logo"></i>
                    <div class="more-content">
                        <p>多粉星球多粉星球多粉星球多粉星球多粉星球多粉星球多粉星球多粉星球多粉星球多粉星球多粉星球多粉星球多粉星球多粉星球多粉星球多粉星球</p>
                        <p class="more-content-2">
                            <b class="more-number">9</b>项规划正在进行中</p>
                    </div>
                    <router-link to="/plan"><i class="iconfont icon-you"></i></router-link>
                </li>
                <li>
                    <i class="iconfont icon-xiaohongshi1 left-logo"></i>
                    <div class="more-content">
                        <p>小红十</p>
                        <p class="more-content-2">
                            <b class="more-number">4</b>项规划正在进行中</p>
                    </div>
                    <router-link to="/plan"><i class="iconfont icon-you"></i></router-link>
                </li>
                <li>
                    <i class="iconfont icon-jiaoyu left-logo"></i>
                    <div class="more-content">
                        <p>教育</p>
                        <p class="more-content-2">
                            <b class="more-number">9</b>项规划正在进行中</p>
                    </div>
                    <router-link to="/plan"><i class="iconfont icon-you"></i></router-link>
                </li>
                <li>
                    <i class="iconfont icon-mohe left-logo"></i>
                    <div class="more-content">
                        <p>魔盒</p>
                        <p class="more-content-2">
                            <b class="more-number">2</b>项规划正在进行中</p>
                    </div>
                    <i class="iconfont icon-you"></i>
                </li>
                <li v-for="item in 10" :key="item">
                    <i class="iconfont icon-shangcheng left-logo"></i>
                    <div class="more-content">
                        <p>商城</p>
                        <p class="more-content-2">
                            <b class="more-number">9</b>项规划正在进行中</p>
                    </div>
                    <router-link to="/plan"><i class="iconfont icon-you"></i></router-link>
                </li>
            </ul>
        </div>
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