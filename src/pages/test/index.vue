<style lang="less" scoped>
.test {
    opacity: 1;
}
</style>

<template>
    <div>
        <!-- <img src="./showtips.png" alt=""> -->
        <div ref="poster" v-show="show" class="test">
            <img src="http://maint.deeptel.com.cn/upload/image/2/gh_4e99235906d9/1/1532420903760.jpg" alt="">
        </div>
        <div>
            <img v-show="src" :src="src" alt="" ref="img" style="width:50%">
        </div>
    </div>
</template>

<script>
import html2canvas from 'html2canvas'
export default {
    data() {
        return {
            show: true,
            src: ''
        }
    },
    computed: {

    },
    mounted() {
        this.$nextTick(() => {
            setTimeout(() => {
                this.test()
            }, 10);
        })

    },
    methods: {
        test() {
            let _this = this

            var shareContent = this.$refs.poster;//需要截图的包裹的（原生的）DOM 对象
            var width = shareContent.offsetWidth; //获取dom 宽度
            var height = shareContent.offsetHeight; //获取dom 高度
            console.log(width, 'width', height, 'height')
            var canvas = document.createElement("canvas"); //创建一个canvas节点
            var scale = 2; //定义任意放大倍数 支持小数
            canvas.width = width * scale; //定义canvas 宽度 * 缩放
            canvas.height = height * scale; //定义canvas高度 *缩放
            canvas.getContext("2d").scale(scale, scale); //获取context,设置scale
            var opts = {
                scale: scale, // 添加的scale 参数
                canvas: canvas, //自定义 canvas
                // logging: true, //日志开关，便于查看html2canvas的内部执行流程
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

                // _this.$refs.img.width = width + "px"
                // _this.$refs.img.height = height + "px"
                // console.log(_this.$refs.img.width, '_this.$refs.img.width')

            });
        }
    },
}
</script>
