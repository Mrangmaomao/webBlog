import Header from './header/index.vue';
import Footer from './footer/index.vue';
import slider from 'vue-concise-slider';
import colorPicker from './colorPicker/index.vue';
const components = {
  Header,slider,colorPicker,Footer
}
const install = function (Vue, opts = {}) {
    Object.keys(components).forEach((key) => {
        Vue.component(key, components[key])
    })

}
const VuePlugin = Object.assign(components, {install})
export default VuePlugin
