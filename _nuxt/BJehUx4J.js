import{a as f}from"./CrG6MVDB.js";import{H as h,D as d,c as s,o as l,d as m,Y as g,W as b,g as v,a as $,e as z,E as y,f as i,n as c,t as k}from"./Di6wo0dh.js";var w=function(a){var e=a.dt;return`
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
`)},V={root:function(a){var e=a.instance,n=a.props;return["p-textarea p-component",{"p-filled":e.$filled,"p-textarea-resizable ":n.autoResize,"p-textarea-sm p-inputfield-sm":n.size==="small","p-textarea-lg p-inputfield-lg":n.size==="large","p-invalid":e.$invalid,"p-variant-filled":e.$variant==="filled","p-textarea-fluid":e.$fluid}]}},B=h.extend({name:"textarea",theme:w,classes:V}),T={name:"BaseTextarea",extends:f,props:{autoResize:Boolean},style:B,provide:function(){return{$pcTextarea:this,$parentInstance:this}}},u={name:"Textarea",extends:T,inheritAttrs:!1,observer:null,mounted:function(){var a=this;this.autoResize&&(this.observer=new ResizeObserver(function(){a.resize()}),this.observer.observe(this.$el))},updated:function(){this.autoResize&&this.resize()},beforeUnmount:function(){this.observer&&this.observer.disconnect()},methods:{resize:function(){this.$el.offsetParent&&(this.$el.style.height="auto",this.$el.style.height=this.$el.scrollHeight+"px",parseFloat(this.$el.style.height)>=parseFloat(this.$el.style.maxHeight)?(this.$el.style.overflowY="scroll",this.$el.style.height=this.$el.style.maxHeight):this.$el.style.overflow="hidden")},onInput:function(a){this.autoResize&&this.resize(),this.writeValue(a.target.value,a)}},computed:{attrs:function(){return d(this.ptmi("root",{context:{filled:this.$filled,disabled:this.disabled}}),this.formField)}}},I=["value","disabled","aria-invalid"];function R(t,a,e,n,o,r){return l(),s("textarea",d({class:t.cx("root"),value:t.d_value,disabled:t.disabled,"aria-invalid":t.invalid||void 0,onInput:a[0]||(a[0]=function(){return r.onInput&&r.onInput.apply(r,arguments)})},r.attrs),null,16,I)}u.render=R;const M=m({__name:"BaseTextarea",props:g({placeholder:{default:""},maxLength:{default:0}},{modelValue:{required:!0},modelModifiers:{}}),emits:["update:modelValue"],setup(t){const a=b(t,"modelValue"),e=v(()=>t.maxLength===0?{}:{maxlength:t.maxLength}),n=$("BaseTextarea");return(o,r)=>{const p=u;return l(),s("div",{class:c(i(n)())},[z(p,d(i(e),{modelValue:a.value,"onUpdate:modelValue":r[0]||(r[0]=x=>a.value=x),fluid:"","pt:root:class":i(n)("text"),placeholder:o.placeholder}),null,16,["modelValue","pt:root:class","placeholder"]),o.maxLength?(l(),s("span",{key:0,class:c(i(n)("symbolsAmount"))},k(`${a.value.length}/${o.maxLength}`),3)):y("",!0)],2)}}});export{M as _};
