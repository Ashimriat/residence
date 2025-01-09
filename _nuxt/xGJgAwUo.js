import{H as m,az as v,R as S,M as A,D as z,o as d,c as b,b as f,r as h,n as k,x as c,k as C,t as B,ao as g,a2 as p,V as $,F as D,g as K,h as w,av as P,w as x,d as E,a as F,e as q}from"./SYL6cD_r.js";import{s as L}from"./umqxLsXu.js";var _=function(n){var t=n.dt;return`
.p-togglebutton {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    color: `.concat(t("togglebutton.color"),`;
    background: `).concat(t("togglebutton.background"),`;
    border: 1px solid `).concat(t("togglebutton.border.color"),`;
    padding: `).concat(t("togglebutton.padding"),`;
    font-size: 1rem;
    font-family: inherit;
    font-feature-settings: inherit;
    transition: background `).concat(t("togglebutton.transition.duration"),", color ").concat(t("togglebutton.transition.duration"),", border-color ").concat(t("togglebutton.transition.duration"),`,
        outline-color `).concat(t("togglebutton.transition.duration"),", box-shadow ").concat(t("togglebutton.transition.duration"),`;
    border-radius: `).concat(t("togglebutton.border.radius"),`;
    outline-color: transparent;
    font-weight: `).concat(t("togglebutton.font.weight"),`;
}

.p-togglebutton-content {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: `).concat(t("togglebutton.gap"),`;
}

.p-togglebutton-label,
.p-togglebutton-icon {
    position: relative;
    transition: none;
}

.p-togglebutton::before {
    content: "";
    background: transparent;
    transition: background `).concat(t("togglebutton.transition.duration"),", color ").concat(t("togglebutton.transition.duration"),", border-color ").concat(t("togglebutton.transition.duration"),`,
            outline-color `).concat(t("togglebutton.transition.duration"),", box-shadow ").concat(t("togglebutton.transition.duration"),`;
    position: absolute;
    inset-inline-start: `).concat(t("togglebutton.content.left"),`;
    inset-block-start: `).concat(t("togglebutton.content.top"),`;
    width: calc(100% - calc(2 * `).concat(t("togglebutton.content.left"),`));
    height: calc(100% - calc(2 * `).concat(t("togglebutton.content.top"),`));
    border-radius: `).concat(t("togglebutton.border.radius"),`;
}

.p-togglebutton.p-togglebutton-checked::before {
    background: `).concat(t("togglebutton.content.checked.background"),`;
    box-shadow: `).concat(t("togglebutton.content.checked.shadow"),`;
}

.p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover {
    background: `).concat(t("togglebutton.hover.background"),`;
    color: `).concat(t("togglebutton.hover.color"),`;
}

.p-togglebutton.p-togglebutton-checked {
    background: `).concat(t("togglebutton.checked.background"),`;
    border-color: `).concat(t("togglebutton.checked.border.color"),`;
    color: `).concat(t("togglebutton.checked.color"),`;
}

.p-togglebutton:focus-visible {
    box-shadow: `).concat(t("togglebutton.focus.ring.shadow"),`;
    outline: `).concat(t("togglebutton.focus.ring.width")," ").concat(t("togglebutton.focus.ring.style")," ").concat(t("togglebutton.focus.ring.color"),`;
    outline-offset: `).concat(t("togglebutton.focus.ring.offset"),`;
}

.p-togglebutton.p-invalid {
    border-color: `).concat(t("togglebutton.invalid.border.color"),`;
}

.p-togglebutton:disabled {
    opacity: 1;
    cursor: default;
    background: `).concat(t("togglebutton.disabled.background"),`;
    border-color: `).concat(t("togglebutton.disabled.border.color"),`;
    color: `).concat(t("togglebutton.disabled.color"),`;
}

.p-togglebutton-icon {
    color: `).concat(t("togglebutton.icon.color"),`;
}

.p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover .p-togglebutton-icon {
    color: `).concat(t("togglebutton.icon.hover.color"),`;
}

.p-togglebutton.p-togglebutton-checked .p-togglebutton-icon {
    color: `).concat(t("togglebutton.icon.checked.color"),`;
}

.p-togglebutton:disabled .p-togglebutton-icon {
    color: `).concat(t("togglebutton.icon.disabled.color"),`;
}

.p-togglebutton-sm {
    padding: `).concat(t("togglebutton.sm.padding"),`;
    font-size: `).concat(t("togglebutton.sm.font.size"),`;
}

.p-togglebutton-lg {
    padding: `).concat(t("togglebutton.lg.padding"),`;
    font-size: `).concat(t("togglebutton.lg.font.size"),`;
}
`)},j={root:function(n){var t=n.instance,l=n.props;return["p-togglebutton p-component",{"p-togglebutton-checked":t.active,"p-invalid":t.$invalid,"p-togglebutton-sm p-inputfield-sm":l.size==="small","p-togglebutton-lg p-inputfield-lg":l.size==="large"}]},content:"p-togglebutton-content",icon:"p-togglebutton-icon",label:"p-togglebutton-label"},N=m.extend({name:"togglebutton",theme:_,classes:j}),R={name:"BaseToggleButton",extends:L,props:{onIcon:String,offIcon:String,onLabel:{type:String,default:"Yes"},offLabel:{type:String,default:"No"},iconPos:{type:String,default:"left"},readonly:{type:Boolean,default:!1},tabindex:{type:Number,default:null},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null},size:{type:String,default:null}},style:N,provide:function(){return{$pcToggleButton:this,$parentInstance:this}}},O={name:"ToggleButton",extends:R,inheritAttrs:!1,emits:["change"],methods:{getPTOptions:function(n){var t=n==="root"?this.ptmi:this.ptm;return t(n,{context:{active:this.active,disabled:this.disabled}})},onChange:function(n){!this.disabled&&!this.readonly&&(this.writeValue(!this.d_value,n),this.$emit("change",n))},onBlur:function(n){var t,l;(t=(l=this.formField).onBlur)===null||t===void 0||t.call(l,n)}},computed:{active:function(){return this.d_value===!0},hasLabel:function(){return v(this.onLabel)&&v(this.offLabel)},label:function(){return this.hasLabel?this.d_value?this.onLabel:this.offLabel:" "}},directives:{ripple:S}},H=["tabindex","disabled","aria-pressed","aria-labelledby","data-p-checked","data-p-disabled"];function M(e,n,t,l,r,o){var i=A("ripple");return z((d(),b("button",c({type:"button",class:e.cx("root"),tabindex:e.tabindex,disabled:e.disabled,"aria-pressed":e.d_value,onClick:n[0]||(n[0]=function(){return o.onChange&&o.onChange.apply(o,arguments)}),onBlur:n[1]||(n[1]=function(){return o.onBlur&&o.onBlur.apply(o,arguments)})},o.getPTOptions("root"),{"aria-labelledby":e.ariaLabelledby,"data-p-checked":o.active,"data-p-disabled":e.disabled}),[f("span",c({class:e.cx("content")},o.getPTOptions("content")),[h(e.$slots,"default",{},function(){return[h(e.$slots,"icon",{value:e.d_value,class:k(e.cx("icon"))},function(){return[e.onIcon||e.offIcon?(d(),b("span",c({key:0,class:[e.cx("icon"),e.d_value?e.onIcon:e.offIcon]},o.getPTOptions("icon")),null,16)):C("",!0)]}),f("span",c({class:e.cx("label")},o.getPTOptions("label")),B(o.label),17)]})],16)],16,H)),[[i]])}O.render=M;var U=function(n){var t=n.dt;return`
.p-selectbutton {
    display: inline-flex;
    user-select: none;
    vertical-align: bottom;
    outline-color: transparent;
    border-radius: `.concat(t("selectbutton.border.radius"),`;
}

.p-selectbutton .p-togglebutton {
    border-radius: 0;
    border-width: 1px 1px 1px 0;
}

.p-selectbutton .p-togglebutton:focus-visible {
    position: relative;
    z-index: 1;
}

.p-selectbutton .p-togglebutton:first-child {
    border-inline-start-width: 1px;
    border-start-start-radius: `).concat(t("selectbutton.border.radius"),`;
    border-end-start-radius: `).concat(t("selectbutton.border.radius"),`;
}

.p-selectbutton .p-togglebutton:last-child {
    border-start-end-radius: `).concat(t("selectbutton.border.radius"),`;
    border-end-end-radius: `).concat(t("selectbutton.border.radius"),`;
}

.p-selectbutton.p-invalid {
    outline: 1px solid `).concat(t("selectbutton.invalid.border.color"),`;
    outline-offset: 0;
}
`)},W={root:function(n){var t=n.instance;return["p-selectbutton p-component",{"p-invalid":t.$invalid}]}},Y=m.extend({name:"selectbutton",theme:U,classes:W}),G={name:"BaseSelectButton",extends:L,props:{options:Array,optionLabel:null,optionValue:null,optionDisabled:null,multiple:Boolean,allowEmpty:{type:Boolean,default:!0},dataKey:null,ariaLabelledby:{type:String,default:null},size:{type:String,default:null}},style:Y,provide:function(){return{$pcSelectButton:this,$parentInstance:this}}};function J(e,n){var t=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=T(e))||n){t&&(e=t);var l=0,r=function(){};return{s:r,n:function(){return l>=e.length?{done:!0}:{done:!1,value:e[l++]}},e:function(s){throw s},f:r}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var o,i=!0,a=!1;return{s:function(){t=t.call(e)},n:function(){var s=t.next();return i=s.done,s},e:function(s){a=!0,o=s},f:function(){try{i||t.return==null||t.return()}finally{if(a)throw o}}}}function Q(e){return tt(e)||Z(e)||T(e)||X()}function X(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function T(e,n){if(e){if(typeof e=="string")return y(e,n);var t={}.toString.call(e).slice(8,-1);return t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set"?Array.from(e):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?y(e,n):void 0}}function Z(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function tt(e){if(Array.isArray(e))return y(e)}function y(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,l=Array(n);t<n;t++)l[t]=e[t];return l}var I={name:"SelectButton",extends:G,inheritAttrs:!1,emits:["change"],methods:{getOptionLabel:function(n){return this.optionLabel?g(n,this.optionLabel):n},getOptionValue:function(n){return this.optionValue?g(n,this.optionValue):n},getOptionRenderKey:function(n){return this.dataKey?g(n,this.dataKey):this.getOptionLabel(n)},isOptionDisabled:function(n){return this.optionDisabled?g(n,this.optionDisabled):!1},onOptionSelect:function(n,t,l){var r=this;if(!(this.disabled||this.isOptionDisabled(t))){var o=this.isSelected(t);if(!(o&&!this.allowEmpty)){var i=this.getOptionValue(t),a;this.multiple?o?a=this.d_value.filter(function(u){return!p(u,i,r.equalityKey)}):a=this.d_value?[].concat(Q(this.d_value),[i]):[i]:a=o?null:i,this.writeValue(a,n),this.$emit("change",{event:n,value:a})}}},isSelected:function(n){var t=!1,l=this.getOptionValue(n);if(this.multiple){if(this.d_value){var r=J(this.d_value),o;try{for(r.s();!(o=r.n()).done;){var i=o.value;if(p(i,l,this.equalityKey)){t=!0;break}}}catch(a){r.e(a)}finally{r.f()}}}else t=p(this.d_value,l,this.equalityKey);return t}},computed:{equalityKey:function(){return this.optionValue?null:this.dataKey}},directives:{ripple:S},components:{ToggleButton:O}},et=["aria-labelledby"];function nt(e,n,t,l,r,o){var i=$("ToggleButton");return d(),b("div",c({class:e.cx("root"),role:"group","aria-labelledby":e.ariaLabelledby},e.ptmi("root")),[(d(!0),b(D,null,K(e.options,function(a,u){return d(),w(i,{key:o.getOptionRenderKey(a),modelValue:o.isSelected(a),onLabel:o.getOptionLabel(a),offLabel:o.getOptionLabel(a),disabled:e.disabled||o.isOptionDisabled(a),unstyled:e.unstyled,size:e.size,readonly:!e.allowEmpty&&o.isSelected(a),onChange:function(V){return o.onOptionSelect(V,a,u)},pt:e.ptm("pcToggleButton")},P({_:2},[e.$slots.option?{name:"default",fn:x(function(){return[h(e.$slots,"option",{option:a,index:u},function(){return[f("span",c({ref_for:!0},e.ptm("pcToggleButton").label),B(o.getOptionLabel(a)),17)]})]}),key:"0"}:void 0]),1032,["modelValue","onLabel","offLabel","disabled","unstyled","size","readonly","onChange","pt"])}),128))],16,et)}I.render=nt;const lt=E({__name:"BaseSelectButtons",props:{isInverted:{type:Boolean,default:!1},options:{}},setup(e){const n=F("BaseSelectButtons");return(t,l)=>{const r=I;return d(),w(r,{options:t.options,"option-label":"label","allow-empty":!1,class:k(q(n)({inverted:t.isInverted}))},null,8,["options","class"])}}});export{lt as _};