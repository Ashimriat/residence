import{P as f,R as m,ae as $,a7 as v,aD as y,g as B,c as p,o as s,e as d,b as g,r as o,h as c,K as a,t as k,n as w,w as h,j as P,s as C,E as D,G as A,a5 as S}from"./Dmc01CeK.js";import{s as K}from"./qATb2Bky.js";import{s as E}from"./CJyWqgM9.js";var I=({dt:e})=>`
.p-panel {
    border: 1px solid ${e("panel.border.color")};
    border-radius: ${e("panel.border.radius")};
    background: ${e("panel.background")};
    color: ${e("panel.color")};
}

.p-panel-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${e("panel.header.padding")};
    background: ${e("panel.header.background")};
    color: ${e("panel.header.color")};
    border-style: solid;
    border-width: ${e("panel.header.border.width")};
    border-color: ${e("panel.header.border.color")};
    border-radius: ${e("panel.header.border.radius")};
}

.p-panel-toggleable .p-panel-header {
    padding: ${e("panel.toggleable.header.padding")};
}

.p-panel-title {
    line-height: 1;
    font-weight: ${e("panel.title.font.weight")};
}

.p-panel-content {
    padding: ${e("panel.content.padding")};
}

.p-panel-footer {
    padding: ${e("panel.footer.padding")};
}
`,L={root:function(n){var u=n.props;return["p-panel p-component",{"p-panel-toggleable":u.toggleable}]},header:"p-panel-header",title:"p-panel-title",headerActions:"p-panel-header-actions",pcToggleButton:"p-panel-toggle-button",contentContainer:"p-panel-content-container",content:"p-panel-content",footer:"p-panel-footer"},T=f.extend({name:"panel",style:I,classes:L}),N={name:"BasePanel",extends:v,props:{header:String,toggleable:Boolean,collapsed:Boolean,toggleButtonProps:{type:Object,default:function(){return{severity:"secondary",text:!0,rounded:!0}}}},style:T,provide:function(){return{$pcPanel:this,$parentInstance:this}}},j={name:"Panel",extends:N,inheritAttrs:!1,emits:["update:collapsed","toggle"],data:function(){return{d_collapsed:this.collapsed}},watch:{collapsed:function(n){this.d_collapsed=n}},methods:{toggle:function(n){this.d_collapsed=!this.d_collapsed,this.$emit("update:collapsed",this.d_collapsed),this.$emit("toggle",{originalEvent:n,value:this.d_collapsed})},onKeyDown:function(n){(n.code==="Enter"||n.code==="NumpadEnter"||n.code==="Space")&&(this.toggle(n),n.preventDefault())}},computed:{buttonAriaLabel:function(){return this.toggleButtonProps&&this.toggleButtonProps.ariaLabel?this.toggleButtonProps.ariaLabel:this.header},dataP:function(){return y({toggleable:this.toggleable})}},components:{PlusIcon:E,MinusIcon:K,Button:$},directives:{ripple:m}},V=["data-p"],M=["data-p"],R=["id"],z=["id","aria-labelledby"];function G(e,n,u,O,l,t){var b=B("Button");return s(),p("div",a({class:e.cx("root"),"data-p":t.dataP},e.ptmi("root")),[d("div",a({class:e.cx("header"),"data-p":t.dataP},e.ptm("header")),[o(e.$slots,"header",{id:e.$id+"_header",class:w(e.cx("title"))},function(){return[e.header?(s(),p("span",a({key:0,id:e.$id+"_header",class:e.cx("title")},e.ptm("title")),k(e.header),17,R)):c("",!0)]}),d("div",a({class:e.cx("headerActions")},e.ptm("headerActions")),[o(e.$slots,"icons"),e.toggleable?o(e.$slots,"togglebutton",{key:0,collapsed:l.d_collapsed,toggleCallback:function(i){return t.toggle(i)},keydownCallback:function(i){return t.onKeyDown(i)}},function(){return[g(b,a({id:e.$id+"_header",class:e.cx("pcToggleButton"),"aria-label":t.buttonAriaLabel,"aria-controls":e.$id+"_content","aria-expanded":!l.d_collapsed,unstyled:e.unstyled,onClick:n[0]||(n[0]=function(r){return t.toggle(e.event)}),onKeydown:n[1]||(n[1]=function(r){return t.onKeyDown(e.event)})},e.toggleButtonProps,{pt:e.ptm("pcToggleButton")}),{icon:h(function(r){return[o(e.$slots,e.$slots.toggleicon?"toggleicon":"togglericon",{collapsed:l.d_collapsed},function(){return[(s(),P(C(l.d_collapsed?"PlusIcon":"MinusIcon"),a({class:r.class},e.ptm("pcToggleButton").icon),null,16,["class"]))]})]}),_:3},16,["id","class","aria-label","aria-controls","aria-expanded","unstyled","pt"])]}):c("",!0)],16)],16,M),g(S,a({name:"p-toggleable-content"},e.ptm("transition")),{default:h(function(){return[D(d("div",a({id:e.$id+"_content",class:e.cx("contentContainer"),role:"region","aria-labelledby":e.$id+"_header"},e.ptm("contentContainer")),[d("div",a({class:e.cx("content")},e.ptm("content")),[o(e.$slots,"default")],16),e.$slots.footer?(s(),p("div",a({key:0,class:e.cx("footer")},e.ptm("footer")),[o(e.$slots,"footer")],16)):c("",!0)],16,z),[[A,!l.d_collapsed]])]}),_:3},16)],16,V)}j.render=G;export{j as default};
