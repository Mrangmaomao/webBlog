import Header from './header/index.vue';
import slider from 'vue-concise-slider'
const components = {
  Header,slider
}
const install = function (Vue, opts = {}) {
    Object.keys(components).forEach((key) => {
        Vue.component(key, components[key])
    })

}
const VuePlugin = Object.assign(components, {install})
export default VuePlugin
