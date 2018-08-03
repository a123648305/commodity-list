import commonNoData from './src/main';

/* istanbul ignore next */
commonNoData.install = function (Vue) {
    Vue.component(commonNoData.name, commonNoData);
};

export default commonNoData;
