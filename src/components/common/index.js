import commonScroll from './commonScroll/index'
import _utils from './utils/index'

const components = [
    commonScroll,
]
const install = function (Vue) {
    components.map(component => {
        Vue.component(component.name, component);
    });
    Vue.prototype._utils = _utils
}
export default install
