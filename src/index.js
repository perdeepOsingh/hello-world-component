import HelloWorldComponent from '../src/hello-world-component.vue'

export function install(Vue, options = {}) {
    if (install.installed) return
    install.installed = true
    const {
        componentId = 'HelloWorldComponent'
    } = options
    Vue.component(componentId, HelloWorldComponent)
}

export default (install)
export {
    HelloWorldComponent
}