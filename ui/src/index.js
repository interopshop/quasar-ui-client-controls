import { version } from '../package.json'

import InteropQBtn from './components/InteropQBtn.vue'
import InteropQBadge from './components/InteropQBadge.vue'
import Directive from './directives/Directive'



export {
  version,

  InteropQBtn,
  InteropQBadge,
  Directive
}

export default {
  version,

  InteropQBtn,
  InteropQBadge,
  Directive,

  install (Vue) {
    Vue.component(InteropQBtn.name, InteropQBtn)
    Vue.component(InteropQBadge.name, InteropQBadge)
    Vue.directive(Directive.name, Directive)
  }
}
