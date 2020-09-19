/*!
 * @interopshop/quasar-ui-client-controls v0.0.3
 * (c) 2020 justinlplourde <jplou001@outlook.com>
 * Released under the MIT License.
 */
import{QBtn,QBadge}from"quasar";var version="0.0.3",script={name:"InteropQBtn",props:{label:{type:String,required:!0}},components:{QBtn:QBtn}};function normalizeComponent(e,_,n,t,i,o,r,s,c,v){"boolean"!=typeof r&&(c=s,s=r,r=!1);var a,d="function"==typeof n?n.options:n;if(e&&e.render&&(d.render=e.render,d.staticRenderFns=e.staticRenderFns,d._compiled=!0,i&&(d.functional=!0)),t&&(d._scopeId=t),o?(a=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),_&&_.call(this,c(e)),e&&e._registeredComponents&&e._registeredComponents.add(o)},d._ssrRegister=a):_&&(a=r?function(e){_.call(this,v(e,this.$root.$options.shadowRoot))}:function(e){_.call(this,s(e))}),a)if(d.functional){var u=d.render;d.render=function(e,_){return a.call(_),u(e,_)}}else{var p=d.beforeCreate;d.beforeCreate=p?[].concat(p,a):[a]}return n}var __vue_script__=script,__vue_render__=function(){var e=this.$createElement;return(this._self._c||e)("q-btn",{attrs:{label:this.label,color:"secondary"}})},__vue_staticRenderFns__=[],__vue_inject_styles__=void 0,__vue_scope_id__=void 0,__vue_module_identifier__=void 0,__vue_is_functional_template__=!1,__vue_component__=normalizeComponent({render:__vue_render__,staticRenderFns:__vue_staticRenderFns__},__vue_inject_styles__,__vue_script__,__vue_scope_id__,__vue_is_functional_template__,__vue_module_identifier__,!1,void 0,void 0,void 0),script$1={name:"InteropQBadge",props:{label:{type:String,required:!0}},components:{QBadge:QBadge}},__vue_script__$1=script$1,__vue_render__$1=function(){var e=this.$createElement;return(this._self._c||e)("q-badge",{attrs:{label:this.label,color:"secondary"}})},__vue_staticRenderFns__$1=[],__vue_inject_styles__$1=void 0,__vue_scope_id__$1=void 0,__vue_module_identifier__$1=void 0,__vue_is_functional_template__$1=!1,__vue_component__$1=normalizeComponent({render:__vue_render__$1,staticRenderFns:__vue_staticRenderFns__$1},__vue_inject_styles__$1,__vue_script__$1,__vue_scope_id__$1,__vue_is_functional_template__$1,__vue_module_identifier__$1,!1,void 0,void 0,void 0),Directive={name:"my-directive",bind:function(e){}},Plugin={version:version,InteropQBtn:__vue_component__,InteropQBadge:__vue_component__$1,Directive:Directive,install:function(e){e.component(__vue_component__.name,__vue_component__),e.component(__vue_component__$1.name,__vue_component__$1),e.directive(Directive.name,Directive)}};export default Plugin;export{Directive,__vue_component__$1 as InteropQBadge,__vue_component__ as InteropQBtn,version};