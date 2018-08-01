<style lang="less" scoped>
.poster-box {
    box-sizing: border-box;
    background-color: #ffffff;
    .mask-box {
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background-color: #ffffff;
    }
    .top-box {
        padding: 5px;
        box-sizing: border-box;
        position: relative;
        .img-box {
            width: 100%;
            box-sizing: border-box;
        }
        .erweima-box {
            position: absolute;
            top: 38%;
            left: 50%;
            width: 350px;
            height: 350px;
            margin-left: -175px;
            text-align: center;
            border-radius: 350px;
            overflow: hidden;
        }
        .erweima {
            width: 100%;
        }
        .business-box {
            position: absolute;
            top: 76%;
            left: 50%;
            padding: 30px;
            width: 400px;
            height: 160px;
            margin-left: -240px;
            text-align: left;
            overflow: hidden;
        }
        .logo {
            width: 95px;
            height: 95px;
            border-radius: 95px;
            float: left;
            margin-right: 25px;
            background-image: url('http://maint.deeptel.com.cn/upload/image/2/gh_4e99235906d9/1/1532420903760.jpg');
            background-position: center;
            background-size: cover;
        }
        .message {
            padding-top: 13px;
        }
        .name {
            color: #242133;
            font-size: 31px;
            padding-bottom: 15px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
        .dps {
            font-size: 24px;
            color: #9c9aa6;
        }
        .color {
            color: #cb9945;
        }
    }
    .bottom-dps {
        text-align: center;
        overflow: hidden;
        .name {
            font-size: 27px;
            color: #242133;
            padding-bottom: 20px;
            padding-top: 5px;
        }
        .dps {
            color: #9c9aa6;
            font-size: 24px;
            padding-bottom: 15px;
            &:last-child {
                padding-bottom: 10px;
            }
        }
    }
}
</style>

<template>
    <div class="poster-box">
        <div class="mask-box" v-if="showFlag"></div>
        <div class="top-box" v-if="showFlag">
            <div ref="poster">
                <img class="img-box" :src="url" />
                <div class="erweima-box">
                    <img class="erweima" src="http://maint.deeptel.com.cn/upload/image/2/gh_4e99235906d9/1/1532420903760.jpg" alt="" />
                </div>
                <div class="business-box">
                    <div class="logo"></div>
                    <div class="message">
                        <p class="name">广东谷通科技广东谷通科技广东谷通科技</p>
                        <p class="dps">
                            <span>邀请你加入</span>
                            <span class="color">多粉星球</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <img v-show="!showFlag" :src="src" alt="" ref="img" style="width:100%">
        <div class="bottom-dps">
            <h2 class="name">长按图片保存或发送好友</h2>
            <p class="dps">邀请好友加入多粉星球办理星球卡</p>
            <p class="dps">你将获得售卡分成和消费佣金</p>
        </div>
    </div>
</template>

<script>
import html2canvas from 'html2canvas'
export default {
    data() {
        return {
            url: './static/images/poster/index.png',
            src: '',
            showFlag: true
        }
    },
    computed: {

    },
    mounted() {
        this.$nextTick(() => {
            setTimeout(() => {
                this._html2canvas()
            }, 100);
        })
    },
    methods: {
        _html2canvas() {
            let _this = this
            var shareContent = this.$refs.poster;//需要截图的包裹的（原生的）DOM 对象
            var width = shareContent.offsetWidth; //获取dom 宽度
            var height = shareContent.offsetHeight; //获取dom 高度
            console.log(width, 'width', height, 'height')
            var canvas = document.createElement("canvas"); //创建一个canvas节点
            var scale = 3; //定义任意放大倍数 支持小数
            canvas.width = width * scale; //定义canvas 宽度 * 缩放
            canvas.height = height * scale; //定义canvas高度 *缩放
            canvas.getContext("2d").scale(scale, scale); //获取context,设置scale
            var opts = {
                scale: scale, // 添加的scale 参数
                canvas: canvas, //自定义 canvas
                logging: false, //日志开关，便于查看html2canvas的内部执行流程
                width: width, //dom 原始宽度
                height: height,
                useCORS: true // 【重要】开启跨域配置
            };
            html2canvas(shareContent, opts).then(function (canvas) {
                var context = canvas.getContext('2d');
                // 【重要】关闭抗锯齿
                context.mozImageSmoothingEnabled = false;
                context.webkitImageSmoothingEnabled = false;
                context.msImageSmoothingEnabled = false;
                context.imageSmoothingEnabled = false;
                // 【重要】默认转化的格式为png,也可设置为其他格式
                _this.src = canvas.toDataURL()
                _this.$refs.img.onload = function () {
                    setTimeout(() => {
                        _this.showFlag = false
                    }, 1000)
                }
            });
        }
    },
}
</script>
