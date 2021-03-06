<template>
    <div ref="wrapper" class="list-wrapper">
        <div class="scroll-content">
            <div ref="listWrapper">
                <slot name="content"></slot>
            </div>
            <slot name="pullup" :pullUpLoad="pullUpLoad" :isPullUpLoad="isPullUpLoad">
                <div class="pullup-wrapper" v-if="pullUpLoad">
                    <div class="before-trigger" v-if="!isPullUpLoad">
                        <span>{{pullUpTxt}}</span>
                    </div>
                    <div class="after-trigger" v-else>
                        <loading></loading>
                    </div>
                </div>
            </slot>
        </div>
        <slot name="pulldown" :class="showPullDownTips?'pulldown-show':'pulldown-hide'" :pullDownRefresh="pullDownRefresh" :pullDownStyle="pullDownStyle" :beforePullDown="beforePullDown" :isPullingDown="isPullingDown" :bubbleY="bubbleY">
            <div ref="pulldown" class="pulldown-wrapper" :style="pullDownStyle" v-if="pullDownRefresh">
                <div class="before-trigger" v-if="beforePullDown">
                    <bubble :y="bubbleY"></bubble>
                </div>
                <div class="after-trigger" v-else>
                    <div v-if="isPullingDown" class="loading">
                        <loading></loading>
                    </div>
                    <div v-else>
                        <span>{{refreshTxt}}</span>
                    </div>
                </div>
            </div>
        </slot>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
import Loading from './loading/loading.vue'
import Bubble from './bubble/bubble.vue'
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

const COMPONENT_NAME = 'common-scroll'
const DIRECTION_H = 'horizontal'
const DIRECTION_V = 'vertical'

