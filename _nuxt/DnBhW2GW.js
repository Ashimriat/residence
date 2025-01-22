import{s as x}from"./DR1mRw3s.js";import{B as h,m as s,o as i,c as l,I as f,ac as m,ad as g,f as b,K as v,N as $,M as d,D as z,w as y,L as k}from"./BaUA2V8M.js";var w=function(a){var e=a.dt;return`
.p-textarea {
    font-family: inherit;
    font-feature-settings: inherit;
    font-size: 1rem;
    color: `.concat(e("textarea.color"),`;
    background: `).concat(e("textarea.background"),`;
    padding-block: `).concat(e("textarea.padding.y"),`;
    padding-inline: `).concat(e("textarea.padding.x"),`;
    border: 1px solid `).concat(e("textarea.border.color"),`;
    transition: background `).concat(e("textarea.transition.duration"),", color ").concat(e("textarea.transition.duration"),", border-color ").concat(e("textarea.transition.duration"),", outline-color ").concat(e("textarea.transition.duration"),", box-shadow ").concat(e("textarea.transition.duration"),`;
    appearance: none;
    border-radius: `).concat(e("textarea.border.radius"),`;
    outline-color: transparent;
    box-shadow: `).concat(e("textarea.shadow"),`;
}

.p-textarea:enabled:hover {
    border-color: `).concat(e("textarea.hover.border.color"),`;
}

.p-textarea:enabled:focus {
    border-color: `).concat(e("textarea.focus.border.color"),`;
    box-shadow: `).concat(e("textarea.focus.ring.shadow"),`;
    outline: `).concat(e("textarea.focus.ring.width")," ").concat(e("textarea.focus.ring.style")," ").concat(e("textarea.focus.ring.color"),`;
    outline-offset: `).concat(e("textarea.focus.ring.offset"),`;
}

.p-textarea.p-invalid {
    border-color: `).concat(e("textarea.invalid.border.color"),`;
}

.p-textarea.p-variant-filled {
    background: `).concat(e("textarea.filled.background"),`;
}

.p-textarea.p-variant-filled:enabled:focus {
    background: `).concat(e("textarea.filled.focus.background"),`;
}

.p-textarea:disabled {
    opacity: 1;
    background: `).concat(e("textarea.disabled.background"),`;
    color: `).concat(e("textarea.disabled.color"),`;
}

.p-textarea::placeholder {
    color: `).concat(e("textarea.placeholder.color"),`;
}

.p-textarea.p-invalid::placeholder {
    color: `).concat(e("textarea.invalid.placeholder.color"),`;
}

.p-textarea-fluid {
    width: 100%;
}

.p-textarea-resizable {
    overflow: hidden;
    resize: none;
}

.p-textarea-sm {
    font-size: `).concat(e("textarea.sm.font.size"),`;
    padding-block: `).concat(e("textarea.sm.padding.y"),`;
    padding-inline: `).concat(e("textarea.sm.padding.x"),`;
}

.p-textarea-lg {
    font-size: `).concat(e("textarea.lg.font.size"),`;
    padding-block: `).concat(e("textarea.lg.padding.y"),`;
    padding-inline: `).concat(e("textarea.lg.padding.x"),`;
}
`)},B={root:function(a){var e=a.instance,r=a.props;return["p-textarea p-component",{"p-filled":e.$filled,"p-textarea-resizable ":r.autoResize,"p-textarea-sm p-inputfield-sm":r.size==="small","p-textarea-lg p-inputfield-lg":r.size==="large","p-invalid":e.$invalid,"p-variant-filled":e.$variant==="filled","p-textarea-fluid":e.$fluid}]}},V=h.extend({name:"textarea",theme:w,classes:B}),I={name:"BaseTextarea",extends:x,props:{autoResize:Boolean},style:V,provide:function(){return{$pcTextarea:this,$parentInstance:this}}},c={name:"Textarea",extends:I,inheritAttrs:!1,observer:null,mounted:function(){var a=this;this.autoResize&&(this.observer=new ResizeObserver(function(){a.resize()}),this.observer.observe(this.$el))},updated:function(){this.autoResize&&this.resize()},beforeUnmount:function(){this.observer&&this.observer.disconnect()},methods:{resize:function(){this.$el.offsetParent&&(this.$el.style.height="auto",this.$el.style.height=this.$el.scrollHeight+"px",parseFloat(this.$el.style.height)>=parseFloat(this.$el.style.maxHeight)?(this.$el.style.overflowY="scroll",this.$el.style.height=this.$el.style.maxHeight):this.$el.style.overflow="hidden")},onInput:function(a){this.autoResize&&this.resize(),this.writeValue(a.target.value,a)}},computed:{attrs:function(){return s(this.ptmi("root",{context:{filled:this.$filled,disabled:this.disabled}}),this.formField)}}},L=["value","disabled","aria-invalid"];function T(t,a,e,r,o,n){return i(),l("textarea",s({class:t.cx("root"),value:t.d_value,disabled:t.disabled,"aria-invalid":t.invalid||void 0,onInput:a[0]||(a[0]=function(){return n.onInput&&n.onInput.apply(n,arguments)})},n.attrs),null,16,L)}c.render=T;const R={key:0},C=f({__name:"BaseTextarea",props:m({placeholder:{default:""},maxLength:{default:0}},{modelValue:{required:!0},modelModifiers:{}}),emits:["update:modelValue"],setup(t){const a=g(t,"modelValue"),e=b(()=>t.maxLength===0?{}:{maxlength:t.maxLength}),r=v("BaseTextarea");return(o,n)=>{const u=c;return i(),l("div",{class:k(d(r)())},[$(u,s(d(e),{modelValue:a.value,"onUpdate:modelValue":n[0]||(n[0]=p=>a.value=p),fluid:"",placeholder:o.placeholder,maxlength:o.maxLength}),null,16,["modelValue","placeholder","maxlength"]),o.maxLength?(i(),l("span",R,z(`${a.value.length}/${o.maxLength}`),1)):y("",!0)],2)}}});export{C as _};
