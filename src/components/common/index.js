import commonScroll from './commonScroll/index'
import _utils from './utils/index'
import commonNoData from './commonNoData/index'
const components = [
    commonScroll,
    commonNoData
]
const install = function (Vue) {
    components.map(component => {
        Vue.component(component.name, component);
    });
    Vue.prototype._utils = _utils
}
export default install