export default {
    name: COMPONENT_NAME,
    props: {
        data: {
            type: Array,
            default: function () {
                return []
            }
        },
        probeType: {
            type: Number,
            default: 1
        },
        click: {
            type: Boolean,
            default: true
        },
        listenScroll: {
            type: Boolean,
            default: false
        },
        listenBeforeScroll: {
            type: Boolean,
            default: false
        },
        listenScrollEnd: {
            type: Boolean,
            default: false
        },
        direction: {
            type: String,
            default: DIRECTION_V
        },
        scrollbar: {
            type: null,
            default: false
        },
        pullDownRefresh: {
            type: null,
            default: false
        },
        pullUpLoad: {
            type: null,
            default: false
        },
        startY: {
            type: Number,
            default: 0
        },
        refreshDelay: {
            type: Number,
            default: 20
        },
        freeScroll: {
            type: Boolean,
            default: false
        },
        mouseWheel: {
            type: Boolean,
            default: false
        },
        bounce: {
            default: true
        },
        zoom: {
            default: false
        },
        scrollY: {
            default: true
        },
        scrollX: {
            default: false
        },
        showPullDownTips: {
            default: true
        }
    },
    data() {
        return {
            beforePullDown: true,
            isRebounding: false,
            isPullingDown: false,
            isPullUpLoad: false,
            pullUpDirty: true,
            pullDownStyle: '',
            bubbleY: 0
        }
    },
    computed: {
        pullUpTxt() {
            return this.pullUpDirty ? '加载...' : '没有更多了...'
        },
        refreshTxt() {
            return (this.pullDownRefresh && this.pullDownRefresh.txt) || '刷新成功'
        }
    },
    created() {
        this.pullDownInitTop = -50
    },
    mounted() {
        setTimeout(() => {
            this.initScroll()
        }, 20)
    },
    destroyed() {
        this.$refs.scroll && this.$refs.scroll.destroy()
    },
    methods: {
        reInitScroll() {
            if (this.$refs.scroll) this.$refs.scroll.destroy()
            this.initScroll()
        },
        setHeight() {
            if (this.$refs.listWrapper && (this.pullDownRefresh || this.pullUpLoad)) {
                this.$refs.listWrapper.style.minHeight = `${getRect(this.$refs.wrapper).height + 1}px`
                this.$refs.wrapper.style.minHeight = `${window.innerHeight}px`
            }
        },
        initScroll() {
            console.log(window.innerHeight, 'this.$refs.wrapper')
            if (!this.$refs.wrapper) {
                return
            }
            this.setHeight()
            let options = {
                probeType: this.probeType,
                click: this.click,
                scrollY: this.scrollY,
                scrollX: this.scrollX,
                // scrollbar: this.scrollbar,
                pullDownRefresh: this.pullDownRefresh,
                pullUpLoad: this.pullUpLoad,
                startY: this.startY,
                freeScroll: this.freeScroll,
                mouseWheel: this.mouseWheel,
                bounce: this.bounce,
                zoom: this.zoom
            }
            console.log(options, 'options')
            this.scroll = new BScroll(this.$refs.wrapper, options)
            this.scroll.on('beforeScrollStart', () => {
                this.scroll.refresh()
            })
            console.log(this.listenScroll, 'listenScroll')
            if (this.listenScroll) {
                this.scroll.on('scroll', (pos) => {
                    this.$emit('scroll', pos)
                })
            }
            console.log(this.listenScrollEnd, 'listenScrollEnd')
            if (this.listenScrollEnd) {
                this.scroll.on('scrollEnd', (pos) => {
                    this.$emit('scrollEnd', pos)
                })
            }
            console.log(this.listenBeforeScroll, 'listenBeforeScroll')
            if (this.listenBeforeScroll) {
                this.scroll.on('beforeScrollStart', () => {
                    this.$emit('beforeScrollStart')
                })

                this.scroll.on('scrollStart', () => {
                    this.$emit('scroll-start')
                })
            }
            console.log(this.pullDownRefresh, 'pullDownRefresh')
            if (this.pullDownRefresh) {
                this._initPullDownRefresh()
            }
            console.log(this.pullUpLoad, 'pullUpLoad')
            if (this.pullUpLoad) {
                this._initPullUpLoad()
            }
        },
        disable() {
            this.scroll && this.scroll.disable()
        },
        enable() {
            this.scroll && this.scroll.enable()
        },
        refresh() {
            this.scroll && this.scroll.refresh()
        },
        //设置滚动条的Y位置
        scrollTo() {
            return this.scroll.scrollTo(0, -214)
            //this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments)
        },
        scrollToElement() {
            this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
        },
        clickItem(e, item) {
            this.$emit('click', item)
        },
        destroy() {
            this.scroll.destroy()
        },
        forceUpdate(dirty) {
            if (this.pullDownRefresh && this.isPullingDown) {
                this.isPullingDown = false
                this._reboundPullDown().then(() => {
                    this._afterPullDown()
                })
            } else if (this.pullUpLoad && this.isPullUpLoad) {
                this.isPullUpLoad = false
                this.scroll.finishPullUp()
                this.pullUpDirty = dirty
                this.refresh()
            } else {
                this.refresh()
            }
        },
        _initPullDownRefresh() {
            this.scroll.on('pullingDown', () => {
                this.beforePullDown = false
                this.isPullingDown = true
                this.$emit('pullingDown')
            })

            this.scroll.on('scroll', (pos) => {
                if (!this.pullDownRefresh) {
                    return
                }
                if (this.beforePullDown) {
                    this.bubbleY = Math.max(0, pos.y + this.pullDownInitTop)
                    this.pullDownStyle = `top:${Math.min(pos.y + this.pullDownInitTop, 10)}px`
                } else {
                    this.bubbleY = 0
                }

                if (this.isRebounding) {
                    this.pullDownStyle = `top:${10 - (this.pullDownRefresh.stop - pos.y)}px`
                }
            })
        },
        _initPullUpLoad() {
            this.scroll.on('pullingUp', () => {
                this.isPullUpLoad = true
                this.$emit('pullingUp')
            })
        },
        _reboundPullDown() {
            const { stopTime = 600 } = this.pullDownRefresh
            return new Promise((resolve) => {
                setTimeout(() => {
                    this.isRebounding = true
                    this.scroll.finishPullDown()
                    resolve()
                }, stopTime)
            })
        },
        _afterPullDown() {
            setTimeout(() => {
                this.pullDownStyle = `top:${this.pullDownInitTop}px`
                this.beforePullDown = true
                this.isRebounding = false
                this.refresh()
            }, this.scroll.options.bounceTime)
        }
    },
    watch: {
        data() {
            setTimeout(() => {
                this.forceUpdate(true)
            }, this.refreshDelay)
        }
    },
    components: {
        Loading,
        Bubble
    }
}
</script>

<style lang="less" scoped>
.list-wrapper {
    position: relative;
    height: 10px;
    /* position: absolute */
    /* left: 0 */
    /* top: 0 */
    /* right: 0 */
    /* bottom: 0 */
    overflow: hidden;
    -webkit-overflow-scrolling: touch;
    background-color: #f0f4f7;

    .scroll-content {
        position: relative;
        z-index: 1;
    }

    .list-content {
        position: relative;
        z-index: 10;
        background: #fff;

        .list-item {
            height: 60px;
            line-height: 60px;
            font-size: 18px;
            padding-left: 20px;
            border-bottom: 1px solid #e5e5e5;
        }
    }
}

.pulldown-wrapper {
    position: absolute;
    width: 100%;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all;
    // top: -100px; //add
    .after-trigger {
        margin-top: 10px;
    }
}

.pullup-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px 0;
}
.pulldown-show {
    opacity: 1;
}
.pulldown-hide {
    opacity: 0;
}
</style>
