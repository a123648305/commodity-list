<style lang="less" scoped>
.content-box {
    position: absolute;
    background-color: #fff;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
}
.wrapper {
    height: 100%;
}
.pulling-down-tips {
    position: absolute;
    top: -50px;
    width: 100%;
    height: 50px;
    text-align: center;
    .tips-box {
        position: relative;
        display: inline-block;
        width: 200px;
        line-height: 25px;
    }
    .iconfont {
        position: absolute;
        top: 10px;
        left: 1px;
        font-size: 22px;
    }
}
</style>

<template>
    <div class="content-box">

        <div class="wrapper" ref="wrapper">
            <div>
                <div ref="content">
                    <div v-if="options.pullingDown">
                        <div class="pulling-down-tips" :style="pullDownStyle" ref="pullingDownTips">
                            <div class="tips-box">
                                <i class="iconfont icon-jiantou1"></i>
                                <p>松开立即刷新</p>
                                <p>
                                    <span>最后更新：今天</span>
                                    <span v-text="_utils.dateFormat(time, 'hh:mm')"></span>
                                </p>
                            </div>
                        </div>
                        <loading v-if="loadingFlag"></loading>
                    </div>
                    <slot name="content"></slot>
                </div>
                <div v-if="options.loading">加载中....</div>
                <div v-if="options.noMore">--已经到底了--</div>
            </div>
        </div>
    </div>
</template>

<script>
import loading from './loading/loading'
import BScroll from 'better-scroll'
const getRect = (el) => {
    if (el instanceof window.SVGElement) {
        let rect = el.getBoundingClientRect()
        return {
            top: rect.top,
            left: rect.left,
            width: rect.width,
            height: rect.height
        }
    } else {
        return {
            top: el.offsetTop,
            left: el.offsetLeft,
            width: el.offsetWidth,
            height: el.offsetHeight
        }
    }
}
export default {
    name: 'common-scroll',
    components: { loading },
    props: {
        options: {
            type: Object,
            default() {
                return {
                    top: 43,
                    loading: false,
                    noMore: false,
                    bottom: 0,
                    pullingDown: false
                }
            }
        }
    },
    data() {
        return {
            pullingDownTips: false,
            time: new Date().getTime(),
            loadingFlag: false,
            scrollFlag: false,
            pullDownStyle: '',
            pullDownInitTop: -50
        }
    },
    destroyed() {
        this.scroll && this.scroll.destroy()
    },
    mounted() {
        this._scrollInit()
    },
    methods: {
        _scrollInit() {
            this.$nextTick(() => {
                console.log(window.innerHeight, 'height')
                let hh = `${this.options.top}` + `${this.options.bottom}`
                this.$refs.content.style.minHeight = `${window.innerHeight + 1}px`
                this.$refs.content.style.paddingTop = `${this.options.top}px`
                this.$refs.content.style.paddingBottom = `${this.options.bottom}px`
                let _options = {
                    mouseWheel: true,
                    probeType: 3,
                    click: true,
                    openPullUp: true,
                    pullUpLoad: {
                        threshold: 50,
                    },
                    pullDownRefresh: {
                        threshold: 90,
                        stop: 0
                    }
                }
                this.scroll = new BScroll(this.$refs.wrapper, _options)

                this.scroll.on('beforeScrollStart', () => {
                    this.scroll.refresh()
                })
                this.scroll.on('pullingUp', (pos) => {
                    console.log('pullingUp')
                    this.$emit('pullingUp')
                })
                this.scroll.on('pullingDown', () => {
                    this.loadingFlag = true
                    this.$emit('pullingDown')
                })

                this.scroll.on('scroll', (pos) => {
                    if (!this.options.pullingDown) return false
                    if (!this.scrollFlag) return false
                    const _pullingDownTips = this.$refs.pullingDownTips
                    if (pos.y < 70) this.pullDownStyle = `top:${Math.min(pos.y * 0.8 + this.pullDownInitTop, 10)}px`
                })
                this.scroll.on('scrollEnd', (pos) => {
                    if (!this.options.pullingDown) return false
                    this.scrollFlag = false
                })
                this.scroll.on('scrollStart', (pos) => {
                    if (!this.options.pullingDown) return false
                    this.time = new Date().getTime()
                    this.scrollFlag = true
                })
            })
        },
        refresh() {
            console.log('refresh刷新了...')
            this.scroll.finishPullUp()
            this.scroll.finishPullDown()
            this.scroll.refresh()
            this.loadingFlag = false
        },
    },
}
</script>
