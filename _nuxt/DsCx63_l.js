import{B as l,aj as h,ak as c,o as d,c as u,x as p,m as y,N as m}from"./DCJqdLXD.js";var v=l.extend({name:"keyfilter-directive"}),g=h.extend({style:v});function b(t){return x(t)||E(t)||$(t)||k()}function k(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function $(t,e){if(t){if(typeof t=="string")return s(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(t,e):void 0}}function E(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function x(t){if(Array.isArray(t))return s(t)}function s(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=Array(e);n<e;n++)i[n]=t[n];return i}function o(t){"@babel/helpers - typeof";return o=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(t)}var B=g.extend("keyfilter",{beforeMount:function(e,n){var i=this.getTarget(e);if(i){if(i.$_pkeyfilterModifier=this.getModifiers(n),o(n.value)){var r,a;i.$_pkeyfilterPattern=((r=n.value)===null||r===void 0?void 0:r.pattern)||n.value,i.$_pkeyfilterValidateOnly=((a=n.value)===null||a===void 0?void 0:a.validateOnly)||!1}this.bindEvents(i),i.setAttribute("data-pd-keyfilter",!0)}},updated:function(e,n){var i=this.getTarget(e);if(i){if(i.$_pkeyfilterModifier=this.getModifiers(n),this.unbindEvents(e,n),o(n.value)){var r,a;i.$_pkeyfilterPattern=((r=n.value)===null||r===void 0?void 0:r.pattern)||n.value,i.$_pkeyfilterValidateOnly=((a=n.value)===null||a===void 0?void 0:a.validateOnly)||!1}this.bindEvents(i)}},unmounted:function(e,n){this.unbindEvents(e,n)},DEFAULT_PATTERNS:{pint:/[\d]/,int:/[\d\-]/,pnum:/[\d\.]/,money:/[\d\.\s,]/,num:/[\d\-\.]/,hex:/[0-9a-f]/i,email:/[a-z0-9_\.\-@]/i,alpha:/[a-z_]/i,alphanum:/[a-z0-9_]/i},methods:{getTarget:function(e){return c(e,"data-pc-name","inputtext")||c(e,"data-pc-name","textarea")?e:null},getModifiers:function(e){return e.modifiers&&Object.keys(e.modifiers).length?Object.keys(e.modifiers)[Object.keys.length-1]:""},getRegex:function(e){return e.$_pkeyfilterPattern?e.$_pkeyfilterPattern:e.$_pkeyfilterModifier?this.DEFAULT_PATTERNS[e.$_pkeyfilterModifier]:/./},bindEvents:function(e){var n=this;e.$_keyfilterKeydownEvent=function(i){return n.onKeydown(i,e)},e.$_keyfilterPasteEvent=function(i){return n.onPaste(i,e)},e.addEventListener("keypress",e.$_keyfilterKeydownEvent),e.addEventListener("paste",e.$_keyfilterPasteEvent)},unbindEvents:function(e){e.removeEventListener("keypress",e.$_keyfilterKeydownEvent),e.removeEventListener("paste",e.$_keyfilterPasteEvent),e.$_keyfilterKeydownEvent=null,e.$_keyfilterPasteEvent=null},onKeydown:function(e,n){if(!(e.ctrlKey||e.altKey||e.metaKey||e.key==="Tab")){var i=this.getRegex(n);if(i!==""){var r="".concat(e.key);n.$_pkeyfilterValidateOnly&&(r="".concat(e.target.value).concat(e.key)),i.test(r)||e.preventDefault()}}},onPaste:function(e,n){var i=this.getRegex(n);if(i!==""){var r=e.clipboardData.getData("text"),a="";b(r).forEach(function(f){if(n.$_pkeyfilterValidateOnly?a+=f:a=f,!i.test(a))return e.preventDefault(),!1})}}}}),_=function(e){var n=e.dt;return`
.p-iconfield {
    position: relative;
}

.p-inputicon {
    position: absolute;
    top: 50%;
    margin-top: calc(-1 * (`.concat(n("icon.size"),` / 2));
    color: `).concat(n("iconfield.icon.color"),`;
    line-height: 1;
}

.p-iconfield .p-inputicon:first-child {
    inset-inline-start: `).concat(n("form.field.padding.x"),`;
}

.p-iconfield .p-inputicon:last-child {
    inset-inline-end: `).concat(n("form.field.padding.x"),`;
}

.p-iconfield .p-inputtext:not(:first-child) {
    padding-inline-start: calc((`).concat(n("form.field.padding.x")," * 2) + ").concat(n("icon.size"),`);
}

.p-iconfield .p-inputtext:not(:last-child) {
    padding-inline-end: calc((`).concat(n("form.field.padding.x")," * 2) + ").concat(n("icon.size"),`);
}

.p-iconfield:has(.p-inputfield-sm) .p-inputicon {
    font-size: `).concat(n("form.field.sm.font.size"),`;
    width: `).concat(n("form.field.sm.font.size"),`;
    height: `).concat(n("form.field.sm.font.size"),`;
    margin-top: calc(-1 * (`).concat(n("form.field.sm.font.size"),` / 2));
}

.p-iconfield:has(.p-inputfield-lg) .p-inputicon {
    font-size: `).concat(n("form.field.lg.font.size"),`;
    width: `).concat(n("form.field.lg.font.size"),`;
    height: `).concat(n("form.field.lg.font.size"),`;
    margin-top: calc(-1 * (`).concat(n("form.field.lg.font.size"),` / 2));
}
`)},A={root:"p-iconfield"},I=l.extend({name:"iconfield",theme:_,classes:A}),S={name:"BaseIconField",extends:m,style:I,provide:function(){return{$pcIconField:this,$parentInstance:this}}},z={name:"IconField",extends:S,inheritAttrs:!1};function K(t,e,n,i,r,a){return d(),u("div",y({class:t.cx("root")},t.ptmi("root")),[p(t.$slots,"default")],16)}z.render=K;var T={root:"p-inputicon"},P=l.extend({name:"inputicon",classes:T}),w={name:"BaseInputIcon",extends:m,style:P,props:{class:null},provide:function(){return{$pcInputIcon:this,$parentInstance:this}}},M={name:"InputIcon",extends:w,inheritAttrs:!1,computed:{containerClass:function(){return[this.cx("root"),this.class]}}};function O(t,e,n,i,r,a){return d(),u("span",y({class:a.containerClass},t.ptmi("root")),[p(t.$slots,"default")],16)}M.render=O;export{B as K,z as a,M as s};
